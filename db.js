const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;

module.exports = () => {
    mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://parcel_db_user:xXOT9Ymxw0XXuQFu@parcel-cluster.ijw0k.mongodb.net/parcel?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true })
        .then(db => {
            isConnected = db.connections[0].readyState
        });

}