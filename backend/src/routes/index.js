const UserRouter = require('./UserRouter')
const ActRouter = require('./ActRouter')
const ClassRouter = require('./ClassRouter')
const BlogRouter = require('./BlogRouter')
const LetterRouter = require('./LetterRouter')
const StudentRouter = require('./StudentRouter')
const FoodRouter = require('./FoodRouter')
const LCTRouter = require('./LCTRouter')


const routes = (app) => {
    app.use('/api/act', ActRouter)
    app.use('/api/user', UserRouter)
    app.use('/api/class', ClassRouter)
    app.use('/api/blog', BlogRouter)
    app.use('/api/letter', LetterRouter)
    app.use('/api/student', StudentRouter)
    app.use('/api/food', FoodRouter)
    app.use('/api/lct', LCTRouter)
}

module.exports = routes