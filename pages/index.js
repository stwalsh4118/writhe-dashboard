import Head from 'next/head'
import Track from "../components/Track"
import {useState, useEffect} from "react"
import useSWR from "swr"

const fetcher = (...args) => {return fetch(...args).then(res => res.json())};

export default function Home() {

    const {data, error} = useSWR("/api/top-tracks", fetcher);

	console.log(data)

    if (error) {return <div>failed to load</div>};
    if (!data) {return <div>loading...</div>};


	console.log(data)

    return (<>
	{data.tracks.map(track => <Track title={track.title} songURL={track.songUrl} artist={track.artist} key={track.songUrl}/>)}
	</>
        

    )
}
