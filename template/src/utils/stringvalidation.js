import React from 'react';

const StringValidation = string => {
  let validate;

  let stringValidation = /^[a-zA-Z0-9]+$/;
  for (i = 0; i < string.length; i++) {
    if (stringValidation.test(string.charAt(i))) {
      validate = true;
      break;
    } else {
      validate = false;
    }
  }
  return validate;
};

const checkEmail = value => {
  const condition = new RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
  return condition.test(value);
};

const checkPassword = value => {
  const condition = new RegExp(/.{8,}$/);
  return condition.test(value);
};

const checkMobileNumber = value => {
  const condition = new RegExp(/^[0-9]{10,13}$/);
  return condition.test(value);
};

const checkCvv = value => {
  const condition = new RegExp(/^[0-9]{3,3}$/);
  return condition.test(value);
};

const checkCardNo = value => {
  const condition = new RegExp(/^[0-9]{16,16}$/);
  return condition.test(value);
};

const checkWhiteSpace = value => {
  const conditions = new RegExp(/^\s*$/);
  return conditions.test(value);
};

const CheckName = Value => {
  const conditions = new RegExp(/^[A-Za-z ]+$/);
  return conditions.test(Value);
};

const checkNumberOnly = Value => {
  const conditions = new RegExp(/^[0-9]+$/);
  return conditions.test(Value);
};

export {
  StringValidation,
  checkEmail,
  checkPassword,
  checkMobileNumber,
  checkCvv,
  checkCardNo,
  checkWhiteSpace,
  CheckName,
  checkNumberOnly,
};
