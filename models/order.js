'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    sn: DataTypes.INTEGER,
    shipping_status: DataTypes.STRING,
    payment_status: DataTypes.STRING
  }, {});
  order.associate = function(models) {
    Order.belongsToMany(models.Product, {
      as:"items",
      through: {
        model:models.OrderItem, unique:true
      },
      foreignKey: "OrderId"
    })
    Order.belongsTo(models.User)
    Order.hasMany(models.Payment)
  };
  return order;
};