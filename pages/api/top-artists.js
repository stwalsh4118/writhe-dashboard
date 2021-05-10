import { getTopArtists } from '../../js/spotify'

export default async(_, res) => {
    const response = await getTopArtists()
    const { items } = await response.json()

    const artists = items.slice(0, 100).map((track) => ({
        track
    }))

    return res.status(200).json({ artists })
};