const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  addThought,
  removeThought,
  editThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts/
router.route("/").get(getAllThoughts);

// /api/thoughts/<userId>
router.route("/:userId").post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
  .route("/:userId/:thoughtId")
  .get(getSingleThought)
  .put(editThought)
  .delete(removeThought);

// /api/thoughts/<thoughtId>
router.route("/:thoughtId/").put(addReaction);

router.route("/:thoughtId/:reactionId").put(removeReaction);

module.exports = router;
