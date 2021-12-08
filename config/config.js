require('dotenv').config();
module.exports =
{
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
  },
  "production": {
    "username": PRODUCTION_USER,
    "password": PRODUCTION_PASSWORD,
    "database": DATABASE,
    "host": HOST,
    "dialect": "postgres",
    "use_env_variable": "DATABASE_URL",
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false // <<<<<<< YOU NEED THIS
      }
    }
  }
}