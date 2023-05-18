import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema(
    {
        type: { type: String, required: true },
        date: { type: Date, required: true },
        title: { type: String, required: true },
        content: { type: String, required: true },
        notes: { type: String }
    },
    { collection: 'events' }
)

const CalendarSchema = new mongoose.Schema(
    {
        events: [
            {
                event: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Event'
                }
            }
        ]
    },
    { collection: 'calendars' }
)

const Event = mongoose.model('Event', EventSchema)
const Calendar = mongoose.model('Calendar', CalendarSchema)

export { Event, Calendar }
