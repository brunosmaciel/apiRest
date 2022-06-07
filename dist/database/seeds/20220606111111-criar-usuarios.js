"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Carlos',
        email: 'carlos@gmail.com',
        password_hash: await bcryptjs.hash('carlos2001@', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        nome: 'Carlos1',
        email: 'carlos1@gmail.com',
        password_hash: await bcryptjs.hash('carlos2001@', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        nome: 'Carlos2',
        email: 'carlos2@gmail.com',
        password_hash: await bcryptjs.hash('carlos2001@', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  // eslint-disable-next-line no-empty-function
  async down() {

  },
};
