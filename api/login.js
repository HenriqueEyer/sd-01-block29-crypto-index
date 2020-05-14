const express = require('express');

const { validEmailOrPass, generateToken } = require('../service/functions');

const router = express.Router();

const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regexPassword = /^[0-9]{6}$/;

const arraysToken = [];

const callBackRequestLogin = (req, res) => {
  const token = generateToken(16);
  arraysToken.push(token);
  console.log('to dentro da função callbacklogin', arraysToken);
  const { email, password } = req.body;
  if (
    validEmailOrPass(email, regexEmail) &&
    validEmailOrPass(password, regexPassword)
  )
    return res.status(200).send({ token });
  return res.status(400).send({ mensagem: 'Campos inválidos' });
};

router.post('/login', callBackRequestLogin);

module.exports = { router, arraysToken };
