import { getTopTracks } from '../../js/spotify'

export default async(_, res) => {
    const response = await getTopTracks()
    const { items } = await response.json()
    console.log(items)
    const tracks = items.slice(0, 50).map((track) => ({
        artist: track.artists.map((_artist) => _artist.name).join(', '),
        songUrl: track.external_urls.spotify,
        title: track.name,
        image: track.album.images[0].url
    }))

    return res.status(200).json({ tracks })
};