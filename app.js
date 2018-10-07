const express = require('express');
const request = require('request-promise-native');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = 8080;
 

app.use(cors());
app.listen(port, function () {
    console.log("listening to http://localhost:" + port)
});

app.use(express.static('public'));

app.get('/api/viewPR/:activity', getViewPRLocations)

async function getViewPRLocations(req, res) {
    let options = {};
    options.param = {
        "activity": req.params['activity']
    }
    options.url = "https://viewpr.azure-api.net/api/venue?" + getJsonToSerializedString(options.param);

    options.headers = {
        "Ocp-Apim-Subscription-Key": process.env.OCP_APIM_SUBSCRIPTION_KEY
    }

    let locationView = await request(options);

    let locations = [];
    for (location of JSON.parse(locationView)) {
        if (location.hasOwnProperty('tripadvisor')) {
            let link = location.tripadvisor;
            let tempLink = link.substring(link.indexOf("-d") + 2);
            let id = tempLink.substring(0, tempLink.indexOf("-"));

            let params = {
                url: "http://api.tripadvisor.com/api/partner/2.0/location/" + id + "/reviews?lang=en_US&key=" + process.env.TRIPADVISOR_KEY
            };

            let tripadvisor_reviews = await request(params);
            location.tripadvisor_reviews = JSON.parse(tripadvisor_reviews);
            locations.push(location);
        }
    }

    res.send(locations);
}

app.get('/api/tripadvisor/:latitude/:longitude/', getTripAdvisorReviews);

function getTripAdvisorReviews(req, res) {
    let options = {};
    options.url = "http://api.tripadvisor.com/api/partner/2.0/map/" + req.params['latitude'] + "," + req.params['longitude'] + "?key=" + process.env.TRIPADVISOR_KEY;

    request(options, (err, response, body) => {
        if (err) {
            console.log('ERROR:', err);
            return;
        }
        res.send(JSON.parse(body));
    })

}

function getJsonToSerializedString(obj) {
    return Object.keys(obj).map(key => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
    }).join('&');
}