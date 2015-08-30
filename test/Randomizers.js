var assert = require("chai").assert,
    Randomizers = require("../src/Randomizers");

/**
 * Mocha test cases for Randomizers.js
 **/
describe("Randomizers", function() {
    /**
     * STRING_ABC tests
     **/
    describe("STRING_ABC", function() {
        beforeEach(function() {
            this.rOptions = {
                strLength: 10
            };
        });

        it("throws a TypeError if length is not a number", function() {
            var fn = function() { Randomizers.STRING_ABC("NotANumber") };

            assert.throws(fn, TypeError, /strLength must be a Number/);
        });

        it("outputs a random string of given length", function() {
            var output = Randomizers.STRING_ABC(this.rOptions);

            assert.isString(output);
            assert.strictEqual(output.length, this.rOptions.strLength);
        });
    });
});
