const express = require("express");
const session = require("express-session");
const app = express();
const port = 5000;
const cors = require ("cors")
require("./passport")
const passport = require("passport")
const authRoute = require("./routes/auth")

app.use(session({
  secret: "rahasia",
  saveUninitialized: true,
  resave: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}))


app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  origin:"http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}))

app.use("/auth", authRoute)

app.listen(port,() => {
  console.log(`server is running at ${port}`)
})

