require('dotenv').config();
module.exports =
{
  "production": {
    "username": process.env.PRODUCTION_USER,
    "password": process.env.PRODUCTION_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.PRODUCTION_HOST,
    "dialect": "postgres",
    "use_env_variable": "DATABASE_URL",
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false // <<<<<<< YOU NEED THIS
      }
    }
  },
  "development": {
    "username": "postgres",
    "password": "postgres",
    "database": "messageBoard",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}