import {db} from '../server.js'

export const getItemDetails = async (req, res) => {
    try {
        // Query to retrieve all item details from the database
        const items = await new Promise((resolve, reject) => {
            db.query('SELECT s.*, i.* FROM Stock s JOIN Item i ON s.ItemId = i.ItemId WHERE s.ExpiryDate >= CURDATE() ORDER BY s.ExpiryDate ASC', (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

        // Check if any items were found
        if (items.length > 0) {
            return res.status(200).json({ items });
        } else {
            return res.status(404).json({ error: 'No items found' });
        }
    } catch (error) {
        console.log('Error fetching items:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
