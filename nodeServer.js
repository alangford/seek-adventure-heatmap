/**
 * Created by beebe on 6/20/2017.
 */
`use strict`;
const express = require(`express`),
    app = express(),
    bodyParser = require(`body-parser`),
    cors = require(`cors`),
    corsOptions = {origin: 'http://localhost:3052'};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static( `public` ));
app.listen(3052,    ()=>console.log(`Initailizing the heatmap. go to localhost:3052 to display the heat map.`))