const Schema = require("truffle-conflux-contract-schema");
const Contract = require("./lib/contract");

const contract = (json = {}) => {
  const normalizedArtifactObject = Schema.normalize(json);

  // Note we don't use `new` here at all. This will cause the class to
  // "mutate" instead of instantiate an instance.
  return Contract.clone(normalizedArtifactObject);
};

module.exports = contract;


