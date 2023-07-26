const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const customerrouter = require('./routes/customerRoutes');
const fishrouter = require('./routes/fishRoutes');
const purchaserouter = require('./routes/purchaseRoutes');
const fishcutrouter = require('./routes/fishcutRoutes');
const packetrouter = require('./routes/packetRoutes');
const ratelistrouter = require('./routes/ratelistRoutes');
const orderstatusrouter = require('./routes/orderstatusRoutes');
const paymentstatusrouter = require('./routes/paymentstatusRoutes');
const orderrouter = require('./routes/orderRoutes');
const rateListFishStockrouter = require('./routes/ratelistfishstockRoutes');
const orderitemrouter = require('./routes/orderitemRoutes');
const paymentmethodrouter = require('./routes/paymentmethodRoutes');
const paymentRouter = require('./routes/paymentRoutes');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api',customerrouter);
app.use('/api',fishrouter);
app.use('/api',purchaserouter);
app.use('/api',fishcutrouter);
app.use('/api',packetrouter);
app.use('/api',ratelistrouter);
app.use('/api',orderstatusrouter);
app.use('/api',paymentstatusrouter);
app.use('/api',orderrouter);
app.use('/api',rateListFishStockrouter);
app.use('/api',orderitemrouter);
app.use('/api',paymentmethodrouter);
app.use('/api',paymentRouter);

const port = process.env.PORT || 1700;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
