/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import {
  ClrTooltip,
  ClrTooltipContent,
  ClrTooltipTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@clr/angular';

@Component({ templateUrl: './tooltips.component.html' })
export class KSTooltips {
  /**
   * @description
   * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
   */
  private aTooltip: Tooltip;
  private aClrTooltip: ClrTooltip;
  private aTooltipContent: TooltipContent;
  private aClrTooltipContent: ClrTooltipContent;
  private aTooltipTrigger: TooltipTrigger;
  private aClrTooltipTrigger: ClrTooltipTrigger;
}
