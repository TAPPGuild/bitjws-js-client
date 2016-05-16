var expect = require('chai').expect;
var BitwsMid = require('../dist/bitws-js-middleware.js');
var BitwsMidMin = require('../dist/bitws-js-middleware.min.js');

describe('PetStore Test', function() {

    var mid = null;
    it("Should create the middleware", function(done) {
        this.timeout(10000);
        mid = new BitwsMid("http://petstore.swagger.io/v2/swagger.json", null, function(success){
            if (success)
                console.log("Middleware created succesfully using url http://petstore.swagger.io/v2/swagger.json");
            else
                console.log("Error on middleware creation");
            expect(mid).to.have.property('url');
            expect(mid).to.have.property('key');
            done();
        });
    });

    it("Should make an request asking for pet #7", function(done) {
        this.timeout(10000);
        mid.client.pet.getPetById({petId:7}, function(pet){
            console.log('Pet : ', pet.obj);
            expect(pet.status).to.be.equal(200);
            done();
        },
        function(error) {
            console.log('failed with the following: ' + error.statusText);
            throw error;
            done();
        });
    });

});

describe('CryptoCapital Test', function() {

    var mid = null;
    it("Should create the middleware", function(done) {
        this.timeout(10000);
        mid = new BitwsMid("https://api.cryptocapital.co/v3/static/swagger.json", null, function(success){
            if (success)
                console.log("Middleware created succesfully using url https://api.cryptocapital.co/v3/static/swagger.json");
            else
                console.log("Error on middleware creation");
            expect(mid).to.have.property('url');
            expect(mid).to.have.property('key');
            done();
        });
    });

    it("Should make an request asking for account #9000000000", function(done) {
        this.timeout(10000);
        mid.client.default.getAccountById({account:"9000000000"}, function(account){
            console.log('account : ', account.obj);
            expect(account.status).to.be.equal(200);
            done();
        },
        function(error) {
            console.log('failed with the following: ' + error.statusText);
            throw error;
            done();
        });
    });

});
