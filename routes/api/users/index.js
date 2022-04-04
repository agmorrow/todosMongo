const router = require('express').Router();
const { createUser, getAllUsers, getUserById, updateUserById, deleteUserById, addHobbyToUserById  } = require('../../../controllers/userController');

// router.post('/', createUser);
// router.get('/', getAllUsers);
router.route('/')
  .get(getAllUsers)
  .post(createUser);

router.put('/addHobby/:userId', addHobbyToUserById);

  router.route('/:userId')
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

module.exports = router;

