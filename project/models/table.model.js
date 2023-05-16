import mongoose from 'mongoose'

const ExerciseSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        area: { type: String, required: true },
        // video: { type: String, required: true }
    },
    { collection: "exercises" }
)

const TableSchema = new mongoose.Schema(
    {
        exercises: [
            {
                exercise: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Exercise"
                },
                ripetition: { type: Number },
                duration: { type: Number }
            },
        ]
    },
    { collection: "tables" }
)

const Exercise = mongoose.model("Exercise", ExerciseSchema)
const Table = mongoose.model("Table", TableSchema)

export { Exercise, Table }
