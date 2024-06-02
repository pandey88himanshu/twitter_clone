const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lasttName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    userEmail: {
      type: String,
      required: true,
      unique: true,
    },
    userPassword: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      enum: ["user", "admin", "verified"],
    },
    tweets: [
      {
        posts: {
          type: String,
        },
        image: {
          type: String,
        },
        likes: {
          type: Number,
        },
        comments: [
          {
            person: {
              type: String,
            },
            commentText: {
              type: String,
            },
          },
        ],
        category: {
          type: String,
        },
        // retweet:{
        //     //to be analysed
        // }
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("userModel", userSchema);
