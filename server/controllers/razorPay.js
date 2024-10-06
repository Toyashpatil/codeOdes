
const Razorpay = require('razorpay');

const razorpayInstance = new Razorpay({
  key_id: 'rzp_test_xee3l2g0TEEHZM',
  key_secret: 'o2zZQwaJn9oeQmG2WoD5mrjs',
});

exports.createOrder = (req, res) => {
  const { amount } = req.body;

  const options = {
    amount,  
    currency: "INR",
    receipt: "order_rcptid_11"
  };

  razorpayInstance.orders.create(options, (err, order) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating Razorpay order' });
    }
    res.status(200).json(order);
  });
};

// Controller for handling success
exports.paymentSuccess = (req, res) => {
  const trancid = req.body.trancid;
  res.json({ redirectTo: `http://localhost:3000/success/?trancid=${trancid}` });
};
