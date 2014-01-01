var platform = require('../platform'),
    parse = require('co-body');

exports.show = function *(next){
    var user = yield platform.users.getUser(this.params.user);
    if(user){
        this.body = user;
    } else {
        this.throw(404, 'No user found');
    }
};

exports.create = function *(next){
    var body = yield parse.json(this);
    var user = yield platform.users.createUser(body.name);
    this.body = user;
};