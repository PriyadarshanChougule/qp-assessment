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
            Product.count().then(count => {
                if (count === 0) {
                    // Only create product if the table is empty
                    Product.create({
                        productName: 'Sample Product',
                        productDescription: 'This is a sample product description.',
                        price: 29.99,
                        category_id: 1,  // Assuming you have a category with ID 1
                        brand: 'SampleBrand',
                        weight: 1.5,  // 1.5 kg
                        stock_quantity: 100,
                        image_url: 'https://example.com/image.jpg',
                        expiration_date: new Date('2025-12-31'),  // Example expiration date
                        is_active: true,
                        discount_price: 19.99,
                        special_offer: '10% off on first purchase',
                        unit_of_measure: 'kg',
                    })
                    .then(() => console.log('Sample product created'))
                    .catch(err => console.error('Error creating sample product:', err));

                    Order.create({
                        userId: 1, // Example user ID
                        orderDate: new Date(),
                        status: 'Pending',
                        amount: 100.0,
                        paymentStatus: 'Not Paid',
                        paymentMode: 'Credit Card',
                        address: '123 Example St, Example City',
                        deliveryDate: new Date('2025-01-01'),
                        discount: 10.0,
                        couponCode: 'NEWYEAR10',
                        taxAmount: 5.0,
                      }).then(() => console.log('Sample order created'))
                      .catch(err => console.error('Error creating sample order:', err));
  
                    
                }
            });
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
