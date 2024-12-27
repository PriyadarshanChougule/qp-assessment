import { Model, DataTypes } from 'sequelize';
import sequelize from '../utils/database'; // Sequelize instance

class Order extends Model {}

Order.init({
  orderId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // Name of the referenced table
      key: 'userId', // Column in the referenced table
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  orderDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Pending', // Default status
  },
  amount: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Unpaid', // Default payment status
  },
  paymentMode: {
    type: DataTypes.STRING,
    allowNull: true, // Optional
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deliveryDate: {
    type: DataTypes.DATE,
    allowNull: true, // Optional
  },
  discount: {
    type: DataTypes.DOUBLE,
    allowNull: true, // Optional
  },
  coupenCode: {
    type: DataTypes.STRING,
    allowNull: true, // Optional
  },
  taxAmount: {
    type: DataTypes.DOUBLE,
    allowNull: true, // Optional
  },
}, {
  sequelize,
  modelName: 'Order',
  tableName: 'orders', // Optional: specify table name explicitly
  timestamps: false, // Disable automatic `createdAt` and `updatedAt` fields
});

export default Order;
