//require express package
const express = require('express');
//save an express module as 'app'
const app = express();

app.get ('/', (req, res) => {
    res.send('Welcome to Pizza Express')
})
app.get ('/topping/:type', (req, res) => {
    res.send(`${req.params.type} pizza! Good choice.`)
})
app.get ('/order/:amount/:size', (req, res) => {
    res.send(`Your order for ${req.params.amount} ${req.params.size} pizzaswill be ready in 1 minute.`)
})
// assigning 3000 as our port
const PORT    =  process.env.PORT || 3000;

// tells the server to listen for requests on port 3000
app.listen(PORT, function(){
  console.log("==========================")
  console.log(`LISTENING ON PORT ${PORT}`);
  console.log("==========================")
});