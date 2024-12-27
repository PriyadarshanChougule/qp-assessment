import { Model, DataTypes } from 'sequelize';
import sequelize from '../utils/database'; // Sequelize instance

class User extends Model {}

User.init({
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensures no duplicate emails
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users', // Optional: specify table name explicitly
  timestamps: false, // Disable automatic `createdAt` and `updatedAt` fields
});

export default User;
