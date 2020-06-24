/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { render, html } from 'lit-html';
import { CdsControlAction } from '@clr/core/forms';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable } from '@clr/core/test/utils';
import { LogService } from '@clr/core/internal';

describe('cds-control-action', () => {
  let controlAction: CdsControlAction;
  let element: HTMLElement;

  beforeEach(async () => {
    element = createTestElement();
    render(html` <cds-control-action>test</cds-control-action> `, element);

    await waitForComponent('cds-control-action');

    controlAction = element.querySelector<CdsControlAction>('cds-control-action');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should set the proper host attribute slot from action type', async () => {
    expect(controlAction.getAttribute('slot')).toBe(null);

    controlAction.action = 'suffix';
    await componentIsStable(controlAction);
    expect(controlAction.getAttribute('slot')).toBe('suffix');
  });

  it('should warn when a aria-label is missing and interactive', async () => {
    spyOn(LogService, 'warn');

    controlAction.readonly = true;
    await componentIsStable(controlAction);
    controlAction.readonly = false;
    await componentIsStable(controlAction);
    expect(LogService.warn).toHaveBeenCalled();
  });
});
