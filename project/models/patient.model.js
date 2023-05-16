import mongoose from 'mongoose'
import Event from './calendar.model'
import User from './user.model'

const DocumentSchema = new mongoose.Schema(
    {
        date: { type: Date, required: true },
        title: { type: String, required: true },
        content: { type: String, required: true },
        notes: { type: String }
    },
    { collection: 'documents' }
)

const InvoiceSchema = new mongoose.Schema(
    {
        invoiceId: { type: Number, required: true, unique: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        address: { type: String, required: true },
        PEC: { type: String },
        cf: { type: String },
        destinationCode: { type: String },
        service: { type: String, required: true },
        amount: { type: Number, required: true },
        tax: { type: Number, required: true },
        taxRegime: { type: String, required: true, default: 'forfettario'}
    },
    { collection: 'invoices' }
)

const PatientSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true},
        gender: { type: String, required: true},
        dateOfBirth: { type: Date, required: true},
        address: { type: String, required: true },
        email: { type: String, unique: true },
        doucments: [
            {
                document: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Document'
                }
            }
        ],
        events: [
            {
                event: {
                    type:mongoose.Schema.Types.ObjectId,
                    ref: 'Event'
                }
            }
        ],
        invoices: [
            {
                invoice: {
                    type:mongoose.Schema.Types.ObjectId,
                    ref: 'Invoice'
                }
            }
        ]
    },
    { collection: 'patients' }
  )

const Document = mongoose.model('Document', DocumentSchema)
const Patient =  mongoose.model('Patient', PatientSchema)
const Invoice =  mongoose.model('Invoice', InvoiceSchema)

export { Document, Invoice, Patient }
