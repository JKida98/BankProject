import sequelize from '../connection.js';
import Sequelize from 'sequelize';

const userModel = {
    firstName: {
        type: Sequelize.STRING
      },     
      lastName: {
        type: Sequelize.STRING
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      ssn: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      login: {
        type: Sequelize.STRING
      },
}

export const createSequelizeUserModel = () => {
    const User = sequelize.define('user', {
        userModel
      });
    
      // force: true will drop the table if it already exists
      User.sync({force: true}).then(() => {
        return User.create({
          firstName: 'John',
          lastName: 'Hancock'
        });
      });
}


// USER
// - firstname
// - lastname
// - date of birth
// - pesel
// - adres
// - email
// - haslo
// - login

// KONTO
// - numer konta
// - saldo
// - dostepne srodki
// - user

