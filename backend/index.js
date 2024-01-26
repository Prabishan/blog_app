const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();

const port = 4000;

const uuidv4 = require('uuid').v4;

const allTodo = []


app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send(allTodo);
});
console.log(allTodo)
app.post('/add', (req,res)=> {
    const todoObj = req.body;

    todoObj.id = uuidv4();
    allTodo.push(todoObj)
    res.json({message: 'POST route'})
})

app.put('/putToDo', (req, res) => {
    res.json({message: 'PUT route'});
}); 
  
app.delete('/deletetodo', (req, res) => {
    res.json({message: 'DELETE route'});
});
  
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});