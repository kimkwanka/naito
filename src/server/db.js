const mongoURI = 'mongodb://localhost:27017/fcc'; // process.env.MONGODB_URI || 'mongodb://localhost:27017/fcc';
const mongoose = require('mongoose');

mongoose.connect(mongoURI);
const db = mongoose.connection;

// eslint-disable-next-line
db.on('error', console.log.bind(console, 'connection error:'));
db.once('open', () => { /* Connection was established */ });

// Schema for a 'Point Of Interest'
const poiSchema = mongoose.Schema({
  poi: {
    id: String,
    going: [String],
  },
});

const POI = mongoose.model('POI', poiSchema);

module.exports = POI;
