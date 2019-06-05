import { Router , Request , Response} from 'express';


  const router = Router();


router.get('/mensages', ( req: Request, res: Response)=>{
    res.json({
        ok: true,
        mesaje: 'Todo esta Bien !!'
    })
});

router.post('/mensages', ( req: Request, res: Response)=>{
   
    const cuerpo = req.body.cuerpo;
    const de      = req.body.de;
   
    res.json({
        ok: true,
        cuerpo,
        de
    })
});

router.post('/mensages/:id', ( req: Request, res: Response)=>{
   
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id     = req.params.id;
   
    res.json({
        ok: true,
        cuerpo,
        de,
        id
    })
});

export default router;