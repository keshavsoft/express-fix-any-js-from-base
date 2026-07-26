import express from 'express';

const router = express.Router();

router.use('/v3', routerFromv3);
router.use('/v4', routerFromv4);

export { router };