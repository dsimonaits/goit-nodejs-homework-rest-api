const express = require("express");
const createValidator = require("../../middlewares/joi/create.validator");
const updateValidator = require("../../middlewares/joi/contactUpdate.validator");
const { catchAsync } = require("../../helpers/errors");
const {
  getContactsCtrl,
  getContactByIdCtrl,
  addContactCtrl,
  updateContactCtrl,
  updateContactStatusCtrl,
  deleteContactCtrl,
} = require("../../controllers/contactsCtrl");

const router = express.Router();

router.get("/", catchAsync(getContactsCtrl));

router.get("/:contactId", catchAsync(getContactByIdCtrl));

router.post("/", createValidator, catchAsync(addContactCtrl));

router.delete("/:contactId", catchAsync(deleteContactCtrl));

router.put("/:contactId", updateValidator, catchAsync(updateContactCtrl));

router.put(
  "/:contactId/favorite",
  updateValidator,
  catchAsync(updateContactStatusCtrl)
);

module.exports = router;