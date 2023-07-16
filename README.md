# FornetServe
[![NPM version][npm-image]][npm-url] 

[Site](https://fornetserve.codehyouka.xyz/) |
[Docs](https://fornetserve.codehyouka.xyz/docs) |

## Introduction

Minimalist framework in NodeJS you should try
## Download

Using npm:
```shell
$ npm i fornetserve
```


## Example

In a NodeJS
```html
const {appServer, http} = require("fornetserve");
const apps = appServer();

const default_host = '0.0.0.0';
const default_port = 4040;
apps.get("/", (req, res) => {

        res.status(twohundred);
        res.content("Hello world");

    });
const connect =http(apps, {"host": default_host,
        "port": default_port});

    connect.then(() => {

        console.log("running");

    }).catch((err) => {

        console.log(err);

    });
```

[npm-url]: https://www.npmjs.com/package/fornetserve
[npm-image]: https://img.shields.io/badge/fornetserve-0.0.1-brightgreen

