import express from "express";

import usersRoutes from "./routes/users.js";

//  =The complete app lies within this. (app)
const app = express();
const PORT = 5000;

// app.use(bodyParser.json()); {deprecated}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);

// Homepage | BaseURL
app.get("/", (req, res) => res.send("Welcome!"));

// 'BaseURL/users'
app.use('/users', usersRoutes);

// get - for getting some data
// post - for posting(adding) some data
// delete - for removing(deleting) some data
// patch - for partial modification of existing data
// put - for complete modification data


