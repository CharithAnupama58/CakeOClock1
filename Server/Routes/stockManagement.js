import express from 'express';
import { getItemDetails,getItemIds,getItemNameDetails,saveStockDetails } from '../Controller/stockManagementController.js';

const router = express.Router();

router.get('/itemDetails', async (req, res) => {
    await getItemDetails(req, res);
});
router.get('/itemIds', async (req, res) => {
    await getItemIds(req, res);
});

router.get('/itemNameDetails/:selectedOption', async (req, res) => {
    await getItemNameDetails(req, res);
});
router.post('/addStock', async (req, res) => {
    await saveStockDetails(req, res);
});

export default router;
