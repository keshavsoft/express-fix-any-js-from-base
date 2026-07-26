import express from 'express';

router.use('/v5', routerFromv5);

const router = express.Router();

export { router };