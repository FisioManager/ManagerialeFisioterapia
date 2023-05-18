import mongoose from 'mongoose'
import { Calendar } from './calendar.model.js'
import { Patient } from './patient.model.js'
import Doctor from './doctor.model.js'

const UserSchema = new mongoose.Schema(
  {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      // iva: { type: String, required: true },
      // cf: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      calendar: { type: mongoose.Schema.Types.ObjectId, ref: 'Calendar' },
      patients: [ { patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' } } ],
      doctors: [ {  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' } } ],
      plan: { type: String, require: true, default:'standard'},
      expiration: { type: Date, required: true, default:Date.now },
      refreshToken: { type: String },
      rights: { type: String, default: 'regular' }
  },
  { collection: 'users' }
)

const User = mongoose.model('User', UserSchema)

export  default User
