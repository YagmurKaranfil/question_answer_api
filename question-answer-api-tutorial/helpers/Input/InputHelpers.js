const bcrypt = require("bcryptjs");

const validateUserInput = (email,password) =>{
    return email && password ;
}

//Hashlenmiş şifre ile normal şifre eşleşiyor mu
const comparePassword = (password, hashedPassword) => {
   return  bcrypt.compareSync(password,hashedPassword);
}

module.exports = {
    validateUserInput,
    comparePassword
};