var assert = require("chai").assert,
    Environment = require("../src/Environment.js"),
    Chromosome = require("../src/Chromosome.js");

/**
 * Mocha test cases for Environment.js
 **/
describe("Environment", function() {
    /**
     * Set Up
     **/
    beforeEach(function() {
        this.TestChromosome = Chromosome.extend({
            randomize: function() { return "Random"; },
            mutate: function() { return "Mutate"; },
            fitness: function() { return 100; }
        });

        this.testOptions = {
            cType: this.TestChromosome.prototype,
            cOptions: {},
            popSize: 10
        };
    });

    describe("construction", function() {
        it("sets correct options to the object", function() {
            var env = new Environment(this.testOptions);

            assert.strictEqual(env.options, this.testOptions);
        });

        it("throws TypeError when options.popSize is not a number", function() {
            var testOptions = this.testOptions,
                fn = (function() {
                    testOptions.popSize = "NotANumber";
                    new Environment(testOptions);
                });

            assert.throws(fn, TypeError, /options.popSize must be a Number/);
        });
    });
});
