import { Router } from 'express'

// Export the base-router
const baseRouter = Router()

// Setup routers
baseRouter.use('/test', () => console.log('TEST'))

// Export default.
export default baseRouter
