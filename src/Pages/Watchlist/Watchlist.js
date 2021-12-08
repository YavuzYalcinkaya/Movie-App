import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
const Watchlist = () => {
    const [list, setList] = useState([])
    const loadData = () => {
        const list = localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [];
        setList(list)
    }
    useEffect(() => {
        loadData()
    }, [])

    return (
        <div>
            <div className="trending">
                {list && list.map((moovie) =>
                    <SingleContent
                        key={moovie.id}
                        id={moovie.id}
                        poster={moovie.poster_path}
                        title={moovie.title || moovie.name}
                        date={moovie.first_air_date || moovie.release_date}
                        media_type="movie"
                        vote_average={moovie.vote_average}
                        isInMoovieList={true}
                    />

                )
                }
            </div>
        </div>
    )
}

export default Watchlist;
