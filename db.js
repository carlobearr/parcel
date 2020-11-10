const mongoose = require('mongoose');
mongoose.Promise = global.Promise
let isConnected

module.exports = async = () => {
    if (isConnected) return Promise.resolve()

    return mongoose.connect(process.env.DB || "mongodb+srv://parcel_db_user:xXOT9Ymxw0XXuQFu@parcel-cluster.ijw0k.mongodb.net/parcel?retryWrites=true&w=majority")
        .then(db => {
            isConnected = db.connections[0].readyState
        })

}