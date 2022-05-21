const net = require('net');

/**
 * Index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} host The first number in an addition.
 * @param {any} port The first number in an addition.
 * @param {any} timeout The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * indexOf([1,2], 1)
 * // => 0
 */
function checkConnection (host, port, timeout) {

    let socket = null;

    return new Promise(function (resolve, reject) {

        // Default of 10 seconds
        timeout = timeout || 10000;

        const timer = setTimeout(function () {

            reject(new Error("timeout"));

            socket.end();

        }, timeout);

        socket = net.createConnection(port, host, function () {

            clearTimeout(timer);

            socket.end();
            resolve();

        });

        socket.on('error', function (err) {

            clearTimeout(timer);
            reject(err);

        });

    });

}

exports.checkConnection = checkConnection;
