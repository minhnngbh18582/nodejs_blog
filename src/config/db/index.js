const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://minhnngbh18582:minh0964580237@cluster0.l9tp6.mongodb.net/withminh_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };