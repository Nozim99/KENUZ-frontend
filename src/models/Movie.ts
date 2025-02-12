import mongoose from 'mongoose'

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    age_limit: {
        type: Number,
        required: true
    },
    genre: {
        type: [String],
        required: true
    },
    type: {
        type: String,
        required: true
    },
    video_link: {
        type: String,
        required: true
    }
})

export default mongoose.models.Movie || mongoose.model('Movie', MovieSchema)
