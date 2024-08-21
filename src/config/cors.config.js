const whitelist = [
  "http://localhost:5000",
  "http://localhost:5173",
  "https://library-management-system-bz8k.onrender.com",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

export { corsOptions };
