import express from 'express';

const router = express.Router();

router.use('/v3', routerFromv3);

export { router };