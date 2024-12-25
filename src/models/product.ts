import Sequelize from 'sequelize'
import sequelize from '../utils/database'

const product = sequelize.define('users', {
    userId : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull:false,
    },
    email : {
        type : Sequelize.STRING,
        unique : true,
        allowNull:false,
    },
    passWord : {
        type : Sequelize.STRING,
        allowNull : false
    }
})

export default product