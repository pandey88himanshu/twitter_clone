const mongoose = require("mongoose");

const connection = () => {
  try {
    mongoose
      .connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Data Base is connected successfully");
      });
  } catch (error) {
    console.log(error);
    console.log("Error in Data Base Connection");
  }
};
connection();
