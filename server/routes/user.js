import express from 'express';
import { getServerTime } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getServerTime);

export default router;
