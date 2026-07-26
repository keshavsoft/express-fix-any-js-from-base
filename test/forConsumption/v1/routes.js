import express from 'express';

const router = express.Router();

router.use('/v4', routerFromv4);
router.use('/v5', routerFromv5);

export { router };