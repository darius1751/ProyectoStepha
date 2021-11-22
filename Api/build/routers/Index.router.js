"use strict";
exports.__esModule = true;
var IndexRouter = /** @class */ (function () {
    function IndexRouter() {
    }
    IndexRouter.prototype.index = function (req, res) {
        res.send({ message: 'Bienvenido a la pagina principal' });
    };
    return IndexRouter;
}());
exports["default"] = IndexRouter;
