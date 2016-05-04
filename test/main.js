var expect = require('chai').expect;
var BitwsMid = require('../dist/bitws-js-middleware.js');
var BitwsMidMin = require('../dist/bitws-js-middleware.min.js');

describe('Complete Test', function() {

    it("Should create the middleware", function(done) {
        this.timeout(10000);
        var mid = new BitwsMid("https://api.cryptocapital.co/v3/static/swagger.json", null, function(success){
            if (success)
                console.log("Middleware created succesfully");
            else
                console.log("Error on middleware creation");
            done();
        });
    });

});
