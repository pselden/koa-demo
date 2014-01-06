module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define('Post', {
        title: DataTypes.STRING
    }, {
        associate: function(models) {
            Post.belongsTo(models.User);
        }
    });

    return Post;
}