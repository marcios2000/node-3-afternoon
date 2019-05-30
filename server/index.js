const express = require('express');
const massive = require('massive');
const products_controller = require("./products_controller")

require('dotenv').config()

const app = express();

app.use(express.json());
const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(dbI => {
    app.set('db', dbI)
    console.log("Database Connected :)")
}).catch(error => console.log(error))

app.post('/api/products', products_controller.create);
app.get('/api/products', products_controller.getAll);
app.get('/api/products/:id', products_controller.getOne);
app.delete('/api/products/:id', products_controller.delete);
app.put('/api/products/:id', products_controller.update)





app.listen(SERVER_PORT, () => {
    console.log(`Server is Listening on port ${SERVER_PORT}`)
});
