/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M26,5.74A1.74,1.74,0,0,0,24.26,4H3.74A1.74,1.74,0,0,0,2,5.74V20.26A1.74,1.74,0,0,0,3.74,22H4V6H26Z"/><path d="M30,9.74A1.74,1.74,0,0,0,28.26,8H7.74A1.74,1.74,0,0,0,6,9.74V24.26A1.74,1.74,0,0,0,7.74,26H8V10H30Z"/><path d="M32.26,12H11.74A1.74,1.74,0,0,0,10,13.74V28.26A1.74,1.74,0,0,0,11.74,30H32.26A1.74,1.74,0,0,0,34,28.26V13.74A1.74,1.74,0,0,0,32.26,12ZM32,28H12V14H32Z"/><path d="M19.94,23.68a2.64,2.64,0,1,0-2.7-2.63A2.67,2.67,0,0,0,19.94,23.68Zm0-3.87a1.24,1.24,0,1,1-1.29,1.24A1.27,1.27,0,0,1,19.94,19.81Z"/><path d="M19.94,16.22a4.93,4.93,0,0,1,4.95,4.35H23.71V22h4.41a.7.7,0,0,0,0-1.4H26.31a6.33,6.33,0,0,0-6.37-5.75,6.58,6.58,0,0,0-1.48.17l.35,1.37A4.73,4.73,0,0,1,19.94,16.22Z"/><path d="M19.94,27.27a6.42,6.42,0,0,0,5.67-3.35H23.93a5,5,0,0,1-4,1.95,4.91,4.91,0,0,1-5-4.82,5.16,5.16,0,0,1,.08-.79L13.63,20a7,7,0,0,0-.09,1A6.32,6.32,0,0,0,19.94,27.27Z"/>',
  solid:
    '<path d="M26,5.74A1.74,1.74,0,0,0,24.26,4H3.74A1.74,1.74,0,0,0,2,5.74V20.26A1.74,1.74,0,0,0,3.74,22H4V6H26Z"/><path d="M30,9.74A1.74,1.74,0,0,0,28.26,8H7.74A1.74,1.74,0,0,0,6,9.74V24.26A1.74,1.74,0,0,0,7.74,26H8V10H30Z"/><path d="M19.62,22.6A1.55,1.55,0,1,0,18,21.05,1.6,1.6,0,0,0,19.62,22.6Z"/><path d="M32.26,12H11.74A1.74,1.74,0,0,0,10,13.74V28.26A1.74,1.74,0,0,0,11.74,30H32.26A1.74,1.74,0,0,0,34,28.26V13.74A1.74,1.74,0,0,0,32.26,12ZM19.62,17.74a3.31,3.31,0,1,1-3.38,3.31A3.35,3.35,0,0,1,19.62,17.74Zm0,11.13a7.94,7.94,0,0,1-8-7.82,7.83,7.83,0,0,1,.11-1.29l1.75.3a5.36,5.36,0,0,0-.11,1,6.18,6.18,0,0,0,6.28,6.06,6.35,6.35,0,0,0,5-2.46h2.1A8.06,8.06,0,0,1,19.62,28.87ZM29.89,22.2H24.36V20.44h1.48A6.19,6.19,0,0,0,19.62,15a6.48,6.48,0,0,0-1.41.16l-.45-1.7a8.16,8.16,0,0,1,1.86-.22,8,8,0,0,1,8,7.21h2.26a.88.88,0,0,1,0,1.76Z"/>',
};

export const hardDriveDisksIconName = 'hard-drive-disks';
export const hardDriveDisksIcon: IconShapeTuple = [hardDriveDisksIconName, renderIcon(icon)];
