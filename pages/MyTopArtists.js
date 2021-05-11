import Head from 'next/head'
import Artist from "../components/Artist"
import {useState, useEffect} from "react"
import useSWR from "swr"




const fetcher = (...args) => {return fetch(...args).then(res => res.json())};

export default function MyTopArtists() {

	useEffect(() => {
		document.querySelector("html").style.backgroundColor="black"
	})


	function getTopArtists() {
		const {data, error} = useSWR("/api/top-artists", fetcher);

		console.log(data)
	
		if (error) {return <div>failed to load</div>};
		if (!data) {return <div>loading...</div>};
	
	
		console.log(data)
	
		return (
            <>
                {data.artists.map((artist,index) => <Artist number={index+1} genres={artist.genres} name={artist.artist} artistURL={artist.artistURL} image={artist.image} key={index}/>)}
            </>
		)
	}
    
        
	return(
		<>
		<div className="text-white text-right pr-10">Sean's Dashboard</div>
			<div className="flex flex-col flex-wrap space-x-20 space-y-5 divide-y divide-blue-200">
				<div></div>
				{getTopArtists()}
			</div>
			
		</>
	)
}


