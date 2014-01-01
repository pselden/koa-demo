var usersPersistence = require('./usersPersistence');

exports.getUser = function *(id){
    if(!id){
        throw new Error("id must be specified");
    }

    return yield usersPersistence.getUser(id);
};

exports.createUser = function *(name){
    if(!name){
        throw new Error("name must be specified");
    }

    return yield usersPersistence.createUser(name);
}