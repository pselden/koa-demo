var platform = require('../../platform'),
    parse = require('co-body');

var show = exports.show = function *show(){
    var user = yield platform.users.getUser(this.params.userId);
    if(!user){
        return this.throw(404, 'No user found');
    }

    this.body = user;
};

var create = exports.create = function *create(){
    var body = yield parse(this);
    var user = yield platform.users.createUser(body.name);
    this.body = user;
};

exports.register = function(router){
    router.get('/users/:userId', show);
    router.post('/users', create);
};