const path = require('path');
const express = require('express');
const fs = require('fs');

const app = express();

// for the bev updator
// app.use(express.urlencoded({extended: false}));
// --ends here

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res) {
        const filePath = path.join(__dirname, 'data', 'beverages.json');
        const fileData = fs.readFileSync(filePath);
        const products = JSON.parse(fileData);
        res.render('index', {
                beverages: products,
                cashew: products,
                grains: products,
                cereals: products,
                car_services: products,
                building_products: products
        });
});

app.get('/beverages', function(req, res) {
        const filePath = path.join(__dirname, 'data', 'beverages.json');
        const fileData = fs.readFileSync(filePath);
        const products = JSON.parse(fileData);
        
        res.render('beverages', {
                beverages: products
        });
});

app.get('/building_products', function(req, res) {
        const filePath = path.join(__dirname, 'data', 'building_products.json');
        const fileData = fs.readFileSync(filePath);
        const products = JSON.parse(fileData);

        res.render('building_products', {
                building_products: products
        });
});

app.get('/car_services', function(req, res) {
        const filePath = path.join(__dirname, 'data', 'car_services.json');
        const fileData = fs.readFileSync(filePath);
        const products = JSON.parse(fileData);

        res.render('car_services', {
                car_services: products
        });
});

app.get('/cashew', function(req, res) {
        const filePath = path.join(__dirname, 'data', 'cashew.json');
        const fileData = fs.readFileSync(filePath);
        const products = JSON.parse(fileData);

        res.render('cashew', {
                cashew: products
        });
});

app.get('/cereals', function(req, res) {
        const filePath = path.join(__dirname, 'data', 'cereals.json');
        const fileData = fs.readFileSync(filePath);
        const products = JSON.parse(fileData);

        res.render('cereals',{
                cereals: products
        });
});

app.get('/grains', function(req, res) {
        const filePath = path.join(__dirname, 'data', 'grains.json');
        const fileData = fs.readFileSync(filePath);
        const products = JSON.parse(fileData);

        res.render('grains', {
                grains: products
        });
});

app.get('/shop', function(req, res) {
        
        res.render('shop');
});

app.get('/store', function(req, res) {
        res.render('store');
});


// beverages page products updator

// app.get('/bev_updator', function(req, res) {
//         res.send('<form action="/store_data" method="POST"><label>Product Name</label><input type="text" name="name"><button>Submit</button></form>')
// });

// app.post('/store_data', function(req, res) {
//         const bevName = req.body.name;

//         const filePath = path.join(__dirname, 'data', 'beverages.json');
//         const fileData = fs.readFileSync(filePath);
//         const ext = JSON.parse(fileData);
//         ext.push(bevName);
//         fs.writeFileSync(filePath, JSON.stringify(ext));
//         res.send('<h1>Name stored</h1>');
// });


app.listen(3000);