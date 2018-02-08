import * as mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  clientNumber: String,
  firstName: String,
  middleName: String,
  lastName: String,
  surName: String,
  birthdate: Date,
  address1: String,
  address2: String,
  zoneName: String,
  barangayName: String,
  cityName: String,
  provinceName: String,
  lastUpdate: Date,
  creationDate: Date
});

const Client = mongoose.model('Client', clientSchema);

export default Client;
