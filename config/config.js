require('dotenv').config();
export default
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
      "host": process.env.PRODUCTION_HOST,
      "username": process.env.PRODUCTION_USER,
      "password": process.env.PRODUCTION_PASSWORD,
      "database": process.env.DATABASE,
      "dialect": "postgres",
      "database_url": process.env.DATABASE_URL
      // "use_env_variable": "DATABASE_URL",
      // "dialectOptions": {
      //   "ssl": {
      //     "require": true,
      //     "rejectUnauthorized": false // <<<<<<< YOU NEED THIS
      //   }
      // }
    }
  }