/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  ContentChildren,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  PLATFORM_ID,
  QueryList,
  Input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LayoutService } from './providers/layout.service';
import { MarkControlService } from './providers/mark-control.service';
import { ClrLabel } from './label';

@Directive({
  selector: '[clrForm]',
  providers: [LayoutService, MarkControlService],
  host: {
    '[class.clr-form]': 'true',
    '[class.clr-form-horizontal]': 'layoutService.isHorizontal()',
    '[class.clr-form-compact]': 'layoutService.isCompact()',
  },
})
export class ClrForm {
  private invalidControls = [];

  @Input('clrLabelSize')
  set labelSize(size: number) {
    this.layoutService.labelSize = size;
  }

  constructor(
    public layoutService: LayoutService,
    private markControlService: MarkControlService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef
  ) {}

  /** @deprecated since 2.0 */
  markAsDirty(updateAriaLiveText?: boolean) {
    this.markAsTouched();
  }

  // Trying to avoid adding an input and keep this backwards compatible at the same time
  markAsTouched() {
    this.markControlService.markAsTouched();

    // I don't think consumers will call this with undefined, null or other values but
    // want to make sure this only guards against when this is called with false
    if (isPlatformBrowser(this.platformId)) {
      this.invalidControls = Array.from(this.el.nativeElement.querySelectorAll('.ng-invalid'));
      if (this.invalidControls.length > 0) {
        this.invalidControls[0].focus();
      }
    }
  }

  @ContentChildren(ClrLabel, { descendants: true })
  labels: QueryList<ClrLabel>;

  @HostListener('submit')
  onFormSubmit() {
    this.markAsTouched();
  }
}
