import mongoose from 'mongoose'

const ExerciseSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        area: { type: String, required: true },
        // video: { type: String, required: true }
    },
    { collection: 'exercises' }
)

const ScheduleSchema = new mongoose.Schema(
    {
        exercises: [
            {
                exercise: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Exercise'
                },
                ripetition: { type: Number },
                duration: { type: Number }
            },
        ]
    },
    { collection: 'schedules' }
)

const Exercise = mongoose.model('Exercise', ExerciseSchema)
const Schedule = mongoose.model('Schedule', ScheduleSchema)

export { Exercise, Schedule }
