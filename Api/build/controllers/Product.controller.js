"use strict";
exports.__esModule = true;
var express_1 = require("express");
var Product_router_1 = require("../routers/Product.router");
var ProductController = /** @class */ (function () {
    function ProductController() {
        this.router = express_1.Router();
        this.productRouters = new Product_router_1["default"]();
        this.configRouter();
    }
    ProductController.prototype.configRouter = function () {
        this.router.get('/', this.productRouters.getProducts);
        this.router.put('/:id', this.productRouters.updateCant);
        this.router.get('/categoria/:id', this.productRouters.getProductsByCategory);
        this.router.get('/categoria', this.productRouters.getProductsByCategories);
        this.router.post('/vender', this.productRouters.postSalesProduct);
        this.router.post('/agregar', this.productRouters.postAddProducts);
    };
    return ProductController;
}());
exports["default"] = ProductController;
