const mongoose = require("mongoose");

async function connectDbAtlas(url) {
  console.log("Connecting to Atlas...");
  return mongoose.connect(url);
}

module.exports = { connectDbAtlas };
