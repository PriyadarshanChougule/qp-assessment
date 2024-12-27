import { Model, DataTypes } from 'sequelize';
import sequelize from '../utils/database'; // Sequelize instance

class Category extends Model {}

Category.init({
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Category',
  tableName: 'categories', // Optional: specify table name explicitly
  timestamps: false, // Disable automatic `createdAt` and `updatedAt` fields
});

export default Category;
