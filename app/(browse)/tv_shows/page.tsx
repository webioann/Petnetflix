import Billboard from "@/components/Billboard/Billboard";
import MoviesSlider_Trending from "@/components/MoviesSliders/MoviesSlider_Trending"
import MoviesSlider_Discover from "@/components/MoviesSliders/MoviesSlider_Discover";

function TVShowsPage() {

    return (
        <div>
        <section style={{paddingBottom: '30px'}}>
            <Billboard media_type="tv"/>
            <MoviesSlider_Trending media_type='tv'/>
            <MoviesSlider_Discover media_type="tv" genre_id={10762}/>
            <MoviesSlider_Discover media_type="tv" genre_id={10765}/>
            <MoviesSlider_Discover media_type="tv" genre_id={99}/>
        </section>
        </div>
    )
}

export default TVShowsPage;