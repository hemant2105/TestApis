var pg = require('pg');
const connectionString = "postgres://fchhltfc:vcyFNRGGWwzAIXdQPiTMXcEXz5nYAYLV@satao.db.elephantsql.com:5432/fchhltfc"
  
const pool = new pg.Pool({
    connectionString: connectionString,
})

pool.connect(function(err, client, done) {
//    const query = client.query(new pg.Query("DROP TABLE company;"));
//const query = client.query(new pg.Query("CREATE TABLE company(id serial PRIMARY KEY, name VARCHAR (50), catch_phrase TEXT, bs TEXT);"));
//const query = client.query(new pg.Query("CREATE TABLE comments(id serial PRIMARY KEY, post_id INTEGER , name VARCHAR (50),email VARCHAR (50),body TEXT, FOREIGN KEY (post_id) REFERENCES posts (id));"));
//const query = client.query(new pg.Query("CREATE TABLE posts(id serial PRIMARY KEY, user_id INTEGER , title VARCHAR (50),body TEXT, FOREIGN KEY (user_id) REFERENCES users (id));"));
//const query = client.query(new pg.Query("CREATE TABLE photos(id serial PRIMARY KEY, album_id INTEGER , title VARCHAR (50),url VARCHAR (50),thumbnail_url VARCHAR (50),FOREIGN KEY (album_id) REFERENCES albums (id));"));
//const query = client.query(new pg.Query("CREATE TABLE albums(id serial PRIMARY KEY, user_id INTEGER , title VARCHAR (50),FOREIGN KEY (user_id) REFERENCES users (id));"));
//const query = client.query(new pg.Query("CREATE TABLE todo(id serial PRIMARY KEY, user_id INTEGER , title VARCHAR (50), completed INTEGER, FOREIGN KEY (user_id) REFERENCES users (id));"));
const query = client.query(new pg.Query("TRUNCATE TABLE users;"));
//    const query = client.query(new pg.Query("CREATE TABLE users(id serial PRIMARY KEY, name VARCHAR (50), username VARCHAR (50), email VARCHAR (50), street VARCHAR (50), suite VARCHAR (50), city VARCHAR (50), zipcode VARCHAR (50), latitude float, longitude float, phone_number VARCHAR (50), website VARCHAR (50), company_id INTEGER);"));
console.log("123123");
    // const query = client.query(new pg.Query("UPDATE * FROM junk"));
    query.on('row', (row) => {
         console.log(row);
    })
    query.on('end', (res) => {
        console.log("ending");
    })
    query.on('error', (res) => {
        console.log(res);
    })
    done()
})