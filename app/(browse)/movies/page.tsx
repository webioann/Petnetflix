import Billboard from "@/components/Billboard/Billboard";
import MoviesSlider_Trending from "@/components/MoviesSliders/MoviesSlider_Trending"
import MoviesSlider_Discover from "@/components/MoviesSliders/MoviesSlider_Discover";

function MoviesPage() {

    return (
        <section style={{paddingBottom: '30px'}}>
            <Billboard media_type="movie"/>
            <MoviesSlider_Trending media_type='movie'/>
            <MoviesSlider_Discover media_type="movie" genre_id={14}/>
            <MoviesSlider_Discover media_type="movie" genre_id={10749}/>
            <MoviesSlider_Discover media_type="movie" genre_id={53}/>
        </section>
    )
}

export default MoviesPage;