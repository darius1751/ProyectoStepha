"use strict";
exports.__esModule = true;
var Employee_controller_1 = require("./controllers/Employee.controller");
var Index_controller_1 = require("./controllers/Index.controller");
var Pedidos_controller_1 = require("./controllers/Pedidos.controller");
var Product_controller_1 = require("./controllers/Product.controller");
var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
    }
    Server.prototype.config = function () {
        this.app.set('PORT', 4500 || process.env.PORT);
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use('/', new Index_controller_1["default"]().router);
        this.app.use('/empleado', new Employee_controller_1["default"]().router);
        this.app.use('/producto', new Product_controller_1["default"]().router);
        this.app.use('/pedidos', new Pedidos_controller_1["default"]().router);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('PORT'), function () {
            console.log('Hemos montado el servidor en el puerto:', _this.app.get('PORT'));
        });
    };
    return Server;
}());
new Server().start();
