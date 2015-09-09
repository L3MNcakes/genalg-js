/**
 * Provides the {@link Chromosome} prototype.
 *
 * @module GenAlg/Chromosome
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @requires lodash
 **/
(function() {
    "use strict";

    var _ = require("lodash");

    /**
     * Creates a new Chromosome
     *
     * @constructor Chromosome
     * @author L3MNcakes <L3MNcakes@gmail.com>
     * @param {Object}   options           - Options used to initialize the chromosome
     * @param {Mixed}    options.value     - The encoded value of the chromosome.
     * @param {Function} options.mutate    - Function that will be called when a chromosome has been
     *                                       selected for mutation. Should return a new value to be
     *                                       set to the chromosome.
     * @param {Function} options.fitness   - Function that will calculate the fitness of the
     *                                       chromosome. Should return a Number.
     * @param {Function} options.randomize - Function that will randomize the value of the
     *                                       chromosome. Should return a new value to be set to the chromosome
     *
     * @throws {TypeError} options.mutate must be a function
     * @throws {TypeError} options.fitness must be a function
     **/
    var Chromosome = (function(options) {
        options = options || {};

        // Default values
        options.value = options.value || null;
        options.mutate = options.mutate || this.mutate;
        options.fitness = options.fitness || this.fitness;
        options.randomize = options.randomize || this.randomize;

        // Option validation
        if (!_.isFunction(options.mutate)) {
            throw new TypeError("Chromosome.constructor : options.mutate must be a function");
        }
        if (!_.isFunction(options.fitness)) {
            throw new TypeError("Chromosome.constructor : options.fitness must be a function");
        }
        if (!_.isFunction(options.randomize)) {
            throw new TypeError("Chromosome.constructor : options.randomize must be a function");
        }

        // Assignment
        this.value = options.value;
        this.mutate = options.mutate;
        this.fitness = options.fitness;
        this.randomize = options.randomize;
    });

    /**
     * Called to randomly mutate the Chromosome. Must be implemented by a sub-class or passed via
     * the constructor when creating a new Chromosome.
     *
     * @public
     * @abstract
     * @method
     * @returns {Mixed} Returns a new value to be set on the Chromosome
     * @throws {Error} mutate has not been implemented
     * @memberof Chromosome
     **/
    Chromosome.prototype.mutate = (function() {
        throw new Error("Chromosome.mutate : mutate has not been implemented");
    });

    /**
     * Called to evaluate the fitness of the Chromosome. Must be implemented by sub-prototype or
     * passed via the constructor when creating a new Chromosome.
     *
     * @public
     * @abstract
     * @method
     * @returns {Number} Returns a number representing the fitness of the Chromosome
     * @throws {Error} fitness has not been implemented
     * @memberof Chromosome
     **/
    Chromosome.prototype.fitness = (function() {
        throw new Error("Chromosome.fitness : fitness has not been implemented");
    });

    /**
     * Called to randomize the Chromosome's value. Must be implemented by sub-prototype or
     * passed via the constructor when creating a new Chromosome.
     *
     * @public
     * @method
     * @returns {Mixed} Returns a randomized value for the Chromosome
     * @throws {Error} randomize has not been implemented
     * @memberof Chromosome
     **/
    Chromosome.prototype.randomize = (function() {
        throw new Error("Chromosome.randomize : randomize has not been implemented");
    });

    /**
     * Allows Chromosome prototype to be easily extended. Essentially a shortcut for _.extend
     *
     * @public
     * @static
     * @method
     * @param {Object} obj - An object of properties which will be extended to the prototype
     * @returns {Function} A constructor for the new extended prototype
     * @memberof Chromosome
     *
     * @example var MySubChromosome = Chromosome.extend({
     *      mutate: function() {
     *          // Mutator
     *      },
     *      fitness: function() {
     *          // Fitness
     *      }
     * });
     **/
    Chromosome.extend = (function(obj) {
        var parent = this,
            child = function() { return parent.apply(this, arguments); };

        _.extend(child, parent);

        child.prototype = Object.create(parent);
        child.prototype.constructor = this;

        if(obj) _.extend(child.prototype, obj);

        return child;
    });

    module.exports = Chromosome;
})();
