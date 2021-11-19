const router = require('express').Router();
const axios = require('axios');
const { response } = require('express');

function invoiceCreate(object) 
{
  object.customer_id=object.company_id||object.person_id;//problem
  object.document_date=object.date;
  object.coldstorage_due_date=object.deadline;
  object.items={};
  object.items.item=[{cost_price_net:object.receivable_sum}];

  //delivery,order,charged,uncharged
  //status paid->charged
  //status unpaid->uncharged
  //id
}

router.route('/').post((req, res) => {
  invoiceCreate(req.body);
  res.send("Creating Invoice");
});

router.route('/').get((req, res) => {
  axios.post('http://localhost:5000/invoiceCreate').then(res.send(response));
});

module.exports = router;