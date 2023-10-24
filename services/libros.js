import ModelMem from '../model/DAO/librosMem.js'

class Service {
    constructor() {
        this.model = new ModelMem()
    }

    getLibros = id => {
        const libros = this.model.getLibros(id)
        return libros
    }

    saveLibro = libro => {
        const libroGuardado = this.model.saveLibro(libro)
        return libroGuardado
    }

    updateLibro = (id, libro) => {
        const libroActualizado = this.model.updateLibro(id,libro)
        return libroActualizado
    }

    deleteLibro = id => {
        const libroBorrado = this.model.deleteLibro(id)
        return libroBorrado
    }
}

export default Service