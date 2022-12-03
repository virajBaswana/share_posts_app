import express from 'express';

import { getPosts, getPostsBySearch, getPostsByCreator, getPost, createPost, updatePost, likePost, commentPost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/api/creator', getPostsByCreator);
router.get('/api/search', getPostsBySearch);
router.get('/api', getPosts);
router.get('/api/:id', getPost);

router.post('/api', auth,  createPost);
router.patch('/api/:id', auth, updatePost);
router.delete('/api/:id', auth, deletePost);
router.patch('/api/:id/likePost', auth, likePost);
router.post('/api/:id/commentPost', commentPost);

export default router;