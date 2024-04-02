import Billboard from "@/components/Billboard/Billboard";
import MoviesSlider_Trending from "@/components/MoviesSliders/MoviesSlider_Trending"
import MoviesSlider_Discover from "@/components/MoviesSliders/MoviesSlider_Discover";

function BrowsePage() {

    return (
        <section style={{paddingBottom: '30px'}}>
            <Billboard media_type="all"/>
            <MoviesSlider_Trending/>
            <MoviesSlider_Discover media_type="tv" genre_id={35}/>
            {/* <MoviesSlider_Discover media_type="movie" genre_id={28}/>
            <MoviesSlider_Discover media_type="movie" genre_id={27}/> */}
        </section>
    )
}

export default BrowsePage;