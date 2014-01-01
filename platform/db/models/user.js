module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        name: DataTypes.STRING
    }, {
        associate: function(models) {
            User.hasMany(models.Post);
        }
    });

    return User;
}