/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();
const app = express();
const getRawBody = require('raw-body');

router.post('/webhooks/fulfillments/create', async (req, res) => {
  console.log('🎉 We got a fulfillment create!');
  const hmac = req.get('X-Shopify-Hmac-Sha256');
  const body = await getRawBody(req);
  return res.status(200);
});

router.post('/webhooks/fulfillments/update', async (req, res) => {
  console.log('🎉 We got a fulfillment update!');
  const hmac = req.get('X-Shopify-Hmac-Sha256');
  const body = await getRawBody(req);
  return res.status(200);
});

router.post('/webhooks/fulfillment_events/create', async (req, res) => {
  console.log('🎉 We got fulfillment event create!');
  const hmac = req.get('X-Shopify-Hmac-Sha256');
  const body = await getRawBody(req);
  return res.status(200);
});

router.post('/webhooks/fulfillment_events/update', async (req, res) => {
  console.log('🎉 We got fulfillment event update!');
  const hmac = req.get('X-Shopify-Hmac-Sha256');
  const body = await getRawBody(req);
  return res.status(200);
});

module.exports = router;
