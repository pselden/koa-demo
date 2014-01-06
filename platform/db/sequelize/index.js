var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var username = null;
var password = null;
var options = { // TODO -- pull from config
    dialect: "postgres",
    port:    5432
};
var client = new Sequelize('blogs_db', username, password, options);
var models = {};

// read all models and import them into the "db" object
fs
    .readdirSync(__dirname + '/models')
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach(function (file) {
        var model = client.import(path.join(__dirname + '/models', file));
        models[model.name] = model;
    });

Object.keys(models).forEach(function (modelName) {
    if (models[modelName].options.hasOwnProperty('associate')) {
        models[modelName].options.associate(models);
    }
});

module.exports = models;
module.exports.client = client;