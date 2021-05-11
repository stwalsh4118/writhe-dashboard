import { getTopArtists } from '../../js/spotify'

export default async(_, res) => {
    const response = await getTopArtists()
    const { items } = await response.json()
    console.log(items)
    const artists = items.slice(0, 100).map((track) => ({
        artist: track.name,
        genres: track.genres.join(', '),
        artistURL: track.external_urls.spotify,
        image: track.images[0].url
    }))

    return res.status(200).json({ artists })
};