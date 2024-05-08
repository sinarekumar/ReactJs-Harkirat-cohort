

export function CreateTodo() {

    return (
        <>
            <div style={{ marginBottom: '5px' }}>
                <input
                    type="text"
                    placeholder="Title"
                /><br />
                <input
                    type="text"
                    placeholder="Description"
                /><br />
                <button>Add button</button>
            </div>
        </>
    )
}