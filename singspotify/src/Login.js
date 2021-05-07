import React from 'react'

import { Container } from 'react-bootstrap';

// Spotify Authorization link //
/*  Client ID = 6bf8527d16f94abfbb18b6534a963ed8
    response_type =  code (required)
    Redirect_uri = http://localhost:3000. Change after hosting.
    Scope = { 
        streaming,
        user read email, 
        user read private, 
        user library read,
        user library modify,
        user read playbak state,
        user modify playbak state
    }
*/

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=6bf8527d16f94abfbb18b6534a963ed8&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

export default function Login() {
    return <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        {/* Login Button for Spotify */}
        <a className="btn btn-success btn-lg" href={AUTH_URL} >
            Login with Spotify
        </a>
    </Container>
}
