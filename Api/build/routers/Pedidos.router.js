"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Conexion_1 = require("../db/Conexion");
var PedidosRouter = /** @class */ (function () {
    function PedidosRouter() {
    }
    PedidosRouter.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, key, connection, pedidos, dataPedidos, _i, pedidos_1, pedido, id, table, date, note, personId, products, ex_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 9, , 10]);
                        _a = req.headers.key, key = _a === void 0 ? null : _a;
                        if (!(key === '12345')) return [3 /*break*/, 7];
                        return [4 /*yield*/, new Conexion_1["default"]().connection()];
                    case 1:
                        connection = _b.sent();
                        return [4 /*yield*/, connection.query("SELECT id,mesa AS 'table',persona_id AS personId,fecha AS date,nota AS note FROM pedido WHERE estado = 0")];
                    case 2:
                        pedidos = _b.sent();
                        dataPedidos = [];
                        _i = 0, pedidos_1 = pedidos;
                        _b.label = 3;
                    case 3:
                        if (!(_i < pedidos_1.length)) return [3 /*break*/, 6];
                        pedido = pedidos_1[_i];
                        id = pedido.id, table = pedido.table, date = pedido.date, note = pedido.note, personId = pedido.personId;
                        return [4 /*yield*/, connection.query("SELECT pxp.producto_id AS id,pd.nombre AS name,pxp.cantidad AS  cant FROM pedido AS p \n                    INNER JOIN producto_x_pedido AS pxp\n                    ON p.id = pxp.pedido_id\n                    INNER JOIN producto AS pd \n                    ON pd.id = pxp.producto_id\n                    WHERE pxp.pedido_id = ?", [id])];
                    case 4:
                        products = _b.sent();
                        dataPedidos.push({ id: id, table: table, date: date, note: note, person: { id: personId }, products: products });
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        connection.destroy();
                        res.status(200).send({ code: 200, message: 'Pedidos consultados con exito', dataPedidos: dataPedidos });
                        return [3 /*break*/, 8];
                    case 7:
                        res.status(511).send({ error: 511, message: 'Necesitas autentificacion para acceder a la informacion, verifica la propiedad key' });
                        _b.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        ex_1 = _b.sent();
                        res.status(500).send({ code: 500, message: 'Error en la consulta', exception: ex_1 });
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    PedidosRouter.prototype.postOrder = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, key, _b, _c, personId, _d, table, _e, products, _f, note, con, result, _i, products_1, value, pedidoId, id, cant, ex_2;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _g.trys.push([0, 10, , 11]);
                        _a = req.headers.key, key = _a === void 0 ? null : _a;
                        if (!(key === '12345')) return [3 /*break*/, 9];
                        _b = req.body, _c = _b.personId, personId = _c === void 0 ? null : _c, _d = _b.table, table = _d === void 0 ? null : _d, _e = _b.products, products = _e === void 0 ? [] : _e, _f = _b.note, note = _f === void 0 ? null : _f;
                        if (!(personId !== null || table !== null)) return [3 /*break*/, 8];
                        if (!(products.length > 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, new Conexion_1["default"]().connection()];
                    case 1:
                        con = _g.sent();
                        return [4 /*yield*/, con.query('INSERT INTO pedido(mesa,persona_id,nota) VALUES(?,?,?)', [table, personId, note])];
                    case 2:
                        result = _g.sent();
                        _i = 0, products_1 = products;
                        _g.label = 3;
                    case 3:
                        if (!(_i < products_1.length)) return [3 /*break*/, 6];
                        value = products_1[_i];
                        pedidoId = result.insertId;
                        id = value.id, cant = value.cant;
                        return [4 /*yield*/, con.query('INSERT INTO producto_x_pedido(pedido_id,producto_id,cantidad) VALUES(?,?,?)', [pedidoId, id, cant])];
                    case 4:
                        _g.sent();
                        _g.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        con.destroy();
                        res.send({ code: 200, message: 'Insercion de pedidos realizada con exito' });
                        _g.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        res.status(511).send({ error: 511, message: 'Necesitas autentificacion para acceder a la informacion, verifica la propiedad key' });
                        _g.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        ex_2 = _g.sent();
                        res.status(500).send({ code: 500, message: 'Error en la consulta', exception: ex_2 });
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    return PedidosRouter;
}());
exports["default"] = PedidosRouter;
