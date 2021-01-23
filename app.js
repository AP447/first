const express = require("express");
const logger = require("morgan");
const bodyparser = require("body-parser");
const Routes = require('./routes.js');
const app = express();

app.use(logger('dev'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended : false }));

// app.get('*', (req, res) => res.status(200).send({
//     message: 'ok',
// }));

app.use('/', Routes);

app.post('/test', (req, res, next) => {
    const Joi = require('joi');

    const data= req.body;

    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
        bir: Joi.date().default()
    });

    Joi.validate(data, schema, (err, value) => {
        const id = Math.ceil(Math.random() * 999999);

        if(err) {
            res.status(422).json({
                status: 'error',
                message: 'invalid request data',
                data: data
            });
        }
        else {
            res.json({
                status: 'success',
                message: 'user created',
                data: Object.assign({id}, value)
            });
        }
    });
});

app.listen(8000, () => {
    console.log("created");
});
// sadadsa