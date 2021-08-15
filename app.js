let app = require('express')();
const db = require('./database.js');
//const router = express.Router();


app.get('/',(request,response)=>{

    response.sendFile('index.html',{root:__dirname});
      
        });

 app.get('/api/movies',(request,response)=>{

    let results = db.query('SELECT * FROM movies LIMIT 20',(err, results) => {

        if(err){
            return reject(err);
        }
        response.send(results);
    });
 })

 app.get('/api/movies/:id',(request,response)=>{

        let result = db.query('SELECT * FROM movies WHERE id = '+request.params.id,(err, result) => {

            if(err){
                return reject(err);
            }
            response.send(result);
        });

 })

 app.get("/api/movies/:id/genres",(request,response)=>{

    let result = db.query('SELECT name FROM genres LEFT JOIN movies ON genres.id = movies.genre_id WHERE movies.id = '+request.params.id,(err, result) => {

        if(err){
            return reject(err);
        }
        response.send(result);
    });

 })

 app.get("/api/movies/:id/producers",(request,response)=>{

    let result = db.query('SELECT name FROM producers LEFT JOIN movies ON producers.id = movies.genre_id WHERE movies.id = '+request.params.id,(err, result) => {

        if(err){
            return reject(err);
        }
        response.send(result);
    });

 })


app.listen(8000)