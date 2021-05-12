
export default function Track({number, artist, songURL, title, image}) {

    return(
                <div className="flex flex-row space-y-2">
                    <span className="text-white p">{number}</span>
                    <img className="w-40 h-40" src={image}></img>
                    <div className="flex flex-col space-y-2 pl-5">
                        <a href={songURL} target="_blank" className="text-3xl hover:text-green-400 text-white">{title}</a>
                        <h2 className="text-[#B2B2B2]">By: {artist}</h2>  
                    </div>
                        
                </div>
    )

}


