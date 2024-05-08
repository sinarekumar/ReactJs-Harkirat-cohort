const express = require('express');
const app = express();
const { createTodo } = require('./types');
const { todo } = require('./db');
const port = 27017;

app.use(express.json());

app.get('/todos', async function (req, res) {
    try {
        const todos = await todo.find(); 

        res.json(todos);
    } catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.post('/todos', async function (req, res) {
    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);
    if (!parsePayLoad.success) {
        res.status(411).json({
            msg: "You sendt the wrong inputs"
        })
        return
    }

    // connect it with mongodb
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })

    res.json({
        msg: 'Todo created'
    })
})

app.put('/todos', async function (req, res) {
    const updatePayload = req.body;
    const parsePayLoad = createTodo.safeParse(updatePayload);
    if (!parsePayLoad.success) {
        res.status(411).json({
            msg: "You sendt the wrong inputs"
        })
        return
    }

    // connect it with mongodb
    await todo.update({
        _id: req.body.id
    }, {
        completed: false
    })

    res.json({
        msg: 'Todo marked as completed'
    })
})

app.listen(port)