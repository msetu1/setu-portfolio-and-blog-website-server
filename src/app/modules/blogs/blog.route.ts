import express from 'express';
import { BlogController } from './blog.controller';
const router = express.Router();

router.post('/add-blog', BlogController.addBlogData);
router.get('/', BlogController.getAllBlogData);
router.delete('/delete-blog', BlogController.deleteBlogData);
router.put('/update-blog', BlogController.updateBlogData);

export const BlogRoutes = router;
