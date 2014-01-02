var platform = require('../platform'),
    parse = require('co-body');

exports.show = function *(){
    var user = yield platform.users.getUser(this.params.userId);
    if(!user){
        return this.error(404, 'No user found');
    }

    this.body = user;
};

exports.create = function *(){
    var body = yield parse(this);
    var user = yield platform.users.createUser(body.name);
    this.body = user;
};