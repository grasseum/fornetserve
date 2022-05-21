
class ResponseVerify {

    constructor (res, resDefault) {

        this.responseConfig = res;
        this.responseDefault = resDefault;

    }

    header () {


        this.responseConfig.getAllHeader().forEach((value) => {

            this.responseDefault.setHeader(value.get('name'), value.get('value'));

        });

    }

    output () {

        this.responseDefault.end(this.responseConfig.content());

    }

    sipCode () {

        this.responseDefault.writeHead(this.responseConfig.status());

    }

    initialize () {

        this.header();
        this.sipCode();
        this.output();

    }


}

module.exports = function (config, res) {

    return new ResponseVerify(config, res);

};
