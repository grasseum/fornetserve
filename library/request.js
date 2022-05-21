

class RequestConfig {

    constructor (req) {

        this.request = req;

    }

}

module.exports = function (config) {

    return new RequestConfig(config);

};
