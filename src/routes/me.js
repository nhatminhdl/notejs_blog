import express from 'express';
import MeController from '../app/controllers/MeController.js';

const router = express.Router();

router.get('/stored/courses', MeController.storedCourses);

export default router;
