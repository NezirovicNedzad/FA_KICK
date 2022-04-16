import express from "express";
import { getNovosti, getNovostiById ,deleteNovost, createNovosti} from "../controllers/novostcontrole.js";
import {admin,protect} from "../middleware/authMiddleware.js"
const router=express.Router()

//router.route('/').get(getNovosti)

router.route('/').get(getNovosti).post(protect,admin,createNovosti)

router.route('/:id').get(getNovostiById).delete(protect,admin,deleteNovost)

export default router