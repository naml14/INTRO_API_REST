module.exports = {
    getApi:(req, res) => {
        res.status(200);
        res.send({mensaje:'hola mundo'});
    },
    getSuma:(req, res) => {
        let resultado = parseInt(req.query.num1)+parseInt(req.query.num2);
        if (req.query.num1===undefined || req.query.num2===undefined) {
            res.status(404);
            res.send({'ERROR':'no se encontraron números'});
        }
        res.status(200);
        res.send({resultado:resultado});
    },
    getUsuario:(req, res)=>{
        res.status(200);
        res.send({usuario:req.params.nombre});
    },
    getSwapi:(req, res)=>{
        const url="https://swapi.dev/api/people/"+req.params.id;
        fetch(url).then(response => response.json()).then(data =>{
            res.status(200);
            res.send({personaje:data});
        });
    },
    putBody:(req, res)=>{
        const body = req.body;
        if(!('nombre' in body)){
            res.status(404);
            res.send({
                mensaje: 'La información no contiene el nombre.'
            });
        }
        if(!('ocupacion' in body)){
            res.status(404);
            res.send({
                mensaje: 'La información no contiene el ocupacion.'
            });
        }
        res.status(200);
        res.send(body);
    },
    postSuma:(req, res) => {
        const body = req.body;
        if(!('num1' in body)){
            res.status(404);
            res.send({
                mensaje: 'La información no contiene el num1.'
            });
        }
        if(!('num2' in body)){
            res.status(404);
            res.send({
                mensaje: 'La información no contiene el num2.'
            });
        }
        let resultado = body.num1 + body.num2;
        res.status(200);
        res.send({resultado:resultado});
    },
    deleteId:(req, res) => {
        if(parseInt(req.params.id)!=3){
            res.status(404);
            return res.send({mensaje: 'No se encontró el objeto con el ID especificado.'});
        }
        res.status(200);
        res.send({mensaje:'se ha eliminado el objeto con ID 3'});
    }
};