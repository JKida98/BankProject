import sequelize from '../connection.js';
import Sequelize from 'sequelize';

const accountModel = {
    accountNumber: {
        type: Sequelize.STRING
      },     
      balance: {
        type: Sequelize.DECIMAL 
      },
      availableBalance: {
        type: Sequelize.DECIMAL
      },
      user: {
        type: Sequelize.STRING
      },
}

export const createSequelizeAccountModel = () => {
    const Account = sequelize.define('user', {
        accountModel
      });
    
      // force: true will drop the table if it already exists
        Account.sync({force: true}).then(() => {
        return Account.create({
          accountNumber: "352054",
          balance: 13000.22,
          availableBalance: 9300.50,
          user: 9453969485674,
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

