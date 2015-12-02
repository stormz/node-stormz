# node-stormz

Simple node wrapper around [Stormz's API](http://developer.stormz.me).

## Install

    npm install stormz

## Usage

```javascript
var Stormz = require('stormz');

var stormz = new Stormz(token);
stormz.get('/v1/user/me').on('complete', function(data, response) {
    console.log('complete', response.statusCode, data);
});
```

## License

(c) 2015 Stormz

This code is free to use under the terms of the MIT license.
