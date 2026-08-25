import { ModuleData } from './types';

import m1 from './modules/module01.json';
import m2 from './modules/module02.json';
import m3 from './modules/module03.json';
import m4 from './modules/module04.json';
import m5 from './modules/module05.json';
import m6 from './modules/module06.json';
import m7 from './modules/module07.json';
import m8 from './modules/module08.json';
import m9 from './modules/module09.json';
import m10 from './modules/module10.json';
import m11 from './modules/module11.json';
import m12 from './modules/module12.json';
import m13 from './modules/module13.json';
import m14 from './modules/module14.json';
import m15 from './modules/module15.json';
import m16 from './modules/module16.json';
import m17 from './modules/module17.json';
import m18 from './modules/module18.json';

export const ALL_MODULES: ModuleData[] = [
  m1 as ModuleData,
  m2 as ModuleData,
  m3 as ModuleData,
  m4 as ModuleData,
  m5 as ModuleData,
  m6 as ModuleData,
  m7 as ModuleData,
  m8 as ModuleData,
  m9 as ModuleData,
  m10 as ModuleData,
  m11 as ModuleData,
  m12 as ModuleData,
  m13 as ModuleData,
  m14 as ModuleData,
  m15 as ModuleData,
  m16 as ModuleData,
  m17 as ModuleData,
  m18 as ModuleData,
];

export function getModuleById(id: number): ModuleData | undefined {
  return ALL_MODULES.find(m => m.id === id);
}

export function getTotalPracticeCount(): number {
  return ALL_MODULES.reduce((acc, m) => acc + m.practice.length, 0);
}
