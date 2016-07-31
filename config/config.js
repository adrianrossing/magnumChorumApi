var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'magnumchorumapi'
    },
    port: process.env.PORT || 3256,
    db: 'mongodb://localhost/magnumchorumapi-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'magnumchorumapi'
    },
    port: process.env.PORT || 3256,
    //db: 'mongodb://localhost/magnumchorumapi-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'magnumchorumapi'
    },
    port: process.env.PORT || 3256,
    //db: 'mongodb://localhost/magnumchorumapi-production'
  }
};

module.exports = config[env];
