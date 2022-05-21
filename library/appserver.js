const {routeMapping, headerMapping} = require("../module/model/route_mapping");

class AppServer {

    constructor (config) {

        this.routes = [];
        this.middleware = [];
        this.header = [];
        this.config = config;

    }

    delete (path, func, config) {

        this.routes.push(routeMapping(path, "delete", func, config));

    }

    post (path, func, config) {

        this.routes.push(routeMapping(path, "post", func, config));

    }

    get (path, func, config) {

        this.routes.push(routeMapping(path, "get", func, config));

    }

    patch (path, func, config) {

        this.routes.push(routeMapping(path, "patch", func, config));

    }

    put (path, func, config) {

        this.routes.push(routeMapping(path, "put", func, config));

    }

    middleware (path, func, config) {

        this.middleware.push(routeMapping(path, "middleware", func, config));

    }

    setHeader (name, value) {

        this.header.push(headerMapping(name, value));

    }

}

module.exports = function (config) {

    return new AppServer(config);

};
