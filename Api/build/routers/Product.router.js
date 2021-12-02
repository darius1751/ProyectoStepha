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
var Product_helper_1 = require("../helpers/Product.helper");
var ProductRouter = /** @class */ (function () {
    function ProductRouter() {
    }
    ProductRouter.prototype.getProducts = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var conextion, result, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Conexion_1["default"]().connection()];
                    case 1:
                        conextion = _a.sent();
                        return [4 /*yield*/, conextion.query("SELECT p.id,p.nombre AS 'name',foto AS 'photo',precio_unitario AS 'priceUnit',cantidad AS 'cant',categoria_id AS'categoryId',\n        c.nombre AS 'categoryName'\n        FROM producto AS p\n        INNER JOIN categoria AS c\n        ON p.categoria_id = c.id\n        ")];
                    case 2:
                        result = _a.sent();
                        data = [];
                        result.forEach(function (value) {
                            var id = value.id, name = value.name, photo = value.photo, priceUnit = value.priceUnit, cant = value.cant, categoryId = value.categoryId, categoryName = value.categoryName;
                            data.push({ id: id, cant: cant, category: { id: categoryId, name: categoryName }, photo: photo, name: name, priceUnit: priceUnit });
                        });
                        conextion.destroy();
                        res.send(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductRouter.prototype.updateCant = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, cant, id, conexion, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = req.body.cant, cant = _a === void 0 ? 0 : _a;
                        id = req.params.id;
                        return [4 /*yield*/, new Conexion_1["default"]().connection()];
                    case 1:
                        conexion = _d.sent();
                        conexion.destroy();
                        _c = (_b = res).send;
                        return [4 /*yield*/, conexion.query('UPDATE producto SET cantidad=? WHERE id = ?', [cant, id])];
                    case 2:
                        _c.apply(_b, [_d.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductRouter.prototype.getProductsByCategory = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, key, conextion, id, result, data_1, index_1, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.headers.key, key = _a === void 0 ? null : _a;
                        if (!(key === '12345')) return [3 /*break*/, 6];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, new Conexion_1["default"]().connection()];
                    case 2:
                        conextion = _b.sent();
                        id = req.params.id;
                        return [4 /*yield*/, conextion.query("SELECT p.id,p.nombre AS 'name',foto AS 'photo',precio_unitario AS 'priceUnit',cantidad AS 'cant',categoria_id AS'categoryId',\n                c.nombre AS 'categoryName'\n                FROM producto AS p\n                INNER JOIN categoria AS c\n                ON p.categoria_id = c.id\n                WHERE c.id = ?", [id])];
                    case 3:
                        result = _b.sent();
                        data_1 = [];
                        index_1 = 0;
                        result.forEach(function (value) {
                            var id = value.id, name = value.name, photo = value.photo, priceUnit = value.priceUnit, cant = value.cant, categoryId = value.categoryId, categoryName = value.categoryName;
                            data_1.push({ id: id, cant: cant, category: { id: categoryId, name: categoryName }, photo: photo, name: name, priceUnit: priceUnit, index: index_1 });
                            index_1++;
                        });
                        res.status(200).send(data_1);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _b.sent();
                        res.status(500).send({ error: 500, message: 'Se a producido un error', exception: e_1 });
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        res.status(511).send({ error: 511, message: 'Necesitas autentificacion para acceder a la informacion, verifica la propiedad key' });
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ProductRouter.prototype.getProductsByCategories = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var key, connection, categories, result, _i, categories_1, category, data, index, _a, data_2, d, id, name_1, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        key = req.headers.key;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 10, , 11]);
                        if (!(key === '12345')) return [3 /*break*/, 8];
                        return [4 /*yield*/, new Conexion_1["default"]().connection()];
                    case 2:
                        connection = _b.sent();
                        return [4 /*yield*/, connection.query('SELECT id,nombre FROM categoria ORDER BY id ASC')];
                    case 3:
                        categories = _b.sent();
                        result = [];
                        _i = 0, categories_1 = categories;
                        _b.label = 4;
                    case 4:
                        if (!(_i < categories_1.length)) return [3 /*break*/, 7];
                        category = categories_1[_i];
                        return [4 /*yield*/, connection.query("SELECT p.id,p.nombre AS 'name',foto AS 'photo',precio_unitario AS 'priceUnit',cantidad AS 'cant',categoria_id AS'categoryId',\n                    c.nombre AS 'categoryName'\n                    FROM producto AS p\n                    INNER JOIN categoria AS c\n                    ON p.categoria_id = c.id\n                    WHERE c.id = ?", [category.id])];
                    case 5:
                        data = _b.sent();
                        index = 0;
                        for (_a = 0, data_2 = data; _a < data_2.length; _a++) {
                            d = data_2[_a];
                            id = d.categoryId, name_1 = d.categoryName;
                            delete d.categoryId;
                            delete d.categoryName;
                            d.category = { id: id, name: name_1 };
                            d.index = index;
                            index++;
                        }
                        result.push(data);
                        _b.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 4];
                    case 7:
                        res.status(200).send(result);
                        return [3 /*break*/, 9];
                    case 8:
                        res.status(511).send({ error: 511, message: 'Necesitas autentificacion para acceder a la informacion, verifica la propiedad key' });
                        _b.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        e_2 = _b.sent();
                        res.status(500).send({ error: 500, message: 'Se a producido un error', exception: e_2 });
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    ProductRouter.prototype.postSalesProduct = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, key, conexion, _b, personData, sales, identification, priceToPay, _i, sales_1, value, cant, price, productId, iva, client, clientId, name_2, phone, direction, insert, client_1, id, _c, sales_2, value, cant, price, productId, e_3;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = req.headers.key, key = _a === void 0 ? null : _a;
                        if (!(key === '12345')) return [3 /*break*/, 19];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 17, , 18]);
                        return [4 /*yield*/, new Conexion_1["default"]().connection()];
                    case 2:
                        conexion = _d.sent();
                        _b = req.body, personData = _b.person, sales = _b.sales;
                        identification = personData.identification;
                        priceToPay = 0;
                        _i = 0, sales_1 = sales;
                        _d.label = 3;
                    case 3:
                        if (!(_i < sales_1.length)) return [3 /*break*/, 6];
                        value = sales_1[_i];
                        cant = value.cant, price = value.price, productId = value.productId;
                        priceToPay += cant * price;
                        return [4 /*yield*/, new Product_helper_1["default"]().updateCantData(productId, cant)];
                    case 4:
                        _d.sent();
                        _d.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        iva = 0;
                        priceToPay += iva = (priceToPay * 0.16);
                        return [4 /*yield*/, conexion.query('SELECT id FROM persona WHERE cedula = ?', [identification])];
                    case 7:
                        client = (_d.sent())[0];
                        clientId = client ? client.id : 0;
                        if (!!clientId) return [3 /*break*/, 10];
                        name_2 = personData.name, phone = personData.phone, direction = personData.direction;
                        return [4 /*yield*/, conexion.query('INSERT INTO persona(cedula,nombre,telefono,direccion) VALUES(?,?,?,?)', [identification, name_2, phone, direction])];
                    case 8:
                        insert = _d.sent();
                        return [4 /*yield*/, conexion.query('INSERT INTO cliente(persona_id) VALUES(?)', [insert.insertId])];
                    case 9:
                        client_1 = _d.sent();
                        clientId = client_1.insertId;
                        _d.label = 10;
                    case 10: return [4 /*yield*/, conexion.query("INSERT INTO factura_venta(cliente_id,precio_a_pagar,fecha,iva) VALUES(?,?,?,?)", [clientId, priceToPay, new Date(), iva])];
                    case 11:
                        _d.sent();
                        return [4 /*yield*/, conexion.query("SELECT id FROM factura_venta ORDER BY id DESC LIMIT 1")];
                    case 12:
                        id = (_d.sent())[0].id;
                        _c = 0, sales_2 = sales;
                        _d.label = 13;
                    case 13:
                        if (!(_c < sales_2.length)) return [3 /*break*/, 16];
                        value = sales_2[_c];
                        cant = value.cant, price = value.price, productId = value.productId;
                        return [4 /*yield*/, conexion.query("INSERT INTO venta(factura_venta_id,precio,cantidad,producto_id) VALUES(?,?,?,?)", [id, price, cant, productId])];
                    case 14:
                        _d.sent();
                        _d.label = 15;
                    case 15:
                        _c++;
                        return [3 /*break*/, 13];
                    case 16:
                        conexion.destroy();
                        res.status(200).send({ identification: identification, sales: sales, priceToPay: priceToPay, iva: iva });
                        return [3 /*break*/, 18];
                    case 17:
                        e_3 = _d.sent();
                        res.status(500).send({ code: 500, message: 'Se a producido un error', exception: e_3 });
                        return [3 /*break*/, 18];
                    case 18: return [3 /*break*/, 20];
                    case 19:
                        res.status(511).send({ code: 511, message: 'Necesitas autentificacion para acceder a la informacion, verifica la propiedad key' });
                        _d.label = 20;
                    case 20: return [2 /*return*/];
                }
            });
        });
    };
    ProductRouter.prototype.postAddProducts = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, _b, photo, price_unit, cant, category, _c, key, con, e_4;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = req.body, name = _a.name, _b = _a.photo, photo = _b === void 0 ? null : _b, price_unit = _a.price_unit, cant = _a.cant, category = _a.category;
                        _c = req.headers.key, key = _c === void 0 ? null : _c;
                        if (!(key === '12345')) return [3 /*break*/, 6];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, new Conexion_1["default"]().connection()];
                    case 2:
                        con = _d.sent();
                        return [4 /*yield*/, con.query('INSERT INTO producto(nombre,foto,precio_unitario,cantidad,categoria_id) VALUES(?,?,?,?,?)', [name, photo, price_unit, cant, category])];
                    case 3:
                        _d.sent();
                        con.destroy();
                        res.status(200).send({ code: 200, message: 'Se a registrado correctamente el nuevo producto' });
                        return [3 /*break*/, 5];
                    case 4:
                        e_4 = _d.sent();
                        res.status(500).send({ code: 500, message: 'Se a producido un error', exception: e_4 });
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        res.status(511).send({ code: 511, message: 'Necesitas autentificacion para acceder a la informacion, verifica la propiedad key' });
                        _d.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return ProductRouter;
}());
exports["default"] = ProductRouter;
