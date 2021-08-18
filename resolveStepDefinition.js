
const {
  given,
  when,
  then,
  and,
  but,
  defineParameterType
} = require("./lib/resolveStepDefinition");

console.warn(
  "DEPRECATION WARNING! Please change the imports from /resolveStepDefinition to /steps"
);

module.exports = {
  given,
  when,
  then,
  Given: given,
  When: when,
  Then: then,
  And: and,
  But: but,
  defineParameterType
};
