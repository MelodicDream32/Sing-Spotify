const express = require('express');
const spotifyWebAPI = require('spotify-web-api-node'); 
const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new spotifyWebAPI({
        // Replace with hostname for redirectUri when moved into production build.
        redirectUri: "http://localhost:3000",
        // Move into ENV file outside of test. 
        clientId: '6bf8527d16f94abfbb18b6534a963ed8',
        clientSecret: '8f674c705c774d0ab62f7d814635feed' 
    })
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})