const express = require("express");

const { protect } = require("../middlewares/authMiddleware");
const { accessChat,fetchChats,createGroupChat,renameGroup,addToGroup,removeFromGroup } = require("../controllers/chatControllers");

const router = express.Router();

//to create and access the one-on-one chat, first check user have logged in or not using protect middleware
router.route("/").post(protect, accessChat);

//to get all the chats to the user
router.route("/").get(protect, fetchChats);

// //to create a group chat 
router.route("/group").post(protect, createGroupChat);

// //to rename the  particular chat in database => put req
router.route("/rename").put(protect, renameGroup);

// //to remove from group chat
router.route("/groupremove").put(protect, removeFromGroup);

// //to add user in the group chat 
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;


