import Head from 'next/head'
import Track from "../components/Track"
import {useState, useEffect} from "react"
import useSWR from "swr"



const fetcher = (...args) => {return fetch(...args).then(res => res.json())};

export default function Home() {

	useEffect(() => {
		document.querySelector("html").style.backgroundColor="black"
		document.title = "Dashboard"
	})


	function getTopTracks() {
		const {data, error} = useSWR("/api/top-tracks", fetcher);

		console.log(data)
	
		if (error) {return <div>failed to load</div>};
		if (!data) {return <div>loading...</div>};
	
	
		console.log(data)
	
		return (
		<>
			{data.tracks.map((track,index) => <Track number={index+1} title={track.title} image={track.image} songURL={track.songUrl} artist={track.artist} key={track.songUrl}/>)}
		</>)
	}
    
        
	return(
		<>
		<div className="text-white text-right pr-10">Sean's Dashboard</div>
			<div className="flex flex-col flex-wrap space-x-20 space-y-5 divide-y divide-blue-200">
				<div></div>
				{getTopTracks()}
			</div>
			
		</>
	)
}


