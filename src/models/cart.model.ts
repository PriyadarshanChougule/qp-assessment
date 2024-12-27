import { Model, DataTypes } from 'sequelize';
import sequelize from '../utils/database'; // Sequelize instance

class Cart extends Model {}

Cart.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // Name of the table referenced by the foreign key
      key: 'id',      // Name of the column in the referenced table
    },
    onUpdate: 'CASCADE', // Optional: Behavior when the parent table is updated
    onDelete: 'CASCADE', // Optional: Behavior when the parent table is deleted
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'products', // Name of the table referenced by the foreign key
      key: 'productId',  // Name of the column in the referenced table
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
}, {
  sequelize,
  modelName: 'Cart',
  tableName: 'cart', // Optional: custom table name
  timestamps: false, // Disable automatic timestamp fields
});

export default Cart;
