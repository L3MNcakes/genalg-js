(function() {
    "use strict";

    var _ = require("lodash");

    /**
     * Creates a new Chromosome
     *
     * @class Chromosome
     * @author L3MNcakes <L3MNcakes@gmail.com>
     * @param {Object}   options Options used to initialize the chromosome
     * @param {Mixed}    options.value The encoded value of the chromosome.
     * @param {Function} options.mutate Function that will be called when a chromosome has
     *                          been selected for mutation. Should return a new value to be
     *                          set to the chromosome.
     * @param {Function} options.fitness Function that will calculate the fitness of the
     *                          chromosome. Should return a Number.
     * @throws {TypeError} options.value is required
     * @throws {TypeError} options.mutate must be a function
     * @throws {TypeError} options.fitness must be a function
     **/
    var Chromosome = (function(options) {
        options = options || {};

        if (_.isUndefined(options.value)) {
            throw new TypeError("Chromosome : options.value is required");
        }

        if (!_.isFunction(options.mutate)) {
            throw new TypeError("Chromosome : options.mutate must be a function");
        }

        if (!_.isFunction(options.fitness)) {
            throw new TypeError("Chromosome : options.fitness must be a function");
        }

        this.value = options.value;
        this.mutate = options.mutate;
        this.fitness = options.fitness;
    });

    module.exports = Chromosome;
})();
