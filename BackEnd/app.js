const express = require('express');
const app = express();
let cors = require("cors");
app.use(cors());
app.use(express.json());
const { Client } = require('pg');
const config = require('./config')[process.env.NODE_ENV || "dev"]
const port = config.port;

const client = new Client({
    connectionString: config.connectionString
});
client.connect();

//get all guest
app.get("/api/guest", (req, res) => {
	client.query('SELECT * FROM guest')
		.then(result => {
			// console.log(result.rows);
			res.send(result.rows);
		})
		.catch(e => console.error(e.stack));
});

//get guest by id
app.get('/api/guest/:id', (req, res, next) => {
    async function getGuestById() {
        try {
            const result = await client.query(`SELECT * FROM guest WHERE id = ${req.params.id} `);
            if (result.rows.length === 0) {res.status(404).send('There is no person with that id!') 
            } else { 
            res.send(result.rows);
            }
        } catch (e) {
            next(e);
        };
    };
    getGuestById();
});

//create a new guest
app.post('/api/guest', (req, res, next) => {
    let guest = req.body;
    let guestName = guest.name;
    let guestPhone = guest.phone;
    let guestRelation = guest.relation;
    client.query(`INSERT INTO guest (name, phone, relation) VALUES ('${guestName}', '${guestPhone}', '${guestRelation}') RETURNING *`)
    .then(result => {
        res.status(200).send(result.rows);
    })
    .catch(e => console.error(e.stack));
});

//delete a guest
app.delete('/api/guest/:id', (req,res, next) => {
    async function deleteGuestById() {
        try {
            const query = await client.query(`SELECT * FROM guest WHERE id = ${req.params.id}`);
            if (query.rows.length === 0) {res.status(404).send('No sizes found for that id!') 
        } else {
            const result = await client.query(`DELETE FROM guest WHERE id = ${req.params.id}`);
            res.send(result.rows);
        }
        } catch (e) {
            next(e);
        };
    };
    deleteGuestById();
});

//update guest information
app.patch('/api/guest/:id', (req, res, next) => {
    let guest = req.body;
    let guestName = guest.name;
    let guestPhone = guest.phone;
    let guestRelation = guest.relation;
    async function updateGuest() {
        try {
            client.query(`UPDATE guest SET
            name = COALESCE(NULLIF('${guestName}', ''), name),
            phone = COALESCE(NULLIF('${guestPhone}', ''), phone),
            relation = COALESCE(NULLIF('${guestRelation}', ''), relation)
          WHERE id = ${req.params.id};`)

            const result = await client.query(`SELECT * FROM guest WHERE id = ${req.params.id}`);
            res.status(201).send('the query is okay');
        } catch (e) {
            next(e);
        };
    };
    updateGuest();
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
