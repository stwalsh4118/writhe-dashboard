import Head from 'next/head'
import Track from "../components/Track"
import {useState, useEffect} from "react"
import useSWR from "swr"

export default function Home() {

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const {tracks, error} = useSWR('/api/top-artists', fetcher)

	console.log(tracks)

    if(error) return <div>failed to load</div>
    if(!tracks) return <div>loading...</div>

    return (
        <div>
            {}
        </div>
    )
}
