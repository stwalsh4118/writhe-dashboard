
export default function Artist({number, name, artistURL, image, genres}) {

    return(
                <div className="flex flex-row space-y-2">
                    <span className="text-white p">{number}</span>
                    <img className="w-40 h-40" src={image}></img>
                    <div className="flex flex-col space-y-2 pl-5">
                        <a href={artistURL} target="_blank" className="text-3xl text-white">{name}</a>
                        <h2 className="text-[#B2B2B2]">Genres: {genres}</h2>  
                    </div>
                        
                </div>
    )

}

