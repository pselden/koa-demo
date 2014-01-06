var db = require('../db');

exports.createPost = function *(userId, title){
    var results = yield [ db.sequelize.Post.create({ title: title }), db.sequelize.User.find(userId) ];
    var post = results[0];
    var user = results[1];
    yield user.setPosts([post]);
    return post;
};

exports.getPost = function *(postId){
    return yield db.sequelize.Post.find(postId);
};