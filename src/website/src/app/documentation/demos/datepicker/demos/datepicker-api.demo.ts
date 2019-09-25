/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<form clrForm clrLayout="vertical">
  <clr-date-container>
    <input type="date" clrDate name="demo" [(ngModel)]="demo">
  </clr-date-container>
</form>
`;

@Component({
  selector: 'clr-datepicker-api-demo',
  templateUrl: './datepicker-api.demo.html',
  styleUrls: ['../datepicker.demo.scss'],
})
export class DatepickerAPIDemo {
  htmlExample = HTML_EXAMPLE;
  demo;
  minDate: Date = new Date('1997-12-21');
  maxDate: Date = new Date('2021-02-16');
}
