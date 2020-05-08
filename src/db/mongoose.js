const mongoose = require("mongoose");

connectionURL = process.env.MONGODB_URL;

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

