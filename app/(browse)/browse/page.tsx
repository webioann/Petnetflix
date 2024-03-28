import Billboard from "@/components/Billboard/Billboard";
import TrendingMoviesSlider from "@/components/MoviesSliders/TrendingMoviesSlider"
import DiscoverMoviesSlider from "@/components/MoviesSliders/DiscoverMoviesSlider";

function BrowsePage() {

    return (
        <section >
            <Billboard media_type="all"/>
            <TrendingMoviesSlider/>
            <DiscoverMoviesSlider/>
        </section>
    )
}

export default BrowsePage;