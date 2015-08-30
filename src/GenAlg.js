/**
 * A wrapper for all GenAlg modules
 *
 * @module GenAlg
 * @author L3MNcakes <L3MNcakes@gmail.com>
 **/
(function() {
    "use strict";

    var GenAlg = {
        Environment: require("./Environment"),
        Chromosome: require("./Chromosome"),
        Mutators: require("./Mutators"),
        Randomizers: require("./Randomizers")
    };

    module.exports = GenAlg;
})();
