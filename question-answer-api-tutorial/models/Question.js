const mongoose = require("mongoose");
const slugify = require("slugify")
const Schema = mongoose.Schema;

const OuestionSchema = new Schema({

    title: {
        type: String,
        required: [true, "Please provide a title"],
        minlength: [10, "Please provide a title at least 10 characters "],
        unique: true

        //Bubir sorudur, bu-bir-sorudur
    },

    content: {
        type: String,
        required: [true, "Please provide a content"],
        minlength: [20, "Please provide a title at least 20 characters "]
    },
    slug: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"
    },
    likedCount: {
        type : mongoose.Schema.ObjectId,
        ref : "user"
    },
    likes: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    answerCount : {
        type : Number,
        default : 0
    },
    answers: {
        type: mongoose.Schema.ObjectId,
        ref: "Answer"
    }

})
OuestionSchema.pre("save", function (next) {
    if (!this.isModified("title")) {
        next();
    }
    this.slug = this.makeSlug();
    next();
})


OuestionSchema.methods.makeSlug = function () {

    return slugify(this.title, {
        replacement: '-',  // replace spaces with replacement character, defaults to `-`
        remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
        lower: false,      // convert to lower case, defaults to `false`
    })

}
module.exports = mongoose.model("Question", QuestionSchema)

