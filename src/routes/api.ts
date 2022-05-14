import { Router } from 'express'
import authRouter from './auth.router'

// Export the base-router
const apiRouter = Router()

// Setup routers
apiRouter.use('/', authRouter)

// Export default.
export default apiRouter
