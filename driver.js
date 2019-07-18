const axios = require('axios');

class Driver {
    static async getUser() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data;
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    static async getTodos() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            return response.data;
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    static async getAlbums() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
            return response.data;
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    static async getPhotos() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
            return response.data;
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    static async getPosts() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return response.data;
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    static async getComments() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
            return response.data;
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
}
module.exports = { Driver };