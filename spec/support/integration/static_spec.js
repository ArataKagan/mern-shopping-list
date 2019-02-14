const request = require("request");
console.log('#1')
const server = require("../../server");
console.log('#2')
const base = "http://localhost:5000/";
console.log('#3')

describe("routes: static", () => {
    describe("GET /", () => {
        it("should return status code 200", (done) => {
            request.get(base, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
    });
});