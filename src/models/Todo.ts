class Todo {
    id: string;
    text: string;

    constructor(textContent: string) {
        this.id = new Date().toISOString()
        this.text = textContent
    }
}

export default Todo