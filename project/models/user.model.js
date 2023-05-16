import mongoose from 'mongoose'
import Calendar from './calendar.model'
import Patient from './patient.model'
import Doctor from './doctor.model'

const UserSchema = new mongoose.Schema(
  {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      // iva: { type: String, required: true },
      // cf: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      calendar: { type: mongoose.Schema.Types.ObjectId, ref: "Calendar" },
      patients: [ { patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" } } ],
      doctors: [ {  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" } } ],
      plan: { type: String, require: true },
      expiration: { type: Date, required: true }
  },
  { collection: "users" }
)

const User = mongoose.model("User", UserSchema)

export  default User
