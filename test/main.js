var expect = require('chai').expect;
var BitwsMid = require('../dist/bitws-js-middleware.js');
var BitwsMidMin = require('../dist/bitws-js-middleware.min.js');

describe('Complete Test', function() {

    var mid = null;
    it("Should create the middleware", function(done) {
        this.timeout(10000);
        mid = new BitwsMid("https://api.cryptocapital.co/v3/static/swagger.json", null, function(success){
            if (success)
                console.log("Middleware created succesfully");
            else
                console.log("Error on middleware creation");
            expect(mid).to.have.property('url');
            expect(mid).to.have.property('key');
            done();
        });
    });

    it("Should make an account request", function(done) {
        this.timeout(10000);

        var account = mid.client.default.getAccountById({account:'900000'});

        console.log(account);

        /*
        mid.client.default.getAccountById({account:'900000'}).on.response(function(data){
            console.log(this);
            done();
        })*/

        done();
    });

});
