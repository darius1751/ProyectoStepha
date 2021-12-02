"use strict";
exports.__esModule = true;
var express_1 = require("express");
var Pedidos_router_1 = require("../routers/Pedidos.router");
var PedidosController = /** @class */ (function () {
    function PedidosController() {
        this.router = express_1.Router();
        this.config();
    }
    PedidosController.prototype.config = function () {
        this.router.get('/', new Pedidos_router_1["default"]().getAll);
        this.router.post('/pedir', new Pedidos_router_1["default"]().postOrder);
    };
    return PedidosController;
}());
exports["default"] = PedidosController;
