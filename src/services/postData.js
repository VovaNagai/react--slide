export default class PostData {
    constructor() {
        this._apiBase='https://jsonplaceholder.typicode.com/todos/1' // путь к API
    }

    async postData(url, body) {
        const res = await fetch(`${this._apiBase}${url}`,
            {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        if (!res.ok) {
            throw new Error(`Could not post on ${url}, status: ${res.status}`)
        }
        return await res.json();
    }
}
