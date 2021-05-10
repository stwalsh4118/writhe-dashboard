

export default function Track({artist, songURL, title}) {

    return(
        <div className="w-60 h-30 shadow-md bg-gray-200">{artist} {songURL} {title}</div>
    )

}


