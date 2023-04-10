import Movie from "../Movie/Movie";
function MovieList(props) {
    return (
        <>   
            {
                props.Movies.map(movie =>{
                    return (
                        <Movie movie={movie} />
                    )
                })
            }
        </>
    )}
    export default MovieList;