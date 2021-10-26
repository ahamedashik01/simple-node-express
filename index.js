const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// const handler = (req, res) => {
//     res.send('hello from node');
// }

// app.get('/', handler);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('wow installed nodemon')
});

const users = [
    {
        id: 0,
        name: "shabnoor",
        username: "Bret",
        email: "Sincere@april.biz",
    },
    {
        id: 1,
        name: "sharbonti",
        username: "Bret",
        email: "Sincere@april.biz",
    },
    {
        id: 2,
        name: "soniya",
        username: "Bret",
        email: "Sincere@april.biz",
    },
    {
        id: 3,
        name: "sunny leone",
        username: "Bret",
        email: "Sincere@april.biz",
    }

]

// user query parameter
app.get('/users', (req, res) => {
    const search = (req.query.search);
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users);
    }
    res.send(users)
});

// app.method post
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

// dynamic api 
app.get('/users/:id', (req, res) => {

    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana'])
})

app.get('/fruits/mangoes/fazil', (req, res) => {
    res.send('fazli am tok')
        ;
})


app.listen(port, () => {
    console.log('lisenting to port', port)
})