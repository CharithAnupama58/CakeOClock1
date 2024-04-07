import {db} from '../server.js'

export const getItemDetails = async (req, res) => {
    try {
        const items = await new Promise((resolve, reject) => {
            db.query('SELECT s.*, i.* FROM Stock s JOIN Item i ON s.ItemId = i.ItemId WHERE s.ExpiryDate >= CURDATE() ORDER BY s.ExpiryDate ASC', (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
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

export const getItemIds = async (req, res) => {
    try {
        const options = await new Promise((resolve, reject) => {
            db.query('SELECT itemName FROM item', (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

        if (options.length > 0) {
            return res.status(200).json({ options });
        } else {
            return res.status(404).json({ error: 'No items found' });
        }
    } catch (error) {
        console.log('Error fetching items:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getItemNameDetails = async (req, res) => {
    const itemName = req.params.selectedOption;
    console.log(req.params.selectedOption);
    console.log(req.params);
    // console.log(itemName);
    try {
        // Query to retrieve all item details from the database
        const itemNameDetails = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM item WHERE itemName = ?', [itemName], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
        console.log(itemNameDetails)

        if (itemNameDetails.length > 0) {
            return res.status(200).json({ itemNameDetails });
        } else {
            return res.status(404).json({ error: 'No items found' });
        }
    } catch (error) {
        console.log('Error fetching items:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const saveStockDetails = async (req, res) => {
    const { ItemId, ExpiryDate } = req.body;
    let Quantity=parseInt(req.body.Quantity);
    console.log(req.body);
    

    if (!ItemId || !Quantity || !ExpiryDate) {
        return res.status(400).json({ error: 'ItemId, Quantity, and ExpiryDate are required' });
    }

    try {
        const existingRecord = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM Stock WHERE ItemId = ? AND ExpiryDate = ?', [ItemId, ExpiryDate], (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });

        if (!existingRecord || existingRecord.length === 0) {
            const insertResult = await new Promise((resolve, reject) => {
                db.query('INSERT INTO Stock (ItemId, Quantity, ExpiryDate) VALUES (?, ?, ?)', [ItemId, Quantity, ExpiryDate], (error, result) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(result);
                });
            });

            if (insertResult.affectedRows >= 1) {
                return res.status(200).json({ message: 'Stock details added successfully' });
            } else {
                return res.status(500).json({ error: 'Failed to add stock details' });
            }
        }else if (existingRecord.length > 0){
            let oldQty=existingRecord[0].Quantity;
            let newQty =Quantity + oldQty;
            Quantity=newQty;
            const updateResult = await new Promise((resolve, reject) => {
                db.query('UPDATE Stock SET Quantity = ? WHERE ItemId = ? AND ExpiryDate = ?', [Quantity, ItemId, ExpiryDate], (error, result) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(result);
                });
            });

            if (updateResult.affectedRows >= 1) {
                return res.status(200).json({ message: 'Stock details updated successfully' });
            } else {
                return res.status(500).json({ error: 'Failed to update stock details' });
            }

        }
        
    } catch (error) {
        console.log('Error saving stock details:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};



