(function() {
    "use strict";

    var _ = require("lodash"),

        Chromosome = require("./Chromosome"),

        GenAlg = {
            /**
             * Keeps track of the population
             **/
            population: [],

            /**
             * Sets default config and stores passed configuration options
             **/
            configValues: {
                numPopulation: 0
            },

            _setConfigValues: function(values) {
                if (_.isObject(values)) {
                    this.configValues = _.merge(this.configValues, values);
                } else {
                    throw new TypeError("GenAlg._setConfigValues : 'values' must be an Object");
                }
            },

            /**
             * Gets/Sets configuration options
             **/
            config: function() {
                if (_.isObject(arguments[0])) {
                    for (key in arguments[0]) {
                        if (!_.isDefined(this.configValues[key])) {
                            this.configValues[key] = arguments[0][key];
                        }
                    }
                }
            }
        };

    module.exports = GenAlg;

})();
