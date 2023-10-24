import express from 'express'
import Controller from '../controller/libros.js'


class Router {
    constructor() {
        this.router = express.Router()
        this.controller = new Controller()
    }

    start() {
        this.router.get('/:id?', this.controller.getLibros)
        this.router.post('/', this.controller.saveLibro)
        this.router.put('/:id', this.controller.updateLibro)
        this.router.delete('/:id', this.controller.deleteLibro)
        return this.router
    }
}

export default Router
