<!--
 * @Author: your name
 * @Date: 2020-10-12 14:48:57
 * @LastEditTime: 2020-10-12 15:05:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/Sequelize.md
-->
命令：
  sequelize db:migrate                        Run pending migrations
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file                                                          
  sequelize model:generate                    Generates a model and its migration                                                          
  sequelize seed:generate                     Generates a new seed file  