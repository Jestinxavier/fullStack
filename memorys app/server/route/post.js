import express from 'express'
import {getPost,createPost,updatepost} from '../controllers/post.js'
const router = express.Router();

router.get('/',getPost)
router.post('/',createPost)
router.patch('/:id',updatepost)

// router.get('/',getPost)
export default router;