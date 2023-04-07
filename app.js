const rateLimit = require ('express-rate-limit')

const express = require('express')
const app = express()

const createAccountLimiter = rateLimit({
	windowMs: 60 * 60 * 1000, // 1 hour
	max: 20,
	message:
		'Too many accounts created from this IP, please try again after an hour',
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

//server
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.post('/login', (request, response) => {
    response.send({
		"errorCode": "0",
		"message": "Đăng nhập thành công",
		"data": {
			"errorCode": 0,
			"message": "Đăng nhập thành công",
			"data": {
				"token": "E837D90E-71B3-60A0-3DAC-561EB5884EDF-ODQzODYyNTIyNTU=",
				"phone_number": "0386252255",
				"username": "admin",
				"birthday": "28/02/1989",
				"avatar": "",
				"email": ""
			}
		}
	})
})

//client
const fetch2 = require("node-fetch");

const login = async()  =>{
	let dataLogin
	await fetch2('http://localhost:3000/login', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ "id": 78912 })
	})
    .then((response) => response.json())
	.then(response => {
		dataLogin = response.data
		})
		return dataLogin
}

const Joi = require('joi');

 const schemaIsAdmin = Joi.object({
    token: Joi.string()
		.length(53)
        .required()
        .messages({
            "string.empty": `"token" bạn chưa đăng nhập`,
            "string.length": `"token" không hợp lệ`,
            "any.required": `"token" bạn chưa đăng nhập`
          }),
	username: Joi.string()
		.equal('admin')
		.required()
		.messages({
			"string.empty": `"username" không phải admin`,
			"any.required": `"username" không phải admin`,
			"string.equal": `"username" không phải admin`
		})
})
//chuyển trang admin
const checkAdminLogin = async() => {
	const dataLogin = await login()
	const dataCheck = {
		token: dataLogin.data.token,
		username: dataLogin.data.username
	}
	const result = schemaIsAdmin.validate(dataCheck)
	if(result.error == undefined) {
		console.log('chuyển trang admin');
	}else {
		console.log('error' + result.error.details[0].message);
	}
}
checkAdminLogin()

app.listen(3000)
