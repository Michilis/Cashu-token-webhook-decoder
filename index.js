const express = require('express');
const bodyParser = require('body-parser');
const { getDecodedToken } = require('@cashu/cashu-ts');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/check-token', async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ error: 'Token is required' });
    }

    try {
        const decodedToken = getDecodedToken(token);
        const mintUrl = decodedToken.token[0].mint;
        const proofs = decodedToken.token[0].proofs;
        const amountSats = proofs.reduce((total, proof) => total + proof.amount, 0);

        const mint = new CashuMint(mintUrl);
        const keys = await mint.getKeys();
        const wallet = new CashuWallet(mint, keys);

        const spentProofs = await wallet.checkProofsSpent(proofs);
        const spent = spentProofs.length === proofs.length;

        const mintInfo = await mint.getInfo();

        res.json({
            spent,
            mintName: mintInfo.name,
            amountSats,
            mintUrl
        });
    } catch (error) {
        console.error('Error checking token:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
