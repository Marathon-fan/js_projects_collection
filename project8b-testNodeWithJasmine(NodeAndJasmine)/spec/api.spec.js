var Request = require("request");

describe("server", () => {

    var server ;
    beforeAll(() => {
        server = require("../api");
    });


    afterAll(() => {
        server.close();
    });

    describe("GET /", () => {
        var data = {};
        beforeAll((done) => {  // store the data for other test
            Request.get("http://localhost:3000", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("body", () => {
            expect(data.body).toBe("The Polyglot Developer");
        });
    });

    describe("GET /test", () => {
        var data = {};
        beforeAll((done) => {  // store the data for other test
            Request.get("http://localhost:3000/test", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("status 500", () => {
            expect(data.status).toBe(500);
        });
        it("body", () => {
            expect(data.body.message).toBe("This is an error message");
        });
    });

});