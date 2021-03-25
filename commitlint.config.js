const scopes = [
  'a11y',
  'accordion',
  'alert',
  'badge',
  'breadcrumb',
  'build',
  'button',
  'card',
  'checkbox',
  'color',
  'combobox',
  'datagrid',
  'datalist',
  'date-picker',
  'dropdown',
  'form',
  'form-group',
  'grid',
  'header',
  'i18n',
  'input',
  'label',
  'list',
  'login',
  'modal',
  'navigation',
  'password',
  'progress-bar',
  'radio',
  'schematics',
  'select',
  'sidenav',
  'signpost',
  'spinner',
  'stack-view',
  'stepper',
  'table',
  'tabs',
  'textarea',
  'timeline',
  'toggle',
  'tooltip',
  'tree-view',
  'vertical-nav',
  'wizard',
  'icons',
  'range',
  'website',
  'panel',
];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', scopes],
    'header-max-length': [2, 'always', 100],
  },
};
