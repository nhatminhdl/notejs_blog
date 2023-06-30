import express from 'express';
import CoursesController from '../app/controllers/CoursesController.js';

const router = express.Router();

router.get('/create', CoursesController.create);
router.post('/store', CoursesController.store);
router.get('/:id/edit', CoursesController.edit);
router.put('/:id', CoursesController.update);
router.get('/:slug', CoursesController.show);

export default router;
