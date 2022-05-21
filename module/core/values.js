const {varExtend} = require("structkit");

/**
 * Index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} config The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * indexOf([1,2], 1)
 * // => 0
 */
function serverConnectiionDetails (config) {

    const details = {

        "host": "0.0.0.0",
        "port": 4040,
        "static": {
            "allowedExt": [
                "js",
                "css"
            ],
            "dir": [],
            "route": "/"
        }

    };

    return varExtend(details, config);

}

exports.serverConnectiionDetails = serverConnectiionDetails;
