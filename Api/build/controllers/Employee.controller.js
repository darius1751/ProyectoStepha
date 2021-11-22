"use strict";
exports.__esModule = true;
var express_1 = require("express");
var Employee_router_1 = require("../routers/Employee.router");
var EmployeeController = /** @class */ (function () {
    function EmployeeController() {
        this.router = express_1.Router();
        this.configRouter();
    }
    EmployeeController.prototype.configRouter = function () {
        var employeeRouter = new Employee_router_1["default"]();
        this.router.post('/login', employeeRouter.login);
    };
    return EmployeeController;
}());
exports["default"] = EmployeeController;
