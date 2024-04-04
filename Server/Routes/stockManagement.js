import express from 'express';
import { getItemDetails } from '../Controller/stockManagementController.js';

const router = express.Router();

router.get('/itemDetails', async (req, res) => {
    await getItemDetails(req, res);
});


export default router;
