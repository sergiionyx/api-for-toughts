const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
  } = require('../../controllers/user-controller');

// GET all and POST 
// /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// GET one by id, PUT, and DELETE  
// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/:userId/friends/:friendId')
  .put(addFriend)
  .delete(deleteFriend);

  router
  .route('/:userId/removefriend/:friendId')
  .put(deleteFriend);


module.exports = router;