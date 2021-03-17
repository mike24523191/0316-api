import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();
// GEET: /api/user

router.get('/',UserController.getUser)
router.post('/',UserController.postUser)
router.patch('/')
router.delete('/')

export default router;

