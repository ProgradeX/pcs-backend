var Db = require('./dboperations');
var Order = require('./orders');
const dboperations = require('./dboperations');

dboperations.getOrders().then(result => {
    console.log(result);
})
