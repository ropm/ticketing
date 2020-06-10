import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import envHelper from '#root/helpers/envHelper';

const PORT = envHelper('PORT', 7100);

const app = express();

app.use(bodyParser.json());
app.use(
    cors({
        origin: (origin, cb) => cb(null, true),
        crendetials: true
    })
);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Tickets service running on port ${PORT}`);
});
