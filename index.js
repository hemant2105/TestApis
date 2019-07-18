const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const { Query } = require('./queries')
const { Driver } = require('./driver')
//const { Init } = require('./init')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/users', async (request, response) => {
    let data = await Driver.getUser();
    for(let i = 0;i<data.length - 1;i++){
        console.log(data[i])
        let res = await Query.createUser(data[i]);
        console.log(res)
    }
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/todo', async (request, response) => {
    let data = await Driver.getTodos();
    for(let i = 0;i<data.length - 1;i++){
        console.log(data[i])
        let res = await Query.createTodo(data[i]);
        console.log(res)
    }
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/album', async (request, response) => {
    let data = await Driver.getAlbums();
    for(let i = 0;i<data.length - 1;i++){
        console.log(data[i])
        let res = await Query.createAlbum(data[i]);
        console.log(res)
    }
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.get('/photos', async (request, response) => {
    let data = await Driver.getPhotos();
    for(let i = 0;i<data.length - 1;i++){
        let res = await Query.createPhotos(data[i]);
        console.log(res)
    }
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.get('/posts', async (request, response) => {
    let data = await Driver.getPosts();
    for(let i = 0;i<data.length - 1;i++){
        let res = await Query.createPosts(data[i]);
        console.log(res)
    }
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.get('/photos', async (request, response) => {
    let data = await Driver.getPhotos();
    for(let i = 0;i<data.length - 1;i++){
        let res = await Query.createPhotos(data[i]);
        console.log(res)
    }
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.get('/comments', async (request, response) => {
    let data = await Driver.getComments();
    for(let i = 0;i<data.length - 1;i++){
        let res = await Query.createComments(data[i]);
        console.log(res)
    }
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})