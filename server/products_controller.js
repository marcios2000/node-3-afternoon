module.exports = {
    create: (req, res, next) => {
        const dbI = req.app.get("db")
        const {name, description, price, image_url} = req.body;
    
    
        dbI.create_product([ name, description, price, image_url])
        .then( () => res.sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMessage: "Something went wrong"})
            console.log(error)
        })
    },
    getOne: (req, res, next) => {
       const dbI = req.app.get("db")
       const { id } = req.params;
    
       dbI.read_product(id)
        .then( product => res.status(200).send(product))
        .catch(error => {
            res.status(500).send({errorMessage: "Something went wrong"})
            console.log(error)
        })
    },
    getAll: (req, res, next) => {
       const dbI = req.app.get("db")
    
       dbI.read_products()
        .then( products => res.status(200).send(products))
        .catch(error => {
            res.status(500).send({errorMessage: "Something went wrong"});
            console.log(error)
        })
    },
    update: (req, res, next) => {
       const dbI = req.app.get("db")
       const { params, query} = req;
    
       dbI.update_product([params.id, query.desc])
        .then( () => res.sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMessage: "Something went wrong"})
            console.log(error)
        })
    },
    
    delete: (req, res, next) => {
       const dbI = req.app.get("db")
       const { id } = req.params;
    
       dbI.delete_product(id)
        .then( () => res.sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMessage: "Something went wrong"})
            console.log(error)
        })
    }
    }
    
    