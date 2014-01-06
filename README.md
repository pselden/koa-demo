koa-demo
========

A service demo using koa and sequelize.

Prerequisites
=======

- node.js version with harmony generators support (v0.11.9 is tested).
- PostgreSQL running on port 5432 with no username/password -- database is named "blogs_db"
- Redis (used for cache) running on port 6379

Usage
=======

    node --harmony app

Runs on http://localhost:3000, and is mounted on /v1

Examples
=======

    curl --data "name=Test%20Name" http://localhost:3000/v1/users
    {
      "createdAt": "2014-01-02T19:53:41.919Z",
      "updatedAt": "2014-01-02T19:53:41.919Z",
      "name": "Test Name",
      "id": 1
    }
    
    curl http://localhost:3000/v1/users/1
    {
      "id": 1,
      "name": "Test Name",
      "createdAt": "2014-01-02T19:53:41.919Z",
      "updatedAt": "2014-01-02T19:53:41.919Z"
    }