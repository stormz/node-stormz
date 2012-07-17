var rest = require('restler');

var Stormz = rest.service(function(access_token) {
    this.defaults.query = {
        access_token: access_token
    };
}, {
  baseURL: 'https://api.stormz.me'
});

module.exports = Stormz;
