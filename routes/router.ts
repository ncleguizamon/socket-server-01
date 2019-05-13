import { Router , Request , Response} from 'express';


  const router = Router();


router.get('/mensages', ( req: Request, res: Response)=>{
    res.json({
        ok: true,
        mesaje: 'Todo esta Bien !!'
    })
});
export default router;