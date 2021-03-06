var assert = require("chai").assert,
    Chromosome = require("../src/Chromosome");

/**
 * Mocha test cases for Chromosome.js
 **/
describe("Chromosome", function() {
    /**
     * Set up
     **/
    beforeEach(function() {
        this.testOptions = {
            value: "Test",
            mutate: function() { return "Mutate"; },
            fitness: function() { return 1; },
            randomize: function() { return "Random"; }
        };
    });

    /**
     * Constructor Tests
     **/
    describe("construction", function() {
        it("accepts options object and assigns correct values", function() {
            var c = new Chromosome(this.testOptions);

            assert.strictEqual(c.value, this.testOptions.value);
            assert.strictEqual(c.mutate, this.testOptions.mutate);
            assert.strictEqual(c.fitness, this.testOptions.fitness);
            assert.strictEqual(c.randomize, this.testOptions.randomize);
        });

        it("trows TypeError when options.mutate is defined but not a function", function() {
            var testOptions = this.testOptions,
                fn = (function( ) {
                    testOptions.mutate = "NotAFunction";
                    new Chromosome(testOptions)
                });

            assert.throws(fn, TypeError, /options.mutate must be a function/);
        });

        it("throws TypeError when options.fitness is defined but not a function", function() {
            var testOptions = this.testOptions,
                fn = (function( ) {
                    testOptions.fitness = "NotAFunction";
                    new Chromosome(testOptions);
                });

            assert.throws(fn, TypeError, /options.fitness must be a function/);
        });

        it("throws TypeError when options.randomize is defined but not a function", function() {
            var testOptions = this.testOptions,
                fn = (function( ) {
                    testOptions.randomize = "NotAFunction";
                    new Chromosome(testOptions);
                });

            assert.throws(fn, TypeError, /options.randomize must be a function/);
        });

        it("is extendable", function() {
            var SubChromosome = Chromosome.extend(this.testOptions),
                c1 = new Chromosome(this.testOptions),
                c2 = new SubChromosome();

            assert.equal(c1.fitness, c2.fitness);
            assert.equal(c1.mutate, c2.mutate);
            assert.equal(c1.randomize, c2.randomize);
        });
    });

    /**
     * Mutate Tests
     **/
    describe("mutate", function() {
        it("throws Error that it needs implemented", function() {
            var c = new Chromosome();

            assert.throws(c.mutate, Error, /mutate has not been implemented/);
        });
    });

    /**
     * Fitness Tests
     **/
    describe("fitness", function() {
        it("throws Error that it needs implemented", function() {
            var c = new Chromosome();

            assert.throws(c.fitness, Error, /fitness has not been implemented/);
        });
    });

    /**
     * Randomize Tests
     **/
    describe("randomize", function() {
        it("throws Error that it needs implemented", function() {
            var c = new Chromosome();

            assert.throws(c.randomize, Error, /randomize has not been implemented/);
        });
    });
});
