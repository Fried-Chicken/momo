const { FUNCTION_TYPES } = require('../../constants');
const capitaliseWord = require('../../helpers/capitaliseWord');

const selectorTemplate = (functionName) => {
  const functionNameWithoutType = functionName
    .replace(FUNCTION_TYPES.SELECTOR, '');
  const getFunctionName =  `get${capitaliseWord(functionNameWithoutType)}`;
  return (
    `import { createSelector } from 'reselect';
import { get } from 'lodash';

/**
 * Description of what data this get function is getting
 *
 * @param {{}} state - the redux state
 * @returns {*} the selected param
 */
export const ${getFunctionName} = state => get(
  state,
  'dummyParam',
  '',
);

/**
 * A description explaining what data we are getting and where we are using it.
 */
export const ${functionName} = createSelector(
  ${getFunctionName},
  ${functionNameWithoutType} => ${functionNameWithoutType},
);
`
  );
};

module.exports = selectorTemplate;
