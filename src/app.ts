import express from 'express'
import routes from './routes'
import morgan from 'morgan'
import fs from 'fs'
import 'express-async-errors'
import expressErrorMiddlewares from './middlewares/errorMiddlewares'
import sequelize from './utils/database'

const app = express()

let logStream: fs.WriteStream   = fs.createWriteStream('logs/access.log',{flags : 'a'})

if (process.env.NODE_ENV === 'production') {
    // In production, log to a file
    app.use(morgan('combined', { stream: logStream }));
} else {
    // In development, log to the terminal
    app.use(morgan('dev'));
}

app.use(routes)
app.use(express.json())
app.use(expressErrorMiddlewares)
sequelize.sync()
.then((res)=>{
    console.log(res);
    
}) 
app.listen(3000,()=>{
    console.log(`listening on port ${3000}`);
    
})


