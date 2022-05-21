
const request = require("../../library/request");
const response = require("../../library/response");
const glob =require("grasseum_glob");
const fs = require('fs');
const requestVerifiy = require("./request_verify");
const responsetVerifiy = require("./response_verify");
const {has, indexOf} = require("structkit");

const localStatic = {};
let localRoutes = [];
let localHeader = [];
let localMiddleWare = [];

/**
 * Index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} req The first number in an addition.
 * @param {any} res The first number in an addition.
 * @param {any} localRequest The first number in an addition.
 * @param {any} localResponse The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * indexOf([1,2], 1)
 * // => 0
 */
function staticAsset (req, res, localRequest, localResponse) {

    fs.readFile(localStatic[req.url].path, 'utf8', (err, data) => {

        if (err) {

            localResponse.content(err);

        }
        localResponse.content(data);
        localResponse.status(200);

        const localResponseVerifiy =responsetVerifiy(localResponse, res);

        localResponseVerifiy.initialize();

        const localRequestVerifiy =requestVerifiy(localResponse, res);

        localRequestVerifiy.initialize();

    });


}

/**
 * Index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} req The first number in an addition.
 * @param {any} res The first number in an addition.
 * @param {any} localRequest The first number in an addition.
 * @param {any} localResponse The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * indexOf([1,2], 1)
 * // => 0
 */
function pageRoute (req, res, localRequest, localResponse) {

    let validPath = false;

    localRoutes.forEach(async (value) => {

        if (value.get('path') === req.url && value.get('method') === req.method.toLocaleLowerCase()) {

            validPath = true;
            await value.get('func')(localRequest, localResponse);


        }

    });

    if (validPath ===false) {

        localResponse.status(404);
        localResponse.content("Error Page");

    }

    const localResponseVerifiy =responsetVerifiy(localResponse, res);

    localResponseVerifiy.initialize();

    const localRequestVerifiy =requestVerifiy(localResponse, res);

    localRequestVerifiy.initialize();

}


class Routes {


    setStatic (stat) {

        const myPromise =new Promise(function (resolve, reject) {

            if (stat.dir.length===0) {

                resolve();

            }

            glob(stat.dir, function (val, fileConfig) {

                const extBaseSplit = val.filename.split(".");
                const extBase = extBaseSplit[extBaseSplit.length - 1];

                if (indexOf(stat.allowedExt, extBase) >=0) {

                    localStatic[stat.route+val.filename] = {
                        "path": val.path
                    };

                }

                if (fileConfig.isLastPath) {

                    resolve();

                }

            });


        });

        return myPromise;

    }

    setRoutes (routes) {

        localRoutes = routes;

    }

    setHeader (header) {

        localHeader = header;

    }

    setMiddleWare (middleware) {

        localMiddleWare = middleware;

    }

    routeAppServer (req, res) {


        const localRequest = request(req);
        const localResponse = response(res, localHeader);


        if (has(localStatic, req.url) && req.method.toLocaleLowerCase() === "get") {

            staticAsset(req, res, localRequest, localResponse);

        } else {

            pageRoute(req, res, localRequest, localResponse);

        }

    }

}

module.exports =Routes;
