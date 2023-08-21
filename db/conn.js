const mongoose = require('mongoose');

async function main () {
    await mongoose.connect('mongodb://localhost:27017/firstproject-mongoose-node')
    console.log('Conectado ao MongoDB com ODM Mongoose!');
}

main().catch((err) => console.log(err));

module.exports = mongoose