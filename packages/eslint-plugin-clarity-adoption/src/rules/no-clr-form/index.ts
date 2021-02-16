import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { HTMLElement } from '../../types/index';
import { lintDecoratorTemplate } from '../decorator-template-helper';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
export type MessageIds = 'clrFormFailure';

const disallowedTag = 'form';
const disallowedAttribute = 'clrForm';
const disallowedClass = 'clr-form';
const disallowedFormElementSelector = `${disallowedTag}[${disallowedAttribute}],${disallowedTag}.${disallowedClass}`;

export default createESLintRule({
  name: 'no-clr-form',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-form',
      category: 'Best Practices',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      clrFormFailure: 'Using clr-form is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      [`HTMLElement[tagName="${disallowedTag}"]`](node: HTMLElement): void {
        const classNode = node.attributes?.find(attribute => attribute.attributeName.value === 'class');
        const classes = classNode?.attributeValue?.value?.split(' ') || [];

        const disallowedAttributeNode = node.attributes?.find(
          attribute => attribute.attributeName.value === disallowedAttribute
        );
        if (classes.includes(disallowedClass) || disallowedAttributeNode) {
          context.report({
            node: node as any,
            messageId: 'clrFormFailure',
          });
        }
      },
      'ClassDeclaration > Decorator'(node: TSESTree.Decorator): void {
        lintDecoratorTemplate(context, node, disallowedFormElementSelector, 'clrFormFailure');
      },
    };
  },
});
