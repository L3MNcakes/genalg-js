var assert = require("chai").assert,
    GenAlg = require("../src/GenAlg");

/**
 * Mocha test cases for GenAlg.js
 **/
describe("GenAlg", function() {
    it("exposes Environment", function() {
        assert.isDefined(GenAlg.Environment);
    });

    it("exposes Chromosome", function() {
        assert.isDefined(GenAlg.Chromosome);
    });

    it("exposes Mutators", function() {
        assert.isDefined(GenAlg.Mutators);
    });

    it("exposes Randomizers", function() {
        assert.isDefined(GenAlg.Randomizers);
    });
});
