/**
 * Provides the {@link Environment} prototype
 *
 * @module GenAlg/Environment
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @requires lodash
 **/
(function() {
    "use strict";

    var _ = require("lodash"),
        Chromosome = require("./Chromosome");

    /**
     * Creates a new Environment
     *
     * @constructor Environment
     * @param {Object}      options - Options used to initialize the environment
     * @param {Prototype}   options.cType - Your extended {@link Chromosome} implementation. If not given, the default
     *                                     {@link Chromosome} prototype will be used.
     * @param {Object}      options.cOptions - Options that will be passed to {@link Chromosome} constructor.
     * @param {Number}      options.popSize - Initial size of the population
     **/
    var Environment = (function(options) {
        options = options || {};
        options.cType = _.isFunction(options.cType) ? options.cType : Chromosome;

        if (!_.isNumber(options.popSize)) {
            throw new TypeError("Environment.constructor : options.popSize must be a Number");
        }

        this.options = options;
        this.initPop();
    });

    /**
     * Initializes a new chromosome population of size options.popSize
     **/
    Environment.prototype.initPop = (function() {
        this.population = [];

        for (var i=0; i < this.options.popSize; i++) {
            var cType = this.options.cType,
                cOpts = this.options.cOptions,
                c = new cType(cOpts);


            this.population.push(c);
        }

        return;
    });

    module.exports = Environment;
})();
