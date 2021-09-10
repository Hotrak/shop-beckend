const express = require('express');
const router = express.Router();

const Todo = require('../models/Todo');

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });
  
router.get('/g', async (req, res) => {
    res.send('SERVER WORKING..!!');
});
router.get('/', async (req, res) => {
    const todos = await Todo.find({});
    console.log(req.query);
    res.send(todos);
});
router.get('/create', async (req, res) => {
    const todo = new Todo({
        title: 'TODO ',
    })
    await todo.save().catch(e => console.log('ERROR2', e));

    res.send(todo);
});

module.exports = router;