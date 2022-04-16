import express from "express";

const router=express.Router()
import { admin, protect,kordinator } from "../middleware/authMiddleware.js";
import { createPrijave,DeletePrijave,getPrijave, getPrijaveById,createOcena, getPrijavePoKampu, getPrijavePoKorisniku, getPrijavezaKamp } from "../controllers/prijavecontrole.js";



router.route('/').post(protect,createPrijave).get(protect,getPrijave)

router.route('/zaKamp/:id').get(protect,getPrijavePoKampu)
router.route('/poKorisniku/:kampovId').get(protect,getPrijavePoKorisniku)
router.route('/kampovi/:id').get(getPrijavezaKamp)
router.route('/:id').get(protect,getPrijaveById).delete(protect,kordinator,DeletePrijave)

router.route('/:id/ocene').post(protect,kordinator,createOcena)



export default router