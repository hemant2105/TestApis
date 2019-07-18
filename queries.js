var pg = require('pg');
const connectionString = "postgres://fchhltfc:vcyFNRGGWwzAIXdQPiTMXcEXz5nYAYLV@satao.db.elephantsql.com:5432/fchhltfc"

const pool = new pg.Pool({
    connectionString: connectionString,
})
class Query {
    static async createUser(body) {
        let name = body.name
        let user_name = body.username
        let email = body.email
        let street = body.address.street
        let suite = body.address.suite
        let city = body.address.city
        let zipcode = body.address.zipcode
        let lat = body.address.lat
        let lng = body.address.lng
        let phone = body.phone
        let website = body.website
        let id = body.id
        let company_id = await Query.getOrCreateCompany(body.company);
        const client = await pool.connect()
        const res = await client.query('INSERT into users(id,name,username,email,street,suite,city,zipcode,latitude,longitude,phone_number,website,company_id) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)', [id,name, user_name, email,street,suite,city,zipcode,lat,lng,phone,website,company_id]);
        client.end()
        return res;
    }

    static async getOrCreateCompany(company){
        const client = await pool.connect()
        let query_string = "SELECT * FROM company WHERE name = '" + company.name+"'";
        let res = await client.query(query_string)
        client.end();
        if (!res.rows[res.rows.length - 1]) {
            await Query.createCompany(company);
            return await Query.getOrCreateCompany(company);
        } else {
            return res.rows[res.rows.length-1].id;
        }
    }

    static async createCompany(address) {
        let name = address.name
        let catch_phrase = address.catchPhrase
        let bs = address.bs
        const client = await pool.connect()
        client.query('INSERT into company(name,catch_phrase,bs) values($1,$2,$3)', [name, catch_phrase, bs], (error, results) => {
            if (error) {
                console.log(error)
                throw error
            }
            client.end();
            return results;
            //          response.status(201).send(`User added with ID: ${result.insertId}`)
        });
    }
    static async createTodo(body) {
        let user_id = body.userId
        let id = body.id
        let title = body.title
        let completed = body.completed ? 1 : 0
        const client = await pool.connect()
        const res = await client.query('INSERT into todo(id, user_id, title, completed) values($1,$2,$3,$4)', [id,user_id, title, completed]);
        client.end()
        return res;
    }
    static async createAlbum(body) {
        let user_id = body.userId
        let id = body.id
        let title = body.title
        const client = await pool.connect()
        const res = await client.query('INSERT into album(id, user_id, title) values($1,$2,$3,)', [id,user_id, title]);
        client.end()
        return res;
    }
    static async createPhotos(body) {
        let album_id = body.albumId
        let id = body.id
        let title = body.title
        let url = body.url
        let thumbnail_url = body.thumbnailUrl
        const client = await pool.connect()
        const res = await client.query('INSERT into photos(album_id, id, title, url, thumbnail_url) values($1,$2,$3,$4,$5)', [album_id, id, title, url, thumbnail_url]);
        client.end()
        return res;
    }
    static async createPosts(body) {
        let user_id = body.userId
        let id = body.id
        let title = body.title
        let body = body.body
        const client = await pool.connect()
        const res = await client.query('INSERT into posts(user_id, id, title, body) values($1,$2,$3,$4)', [user_id, id, title, body]);
        client.end()
        return res;
    }
    static async createComments(body) {
        let post_id = body.postId
        let id = body.id
        let name = body.name
        let email = body.email
        let body = body.body
        const client = await pool.connect()
        const res = await client.query('INSERT into comments(post_id, id, name, email, body) values($1,$2,$3,$4,$5)', [post_id, id, name,email, body]);
        client.end()
        return res;
    }    
}

module.exports = {
    Query
};