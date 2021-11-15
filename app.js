const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const path = require('path');
const { dirname } = require('path');
const port = process.env.PORT || 3000;
const date = new Date();
let dateCurrent = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
let dateWeek = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+7}`;
 
app.use(cors());

app.use(express.static(path.join(__dirname)));
app.get('/api', async (req, res) => {
     console.log(res);
    const {data} = await axios({
        headers: { 'X-Auth-Token': '27081df1dd8e437fa867ef624b0866'},
        url: `https://api.football-data.org/v2/matches?competitions=BSA&dateFrom=${dateCurrent}&dateTo=${dateWeek}`
    });
        console.log(data);
        console.log(data['matches']);
        
        return res.json(data['matches']);
});
 
app.listen(port);

//https://api.football-data.org/v2/matches?competitions=BSA&dateFrom=${dataAtual}&dateTo=${dataAtual}
