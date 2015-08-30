(function() {
    "use strict";

    var _ = require("lodash"),
        Random = require("random-js")();

    /**
     * Defines built-in ranomizer functions that can be used with {@link Chromosome}
     *
     * @module GenAlg/Randomizers
     * @author L3MNcakes <L3MNcakes@gmail.com>
     * @requires lodash
     * @requires random-js
     **/
    var Randomizers = {

        /**
         * @const
         * @type {String}
         * @memberof module:GenAlg/Randomizers
         **/
        CHARS: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",

        /**
         * A function which produces a random string of given length containing
         * characters [a-z][A-z]
         *
         * @const
         * @type {Function}
         * @param {Object} rOptions - An Object containing options for the randomizer
         * @param {Number} rOptions.strLength - The length of the string to output
         * @returns {String}
         * @memberof module:GenAlg/Randomizers
         **/
        STRING_ABC: function(rOptions) {
            var output = "";

            // Option validation
            if (!_.isNumber(rOptions.strLength)) {
                throw new TypeError("Randomizers.STRING_ABC : rOptions.strLength must be a Number");
            }

            // Write a random character to output until the output is the correct length
            for (var i=0; i<rOptions.strLength; i++) {
                output = output + this.CHARS.charAt(Random.integer(0,this.CHARS.length-1));
            }

            return output;
        }
    };

    module.exports = Randomizers;
})();
