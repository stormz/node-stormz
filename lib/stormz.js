var rest = require('restler');

var Stormz = rest.service(function(access_token) {
    this.defaults.headers = {
        authorization: 'Bearer '+ access_token
    };
}, {
  baseURL: 'https://api.stormz.me'
});

module.exports = Stormz;
