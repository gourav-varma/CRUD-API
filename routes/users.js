import express from "express";
import { getUsers, addUser, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

// get all users
router.get("/", getUsers);

// add a user
router.post("/", addUser);

// get a specific user's data
router.get("/:id", getUser);

// delete a specific user
router.delete("/:id", deleteUser);

// update a specific user
router.patch("/:id", updateUser);

export default router;
