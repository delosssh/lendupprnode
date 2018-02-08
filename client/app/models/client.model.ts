import { BaseModel } from './base.model';

export class ClientModel extends BaseModel {
  clientNumber: String = '';
  firstName: String = '';
  middleName: String = '';
  lastName: String = '';
  surName: String = '';
  birthdate: Date = new Date();
  address1: String = '';
  address2: String = '';
  zoneName: String = '';
  barangayName: String = '';
  cityName: String = '';
  provinceName: String = '';
  lastUpdate: Date = new Date();
  creationDate: Date = new Date();
  loans: Number = 0;
}