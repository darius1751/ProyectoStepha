"use strict";
exports.__esModule = true;
var express_1 = require("express");
var Index_router_1 = require("../routers/Index.router");
var IndexController = /** @class */ (function () {
    function IndexController() {
        this.router = express_1.Router();
        this.configRouters();
    }
    IndexController.prototype.configRouters = function () {
        var indexRouter = new Index_router_1["default"]();
        this.router.get('/', indexRouter.index);
    };
    return IndexController;
}());
exports["default"] = IndexController;
