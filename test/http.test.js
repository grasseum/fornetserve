const {appServer, http} = require("../index");
const request = require('supertest');

const apps = appServer();

const default_host = '0.0.0.0';
const default_port = 4040;

let htp=null;

beforeAll(async () => {

    apps.get("/", (req, res) => {

        res.status(200);

        res.content("Yahooo");

    });

    apps.get("/test", (req, res) => {

        res.setHeader('Content-Type', 'application/json');
        res.status(202);
        res.content("Yahooo test 2");

    });

    htp = await http(apps, {host: default_host,
        port: default_port});

});

afterAll((done) => {

    done();

});

test('count method', async () => {

    await request(htp)
        .get('/')
        .set('Accept', 'application/test')

        .expect(200);

});

test('count method', async () => {


    await request(htp)
        .get('/not-found')
        .set('Accept', 'application/test')

        .expect(404);

});


