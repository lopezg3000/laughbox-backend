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
    "username": "nryllxwmipuqdv",
    "password": "3e010321003b2316773f0cad50bfd6a72a02bb86194e96f8ec383f68ee10c92a",
    "database": "d2d87bg2l69u27",
    "host": "ec2-18-210-159-154.compute-1.amazonaws.com",
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