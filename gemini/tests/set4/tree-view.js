/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('tree-view', child => {
  // I will add gemini test for each demo we progressively commit.
  gemini.suite('Eager declarative tree', child => {
    child
      .setUrl('/tree-view/eager-declarative')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });

  gemini.suite('Tree with icons', child => {
    child
      .setUrl('/tree-view/nodes-with-icons')
      .before((actions, find) => {
        actions.waitForElementToShow('.clr-example', WAIT_TIME);
        actions.wait(WAIT_TIME);
      })
      .setCaptureElements('.clr-example')
      .capture('default');
  });
});
