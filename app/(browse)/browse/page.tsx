import Billboard from "@/components/Billboard/Billboard";
import TrendingMoviesSlider from "@/components/MoviesSliders/TrendingMoviesSlider"
import DiscoverMoviesSlider from "@/components/MoviesSliders/DiscoverMoviesSlider";

function BrowsePage() {

    return (
        <section >
            <Billboard media_type="all"/>
            <TrendingMoviesSlider/>
            <DiscoverMoviesSlider media_type="movie" genre_id={35}/>
            <DiscoverMoviesSlider media_type="movie" genre_id={28}/>
            <DiscoverMoviesSlider media_type="movie" genre_id={27}/>
        </section>
    )
}

export default BrowsePage;