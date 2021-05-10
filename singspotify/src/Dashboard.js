import React from 'react'
import useAuth from './useAuth'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
  clientId: "8b945ef10ea24755b83ac50cede405a0",
})

export default function Dashboard({code}) {
    const accessToken = useAuth(code);
    return (
        <div>
            Dashboard is viewable and you've successfully authenticated! <br/>
             Code: {code}
        </div>
    )
}
