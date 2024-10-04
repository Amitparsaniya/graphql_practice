// 'use strict';
// const {
//   Model
// } = require('sequelize');
// const { Sequelize, sequelize } = require('.');
// module.exports = (sequelize, DataTypes) => {
//   class order extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   order.init({
//     product_name: DataTypes.STRING,
//     price: DataTypes.STRING,
//     quantity: DataTypes.NUMBER
//   }, {
//     sequelize,
//     modelName: 'order',
//   });
//   return order;
// };


module.exports = (sequelize,Sequelize) =>{
    return sequelize.define('orders',{
      uuid:{
        type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
      },
      user_id:{
        type:Sequelize.INTEGER
      },
      product_name:{
        type:Sequelize.STRING
      },
      price:{
        type:Sequelize.INTEGER
      },
      quantity:{
        type:Sequelize.INTEGER
      },
       created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
        default: null
      },created_by: {
        type: Sequelize.INTEGER,
      },
      updated_by: {
        type: Sequelize.INTEGER
      },
      deleted_by: {
        type: Sequelize.INTEGER,
      },
    },{
      timestamps:true,
      createdAt:"created_at",
      updatedAt:"updated_at"
    })
}