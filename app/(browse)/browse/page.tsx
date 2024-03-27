import Billboard from "@/components/Billboard/Billboard";
import TrendingMoviesSlider from "@/components/TrendingMoviesSlider/TrendingMoviesSlider";

function BrowsePage() {

    return (
        <section >
            <Billboard media_type="all"/>
            <TrendingMoviesSlider/>
        </section>
    )
}

export default BrowsePage;