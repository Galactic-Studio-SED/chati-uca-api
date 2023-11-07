const validateInput = require("./validateInput");

const validateUserInput = (req, res, next) => {
  if (!req.body) {
    return;
  }

  const { username, email, phone } = req.body;

  const isUsernameValid = validateInput(
    username,
    /^[a-zA-Z0-9_\s]+$/,
    255,
    "username",
    res
  );
  const isEmailValid = validateInput(
    email,
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    255,
    "email",
    res
  );
  const isPhoneValid = validateInput(
    phone,
    /^[\d()-\s]+$/,
    20,
    "phone number",
    res
  );

  if (isUsernameValid && isEmailValid && isPhoneValid) {
    next();
  }
};

module.exports = validateUserInput;
