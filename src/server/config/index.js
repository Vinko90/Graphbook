module.exports = {
    "development": {
        "username": "devuser",
        "password": "devuser",
        "database": "graphbook_dev",
        "host": "localhost",
        "port": 6033,
        "dialect": "mysql",
        "operatorsAliases": "false",
        "pool": {
            "max": 5,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        }
    },
    "production": {
        "host": process.env.host,
        "port": 6033,
        "username": process.env.username,
        "password": process.env.password,
        "database": process.env.database,
        "logging": false,
        "dialect": "mysql",
        "operatorsAliases": "false",
        "pool": {
            "max": 5,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        }
    }
}
