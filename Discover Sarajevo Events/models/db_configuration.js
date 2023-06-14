var pg = require('pg');

var config = {
    user: 'didmwost',
    database: 'didmwost',
    password: 'fjXBeRHFxFsW7EM17ZMX2tq0WcEgQAbN',
    host: 'snuffleupagus.db.elephantsql.com',
    port: 5432,
    max: 100,
    idleTimeoutMillis: 30000,
};

module.exports = new pg.Pool(config);