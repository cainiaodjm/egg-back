/*
 * @Author: your name
 * @Date: 2020-10-12 15:15:33
 * @LastEditTime: 2020-10-12 16:06:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/database/migrations/20201012071533-init-album.js
 */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('tb_album', {
      userId: { type: INTEGER },
      album_name: STRING(128),
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async queryInterface => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('tb_album');
  },
};
