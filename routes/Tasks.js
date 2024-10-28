const express = require("express");
const {
  getAllTasks,
  updateTask,
  deleteTask,
  getSingleTask,
  createTask,
} = require("../controllers/Tasks");
const router = express.Router();
router.route("/").get(getAllTasks);
router.route("/:id").get(getSingleTask);
router.route("/").post(createTask);
router.route("/:id").patch(updateTask);
router.route("/:id").delete(deleteTask);
module.exports = router;
