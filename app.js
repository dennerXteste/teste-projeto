const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const path = require('path');
const { dirname } = require('path');
const port = process.env.PORT || 3000;
const data = new Date();
let dataAtual = `${data.getFullYear()}-${data.getMonth()+1}-${data.getDate()}`;
console.log(dataAtual);
 
app.use(cors());

app.use(express.static(path.join(__dirname)));
app.get('/api', async (req, res) => {

    const {data} = await axios({
        headers: { 'X-Auth-Token': '27081df1dd8e437fa867ef624b08662f'},
        url: `https://api.football-data.org/v2/matches?competitions=BSA&dateFrom=${dataAtual}&dateTo=${dataAtual}`
    });

        
        return res.json(data['matches']);
});
 
app.listen(port);