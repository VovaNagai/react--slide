export default class GetData {
    constructor() {
        this._apiBase='https://jsonplaceholder.typicode.com/todos/1' // путь к API
    }

    async getData(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }

    async getAllPosts() {
        const res = await this.getData('/posts/');
        return res.map(this._formPretty);
    }

    async getPost(id) {
        const post = await this.getData(`/posts/${id}`);
        return this._formPretty(post);
    }

    _formPretty(item) {
        return{
            id: item.id,
            tittle: item.title
        }
    }
} 