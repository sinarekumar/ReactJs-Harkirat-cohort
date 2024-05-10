/* eslint-disable react/jsx-key */

export function Todos(todos) {
    if (!Array.isArray(todos)) {
        return <div>No todos to display.</div>;
    }

    return <div>
        {todos?.map((item) => {
            return <div>
                <h1>{item.title}</h1>
                <h2>{item.description}</h2>
                <button>{item.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}