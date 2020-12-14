const {Router} = require('express');
const { userController } = require('../controllers');

const userRouter = Router();

userRouter
.route('/:userId/tasks')
.post (userController.createUserTask)
.get(userController.getUserTasks)

userRouter.post('/',userController.createUser);
userRouter.get('/',userController.getAllUsers);

userRouter
  .route('/:userId')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser)


module.exports = userRouter;