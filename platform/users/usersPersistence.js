var db = require('../db');

exports.getUser = function *(id){
    return yield db.User.find(Number(id));
};

exports.createUser = function *(name){
    return yield db.User.create({ name: name });
}