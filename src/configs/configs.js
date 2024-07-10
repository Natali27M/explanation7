module.exports = {
  PORT: process.env.PORT || 6000,
  MONGO_URL: process.env.MONGO_URL || "mongodb://127.0.0.1:27017/test",

  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || "asd",
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || "qwe",

  NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL || "nata13pr@gmail.com",
  NO_REPLY_PASSWORD: process.env.NO_REPLY_PASSWORD || "Nata5121991",

  FRONTEND_URL: process.env.FRONTEND_URL || "https://google.com",
};
