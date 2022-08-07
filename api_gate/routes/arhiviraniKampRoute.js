import express from "express";

const router=express.Router()

import { admin, protect } from "../middleware/authMiddleware.js";
import {createArhivirani, getArhivirani,getArhiviraniById,createNewReview} from "../controllers/arhiviranicontrole.js"


router.route('/').get(getArhivirani).post(protect,admin,createArhivirani)
router.route('/:id').get(getArhiviraniById)

router.route('/:id/reviews').post(protect,createNewReview)
export default router