
/**
 * Route Mapping details
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} path The first number in an addition.
 * @param {string} method The first number in an addition.
 * @param {method} func The first number in an addition.
 * @param {object} config The first number in an addition.
 * @returns {number|object|string} Returns the total.
 * @example
 *
 * // => 0
 */
function routeMapping (path, method, func, config) {

    const routeMap = new Map();

    routeMap.set("path", path);
    routeMap.set("config", config);
    routeMap.set("func", func);
    routeMap.set("method", method);

    return routeMap;

}

/**
 * Header Mapping details
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} name The first number in an addition.
 * @param {string} value The first number in an addition.
 * @returns {number|object|string} Returns the total.
 * @example
 *
 * // => 0
 */
function headerMapping (name, value) {

    const routeMap = new Map();

    routeMap.set("name", name);
    routeMap.set("value", value);

    return routeMap;

}
exports.headerMapping = headerMapping;
exports.routeMapping = routeMapping;
