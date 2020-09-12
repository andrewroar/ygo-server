const PORT = process.env.PORT || 8000;

const DB_URI = process.env.MONGODB_URI || "mongodb://localhost/googleBooks";

const MONGOOSE_OPTIONS = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
};

module.exports = {
  PORT,
  DB_URI,
  MONGOOSE_OPTIONS,
};
