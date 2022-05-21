const httpLibrary = require('http');
const httpsLibrary = require('https');
const libraryAppServer = require("./library/appserver");
const HttpRoutes = require("./module/http/routes");
const {checkConnection} = require("./module/core/connection");
const {serverConnectiionDetails} = require("./module/core/values");

exports.http = function (app, config) {

    const apphttpRoutes = new HttpRoutes();
    const serverConf = serverConnectiionDetails(config);
    const server = httpLibrary.createServer(apphttpRoutes.routeAppServer);
    // Let apss = null;

    const myPromise =new Promise(function (resolve, reject) {


        apphttpRoutes.setStatic(serverConf.static).then(() => {

            apphttpRoutes.setRoutes(app.routes);
            checkConnection(serverConf.host, serverConf.port).then(function () {

                const errorMessage = 'Failed to connect at '+serverConf.host+":"+serverConf.port;

                console.log(errorMessage);

                reject(new Error(errorMessage));

            }, async function () {

                const apss = await server.listen(serverConf.port, serverConf.host);

                console.log('Connecting at '+serverConf.host+":"+serverConf.port);
                resolve(apss);

            });

        });

    });

    return myPromise;

};
exports.https = function (app, config) {

    const apphttpRoutes = new HttpRoutes();
    const serverConf = serverConnectiionDetails(config);
    const server = httpsLibrary.createServer(apphttpRoutes.routeAppServer);


    const myPromise =new Promise(function (resolve, reject) {


        apphttpRoutes.setStatic(serverConf.static).then(() => {

            apphttpRoutes.setRoutes(app.routes);
            checkConnection(serverConf.host, serverConf.port).then(function () {

                const errorMessage = 'Failed to connect at '+serverConf.host+":"+serverConf.port;

                console.log(errorMessage);

                reject(new Error(errorMessage));

            }, async function () {

                const apss = await server.listen(serverConf.port, serverConf.host);

                console.log('Connecting at '+serverConf.host+":"+serverConf.port);
                resolve(apss);

            });

        });

    });

    return myPromise;

};

exports.appServer = function (config) {

    return libraryAppServer(config);

};
