var Db = require('./dboperations');
var Order = require('./orders');
const dboperations = require('./dboperations');

// requiring stuffs
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { response } = require('express');
var app = express();
var router = express.Router();

// configuring stuffs
app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

//creating middleware
router.use((requrest, response, next) => {
    console.log('middleware mmmm')
    next();
})

router.route('/orders').get((request, response) => {
    dboperations.getOrders().then(result => {
        //console.log(result);
        response.json(result[0]);
    })
})

router.route('/orders/:id').get((request, response) => {
    dboperations.getOrder(request.params.id).then(result => {
        console.log(typeof result);
        response.json(result[0]);
    })
})

router.route('/orders').post((request, response) => {

    let order = {...request.body}

    dboperations.addOrder(order).then(result => {
        response.status(201).json(result);
    })
})

router.route('/orders/delete/:id').post((request, response) => {
    dboperations.delOrder(request.params.id).then(result => {
        console.log('this working maybe?')
        response.json(result[1]);
    })
})


// listening on port
var  port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);


