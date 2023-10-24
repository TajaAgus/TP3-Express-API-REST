class ModelMem {
    constructor() {
        this.libros = [
            { id: '1', titulo: '100 Años De Soledad', autor: 'Gabriel García Marquez', anio: 1967 },
            { id: '2', titulo: 'El Eternauta', autor: 'Héctor Germán Oesterheld', anio: 1957 },
            { id: '3', titulo: 'Drácula', autor: 'Bram Stoker', anio: 1897 },
        ]
    }

    getLibros = id => {    
        if(id) {
            const libro = this.libros.find( libro => libro.id === id )
            return libro || {}
        }
        else {
            return this.libros
        }
    }

    saveLibro = libro => {
        libro.id = String(parseInt(this.libros[this.libros.length - 1]?.id || 0) + 1)
        libro.anio = Number(libro.anio)
        this.libros.push(libro)
        return libro
    }

    updateLibro = (id, libro) => {
        libro.id = id

        const index = this.libros.findIndex( libro => libro.id === id )
        if(index != -1) {
            const libroAnt = this.libros[index]
            const libroNuevo = { ...libroAnt, ...libro }
            this.libros.splice(index,1,libroNuevo)
            return libroNuevo
        }
        else {
            this.libros.push(libro)
            return libro
        }
    }

    deleteLibro = id => {
        let libro = {}

        const index = this.libros.findIndex( libro => libro.id === id )
        if(index != -1) {
            libro = this.libros.splice(index,1)[0]
        }
        return libro    
    }
}

export default ModelMem