import express from "express";

const router=express.Router()

import { admin, protect } from "../middleware/authMiddleware.js";
import {getKampovi,getKampById,deleteCamps, updateCamp, createCamp} from "../controllers/kampcontrole.js"


router.route('/').get(getKampovi).post(protect,admin,createCamp)
router.route('/:id').get(getKampById).delete(protect,admin,deleteCamps).put(protect,admin,updateCamp)


export default router