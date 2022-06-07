"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);

const route = new (0, _express.Router)();

route.get('/', _AlunoController2.default.index);
route.post('/', _loginRequired2.default, _AlunoController2.default.store);
route.put('/:id', _loginRequired2.default, _AlunoController2.default.update);
route.get('/:id', _AlunoController2.default.show);
route.delete('/:id', _loginRequired2.default, _AlunoController2.default.delete);

exports. default = route;
