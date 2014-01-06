var db = require('../db');

exports.createPost = function *(userId, title){
    var tasks = yield {
        post: db.sequelize.Post.create({ title: title }),
        user: db.sequelize.User.find(userId)
    };

    var user = tasks.user;
    var post = tasks.post;

    if(user && post){
        yield user.setPosts([post]);
    }

    return post;
};

exports.getPost = function *(postId){
    return yield db.sequelize.Post.find(postId);
};