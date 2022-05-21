
const {has, clone} = require('structkit');
const {headerMapping} = require("../module/model/route_mapping");

let localStatusCode =200;
let localContent ="";

class ResponseConfig {

    constructor (req, header) {

        this.request = req;
        this.localHeader = clone(header);

    }

    status (data) {

        if (has(data)) {

            localStatusCode = data;

        }

        return localStatusCode;

    }

    content (data) {

        if (has(data)) {

            localContent = data;

        }

        return localContent;

    }

    setHeader (name, value) {

        this.localHeader.push(headerMapping(name, value));

    }

    getAllHeader () {

        return this.localHeader;

    }

}

module.exports = function (config, header) {

    return new ResponseConfig(config, header);

};
