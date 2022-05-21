

class RequestVerify {

    constructor (req) {

        this.request = req;

    }

    initialize () {
        //
    }

}

module.exports = function (req) {

    return new RequestVerify(req);

};
