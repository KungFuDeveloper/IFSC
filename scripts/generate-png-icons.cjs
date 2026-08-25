const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// CRC32 implementation for PNG chunks
function createCRC32Table() {
  let c;
  const table = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[n] = c;
  }
  return table;
}

const crcTable = createCRC32Table();

function crc32(buf) {
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xFF];
  }
  return (crc ^ (-1)) >>> 0;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);

  const typeBuf = Buffer.from(type, 'ascii');
  const typeAndData = Buffer.concat([typeBuf, data]);

  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(typeAndData), 0);

  return Buffer.concat([len, typeAndData, crc]);
}

function createPng(width, height) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData.writeUInt8(8, 8); // 8-bit depth
  ihdrData.writeUInt8(6, 9); // RGBA
  ihdrData.writeUInt8(0, 10); // deflate
  ihdrData.writeUInt8(0, 11); // filter
  ihdrData.writeUInt8(0, 12); // no interlace

  const ihdrChunk = makeChunk('IHDR', ihdrData);

  // Pixel buffer (1 filter byte + 4 bytes per pixel per row)
  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowSize);

  const centerX = width / 2;
  const centerY = height / 2;
  const radius = width * 0.45;
  const cornerRadius = width * 0.22;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter type 0 (None)

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;

      // Calculate emerald gradient
      const gradRatio = (x + y) / (width + height);
      let r = Math.round(22 + (15 - 22) * gradRatio);
      let g = Math.round(163 + (118 - 163) * gradRatio);
      let b = Math.round(74 + (110 - 74) * gradRatio);
      let a = 255;

      // Rounded rectangle test
      const dx = Math.max(Math.abs(x - centerX) - (centerX - cornerRadius), 0);
      const dy = Math.max(Math.abs(y - centerY) - (centerY - cornerRadius), 0);
      const distFromCorner = Math.sqrt(dx * dx + dy * dy);

      if (distFromCorner > cornerRadius) {
        a = 0; // transparent outside rounded box
      } else {
        // Draw Book shape / Brazilian Diamond in center
        const diamondDist = Math.abs(x - centerX) + Math.abs(y - centerY);
        if (diamondDist < width * 0.35 && diamondDist > width * 0.28) {
          // Gold accent diamond
          r = 250;
          g = 204;
          b = 21;
        }

        // Draw white book emblem in middle
        const bx = Math.abs(x - centerX);
        const by = Math.abs(y - centerY);
        if (bx < width * 0.22 && by < height * 0.18) {
          if (bx > width * 0.02 && (by < height * 0.14 || by > height * 0.16)) {
            // Book cover / pages
            r = 255;
            g = 255;
            b = 255;
          }
        }
      }

      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const compressedData = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const publicDir = path.join(__dirname, '../public');

// 192x192
fs.writeFileSync(path.join(publicDir, 'icon-192.png'), createPng(192, 192));
console.log('Created icon-192.png');

// 512x512
fs.writeFileSync(path.join(publicDir, 'icon-512.png'), createPng(512, 512));
console.log('Created icon-512.png');

// 180x180 apple-touch-icon
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), createPng(180, 180));
console.log('Created apple-touch-icon.png');
