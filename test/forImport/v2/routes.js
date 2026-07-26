import express from 'express';

import { router as routerFromv2 } from './v2/routes.js';

const router = express.Router();

export { router };