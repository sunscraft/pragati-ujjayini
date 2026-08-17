import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        image: { type: String, default: "" },
        author: { type: String, default: "Admin" },
        slug: { type: String, unique: true, sparse: true },
    },
    { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);