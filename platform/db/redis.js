var redis = require('redis');
var options = { // TODO -- fill with config
    host: 'localhost',
    port: 6379
};

module.exports = require('co-redis')(redis.createClient(options));