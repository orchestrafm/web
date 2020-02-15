import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import 'bulmaswatch/cyborg/bulmaswatch.min.css';

import TrackCard from ".././components/track-card"

function Tracks() {
    useEffect(() => {
        fetchRecentTracks();
    }, []);

    const [tracks, setTracks] = useState([]);

    const fetchRecentTracks = async () => {
        const req = await axios.get('http://localhost:1000/api/v0/track/recent', {limit: 2});

        const tracks = await req.data;
        setTracks(tracks);
    }

    return (
        <div>
        {
            tracks.map(track => (
                        <TrackCard
                        title={track.title}
                        artists={track.artists}
                        id={track.id}
                        />
        ))}
        </div>
    )

}

export default Tracks;
