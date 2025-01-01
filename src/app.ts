import express from 'express';
import routes from './routes';
import morgan from 'morgan';
import fs from 'fs';
import 'express-async-errors';
import expressErrorMiddlewares from './middlewares/errorMiddlewares';
import sequelize from './utils/database';
import User from './models/user.model';
import Product from './models/product.model';
import Category from './models/category.model';
import Order from './models/order.model';
import OrderItems from './models/orderItems.model';
import Cart from './models/cart.model';

const app = express();
let logStream: fs.WriteStream = fs.createWriteStream('logs/access.log', { flags: 'a' });

if (process.env.NODE_ENV === 'production') {
    // In production, log to a file
    app.use(morgan('combined', { stream: logStream }));
} else {
    // In development, log to the terminal
    app.use(morgan('dev'));
}

app.use(routes);
app.use(express.json());
app.use(expressErrorMiddlewares);

const connectWithRetry = () => {
  sequelize.authenticate()
    .then(() => {
        console.log('Database connection established successfully');
        
        // Sync models with { alter: true } to prevent table deletion in production
        sequelize.sync({ alter: true })
          .then(() => {
            
          })
          .catch((error) => console.error("Error syncing database:", error));

        // Check if products already exist and insert only if necessary
       
    })
    .catch((error) => {
      console.error('Error connecting to the database:', error);
      setTimeout(connectWithRetry, 5000);  
    });
};

connectWithRetry();

app.listen(3000, () => {
    console.log(`Listening on port ${3000}`);
});
