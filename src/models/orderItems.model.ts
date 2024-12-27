import { Model, DataTypes } from 'sequelize';
import sequelize from '../utils/database'; // Sequelize instance

class OrderItems extends Model {}

OrderItems.init({
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'orders', // Name of the referenced table
      key: 'orderId', // Column in the referenced table
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'products', // Name of the referenced table
      key: 'productId', // Column in the referenced table
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  priceOrderedAt: {
    type: DataTypes.DOUBLE,
    allowNull: false, // Price of the product at the time of order
  },
  totalPrice: {
    type: DataTypes.DOUBLE,
    allowNull: false, // Calculated as quantity * priceOrderedAt
  },
}, {
  sequelize,
  modelName: 'OrderItems',
  tableName: 'order_items', // Explicit table name
  timestamps: false, // Disable automatic `createdAt` and `updatedAt` fields
});

export default OrderItems;
