const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();

const app = express();


app.get('/' , (req,res)=>{
    res.send('<h1>Enter city name in the URL</h1>');
})

app.get('/:city' , async(req, res)=>{
    try {
        const page = await axios.get(process.env.ROOT_URL_BEG + req.params.city + process.env.ROOT_URL_END);
        const $ = cheerio.load(page.data);

        const City = req.params.city;
        const DateAndTime = $('.wtr_hdr_dte').text();
        const Temperature = $('strong').text() + $('.wtr_deg_wrp').text().toUpperCase();

        const elements = $('.wtr_hdr_rhs_val');
        const Temp_min = $(elements[0]).text() + "C";
        const Temp_max = $(elements[1]).text() + "C";
        const Sunrise = $(elements[2]).text();
        const Sunset = $(elements[3]).text();

        const info = $('.wtr_crd_ttl');
        const Humidity = $(info[0]).text();
        const Pressure = $(info[1]).text();
        const Longitude = $(info[2]).text();
        const Latitude = $(info[3]).text();

        const weatherData = {
            City,
            DateAndTime,
            Temperature,
            Temp_min,
            Temp_max,
            Sunrise,
            Sunset,
            Humidity,
            Pressure,
            Longitude,
            Latitude,
        }

        res.send(weatherData);
    } catch (error) {
        console.log(error);
    }
})

app.listen(3000 , ()=>{
    console.log('Server running on Port: 3000');

})