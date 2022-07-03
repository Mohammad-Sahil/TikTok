import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: Number,
    messages: Number,
    shares: Number,
});

const tiktokCollection = new mongoose.model('tiktokVideos', tiktokSchema);

export default tiktokCollection;