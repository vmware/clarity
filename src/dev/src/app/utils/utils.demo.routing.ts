/*
 *  Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IfOpenDemo } from './if-open/if-open.demo';
import { SmartOpenDemo } from './smart-open/smart-open.demo';
import { UtilsDemo } from './utils.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: UtilsDemo,
    children: [
      { path: '', redirectTo: 'if-open', pathMatch: 'full' },
      { path: 'if-open', component: IfOpenDemo },
      { path: 'smart-open', component: SmartOpenDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
