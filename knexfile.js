// // Update with your config settings.

// module.exports = {

//   development: {
//     client: 'sqlite3',
//     useNullAsDefault: true,
//     connection: {
//       filename: './data/reactStore.db3',
//     },
//     pool:{
//       afterCreate: (conn, done) => {
//         // runs after a connection is made to the sqlite engine
//         conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
//     },
//     migrations:{
//       directory:"./data/migrations",
//     },
//     seeds:{
//       directory:"./data/seeds",
//     },
//   },

//   // staging: {
//   //   client: 'postgresql',
//   //   connection: {
//   //     database: 'my_db',
//   //     user:     'username',
//   //     password: 'password'
//   //   },
//   //   pool: {
//   //     min: 2,
//   //     max: 10
//   //   },
//   //   migrations: {
//   //     tableName: 'knex_migrations'
//   //   }
//   // },

//   // production: {
//   //   client: 'postgresql',
//   //   connection: {
//   //     database: 'my_db',
//   //     user:     'username',
//   //     password: 'password'
//   //   },
//   //   pool: {
//   //     min: 2,
//   //     max: 10
//   //   },
//   //   migrations: {
//   //     tableName: 'knex_migrations'
//   //   }
//   // },

// };

require("dotenv").config();

const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/auth";
// if using a local postgres server, please create the database manually, Knex will not create it autmatically

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/reactStore.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  
};
