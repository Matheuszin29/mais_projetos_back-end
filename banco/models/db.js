const Sequelize = require('sequelize');

const sequelize = new Sequelize('tent', 'root', 'Amunh@1227horus', {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize.authenticate()


.then(() => {
    console.log("conexão bem sucedida!!!");
}).catch(() => {
    console.log("conexão FALHA  !!!");
});


module.exports = sequelize;