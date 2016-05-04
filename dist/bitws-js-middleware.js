
// Dependencies

var Swagger = require('swagger-client');
var bitwsjs = require('bitws-js');

module.exports = function(specUrl, key, callback) {

    // Set up variables

    var url = specUrl;

    if (!key)
        key = new bitwsjs.bitcore.PrivateKey();

    // Bitws signer

    var bitwsSigner = function(key) {
        this.key = key;
    };

    bitwsSigner.prototype.apply = function(obj, authorizations) {
        var signature = bitwsjs.signSerialize(url, obj.data, this.key, null);
        obj.headers["signature"] = signature;
        return true;
    };

    // Starting swagger client

    module.client = new Swagger({
        url: url,
        port: 3666,
        success:function() {
            console.log('bitws-js-middleware initiated');
            if (callback)
                callback(true);
        },
        error: function(error) {
            console.log('bitws-js-middleware error on init: ' + error.statusText);
            if (callback)
                callback(true);
        },
        authorizations : {
            bitws: new bitwsSigner(key)
        }
    });

    return module;
}
