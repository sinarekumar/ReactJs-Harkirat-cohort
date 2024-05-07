const express = require('express');
const app = express();
const { createTodo } = require('./types');
const { todo } = require('./db');
const port = 3000;

app.use(express.json());

app.get('/todo', function (req, res) {
    res.send("Hello World ")
})

app.post('/todo', async function (req, res) {
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
        description: createPayLoad.description
    })

    res.json({
        msg: 'Todo created'
    })
})

app.put('/todo', async function (req, res) {
    const updatePayload = req.body;
    const parsePayLoad = createTodo.safeParse(updatePayload);
    if (!parsePayLoad.success) {
        res.status(411).json({
            msg: "You sendt the wrong inputs"
        })
        return
    }

    // connect it with mongodb
    await todo.create({
        title: updatePayload.title,
        description: updatePayload.description
    })

    res.json({
        msg: 'Todo created'
    })
})

app.listen(port, () => {
    console.log(`Example app listening on following port ${port}`);
})