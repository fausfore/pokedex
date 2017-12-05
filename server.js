const express = require('express');
const app = express();
const axios = require('axios');
const pokemon = require('pokemon');
const pokemonApiUrl = 'http://pokeapi.co/api/v2';
const bodyParser = require('body-parser');
const cors = require('cors');

// Cors Options
const whitelist = ['http://localhost:8080'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};

// Saves pokemons teams
app.locals.DREAM_TEAM = [];

// Selected pokemon 
app.locals.SELECTED = {}



app.use(bodyParser.json({limit: '50mb'})); // support json encoded bodies
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // support encoded bodies


// Retourne la liste des noms de pokémon
app.options('/pokemon/list', cors(corsOptions),function(req, res){
  res.status(200).send();
});

app.get('/pokemon/list', cors(corsOptions), function(req, res){
  return res.send(pokemon.all('en'))
});

// TEAM Routes
app.options('/team', cors(corsOptions),function(req, res){
  res.status(200).send();
});

app.post('/team', cors(corsOptions),function(req, res){
  //app.locals.DREAM_TEAM = TeamReducer.OwnTeam(app.locals.DREAM_TEAM,req.body);
  return res.send(app.locals.DREAM_TEAM);
});

// Pokémon infos
app.get('/pokemon/:name', cors(corsOptions), function (req, res) {
  let name = req.params.name;
  return axios.get(`${pokemonApiUrl}/pokemon/${name}`)
    .then(function(response){
      response = setResponse(response.data);
      return res.send(response);
    })
    .catch(function(err){
      return err;
    })
});

function setResponse(response) {
  // logic here
  let payload = {
    id: response.id,
    name: response.name,
    stats: response.stats,
    types: response.types,
    height: response.height,
    weight: response.weight,
    sprites: response.sprites
  }
  return payload;
};

// Liste avec images
app.get('/pokemon/:limit/:offset',cors(corsOptions), function(req, res){
  let limit = req.params.limit;
  let offset = req.params.offset;
    
  axios.get(`${pokemonApiUrl}/pokemon/?limit=${limit}&offset=${offset}`)
    .then(function(response){
      return res.send({
        total_pokemons: response.data.count,
        pagination: Math.ceil(response.data.count / limit),
        results: response.data.results.map(function(pokemon){
          let id = pokemon.url.split('/')[6]
          pokemon.id = id
          pokemon.sprites = {
            back_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          }
          return pokemon
        })
      })      
    })
});

app.listen(3000, function () {
  ('Example app listening on port 3000!')
});

