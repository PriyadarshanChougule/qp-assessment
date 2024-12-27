import { Model, DataTypes } from 'sequelize';
import sequelize from '../utils/database'; // Sequelize instance

class Product extends Model {}

Product.init({
  productId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productDescription: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true, // Assuming it may be nullable; update if needed
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  weight: {
    type: DataTypes.STRING, // Use STRING for weight as it might include units (e.g., "1 kg")
    allowNull: true,
  },
  stock_quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  expiration_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  discount_price: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  special_offer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  unit_of_measure: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Product',
  tableName: 'products', // Optional: custom table name
  timestamps: false, // Set to true if you use Sequelize's built-in timestamp fields
});

export default Product;
