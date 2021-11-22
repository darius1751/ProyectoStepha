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
var EmployeeRouter = /** @class */ (function () {
    function EmployeeRouter() {
    }
    EmployeeRouter.prototype.login = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, _a, user, password, _b, key, result, _c, id, name_1, identification, phone, direction, commission, salary, personId, cargoId, positionName, employee;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, new Conexion_1["default"]().connection()];
                    case 1:
                        connection = _d.sent();
                        _a = req.body, user = _a.user, password = _a.password;
                        _b = req.query.key, key = _b === void 0 ? null : _b;
                        if (!(key === '12345')) return [3 /*break*/, 3];
                        return [4 /*yield*/, connection.query("SELECT emp.id,p.nombre AS 'name',p.cedula AS 'identification',p.direccion AS 'direction',p.telefono AS 'phone',emp.sueldo AS 'salary', \n                p.id AS 'personId',emp.comision AS 'commision',\n                c.id AS 'cargoId',\n                c.nombre AS 'positionName'\n                FROM usuario AS us\n                INNER JOIN empleado AS emp \n                ON us.id = emp.usuario_id\n                INNER JOIN persona AS p \n                ON p.id = emp.persona_id\n                INNER JOIN cargo AS c\n                ON emp.cargo_id = c.id\n                WHERE usuario = ? AND contrasenia = ?", [user, password])];
                    case 2:
                        result = _d.sent();
                        if (result[0]) {
                            _c = result[0], id = _c.id, name_1 = _c.name, identification = _c.identification, phone = _c.phone, direction = _c.direction, commission = _c.commission, salary = _c.salary, personId = _c.personId, cargoId = _c.cargoId, positionName = _c.positionName;
                            employee = {
                                id: id, commission: commission, salary: salary, person: { id: personId, direction: direction, name: name_1, phone: phone, identification: identification },
                                position: { id: cargoId, name: positionName }
                            };
                            res.status(200).send(employee);
                        }
                        else {
                            res.status(403).send({ id: null, message: 'No se encontro el empleado' });
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        res.status(403).send({ error: '401', message: 'No puedes pasar sin la key' });
                        _d.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return EmployeeRouter;
}());
exports["default"] = EmployeeRouter;
