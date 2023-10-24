import Service from '../services/libros.js'


class Controller {
    constructor() {
        this.service = new Service()
    }

    getLibros = (req,res) => {
        const { id } = req.params
        const libros = this.service.getLibros(id)
        res.json(libros)
    }

    saveLibro = (req,res) => {
        const libro = req.body
        const libroGuardado = this.service.saveLibro(libro)
        res.json(libroGuardado)
    }

    updateLibro = (req,res) => {
        const { id } = req.params
        const libro = req.body
        const libroActualizado = this.service.updateLibro(id, libro)
        res.json(libroActualizado)
    }

    deleteLibro = (req,res) => {
        const { id } = req.params
        const libroBorrado = this.service.deleteLibro(id)
        res.json(libroBorrado)
    }
}

export default Controller
