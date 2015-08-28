(function() {
    "use strict";

    var _ = require("lodash"),

        Chromosome = require("./Chromosome"),

        GenAlg = {
            /**
             * Keeps track of the chromosome population
             **/
            population: [],

            /**
             * Sets default config and stores passed configuration options
             **/
            configValues: {
                numPopulation: 0
            },

            /**
             * Gets/Sets configuration options
             **/
            config: function() {
                var num_args = arguments.length;

                if (num_args > 0) {

                }
            }
        };

    module.exports = GenAlg;

})();
