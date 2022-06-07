"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            nome: 'first name must have a minimum lenght of 3 and max lenght of 255',
          },
        },
      },
      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            nome: 'last name must have a minimum lenght of 3 and max lenght of 255',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'email already used',
        },
        validate: {
          isEmail: {
            nome: 'invalid email',
          },
        },
      },
      idade: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            nome: 'age must be an integer',
          },
        },
      },
      peso: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            nome: 'weight must be a number',
          },
        },
      },
      altura: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            nome: 'height must be a number',
          },
        },
      },

    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
} exports.default = Aluno;
