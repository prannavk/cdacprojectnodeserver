const express = require('express')
const db = require('./db')
const utils = require('./utils')

const router = express.Router()

router.get('/customers', (request, response) => {
    const statement = `SELECT * FROM customers LEFT JOIN customer_details using(cid)`
    db.pool.query(statement, (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.get('/customers/:id', (request, response) => {
    const customer_id = request.params.id
    const statement = `SELECT * FROM customers LEFT JOIN customer_details using(cid) WHERE cid=?`
    db.pool.query(statement, [customer_id], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.post('/customer', (request, response) => {
    const { customer_email, customer_password } = request.body
    const statement = `SELECT * FROM customers LEFT JOIN customer_details using(cid) WHERE (customer_email=? or customer_mobile=?) and customer_password=?`
    db.pool.query(statement, [customer_email,customer_email, customer_password], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.post('/customer/:id', (request, response) => {
    const cid=request.params.id;
    const { customer_address, customer_image } = request.body
    const statement = `INSERT INTO customer_details VALUES (?,?,?)`
    db.pool.query(statement, [customer_address, customer_image, cid], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.post('/register', (request, response) => {
    const { customer_name, customer_email, customer_mobile, customer_password } = request.body
    const statement = `INSERT INTO customers(customer_name,customer_email,customer_mobile,customer_password) VALUES(?,?,?,?)`
    db.pool.query(statement, [customer_name, customer_email, customer_mobile, customer_password], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

module.exports = router
