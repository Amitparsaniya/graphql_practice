// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     email: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };





module.exports= (sequelize,Sequelize) =>{
  return sequelize.define("users",{
    uuid:{
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    email:{
      type: Sequelize.STRING
    },
    password:{
      type: Sequelize.STRING
    },
    deleted_at:{
      type: Sequelize.DATE,
      allowNull: true,
      default: null
    },
    created_by: {
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