import {Router} from 'express'
import { addGroceryItem, getSingleGroceryItem, getAllGroceryItems,removeGroceryItem, updateGroceryItem } from './controllers/grocery'
import { getQuantityOfAvailableItem, updateQuantityOfAvailableItem } from './controllers/inventory'
import { cancelOrder, placeOrder } from './controllers/order'
import { addToCart, removeFromCart } from './controllers/cart'


const router = Router()

router.post('/addGroceryItem', addGroceryItem)
router.get('/grocery/:productId', getSingleGroceryItem)
router.get('/grocery', getAllGroceryItems)
router.delete('/removeGroceryItem/:productId', removeGroceryItem)
router.patch('/updateGroceryItem/:productId', updateGroceryItem)

router.get('/getInventory/:productId', getQuantityOfAvailableItem)
router.put('/updateInventory/:productId', updateQuantityOfAvailableItem)

router.post('/addToCart/:productId',addToCart)
router.delete('/deleteFromCart/:productId',removeFromCart)

router.post('/placeOrder/:userId',placeOrder)
router.delete('/cancelOrder/:orderId',cancelOrder)

export default router
