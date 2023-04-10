import Movie from "../Movie/Movie";
function MovieList(props) {
    return (
        <>   
            {
                props.Movies.map(movie =>{
                    return (
                        <Movie movie={movie} commentHandler={props.commentHandler} />
                    )
                })
            }
        </>
    )}
    export default MovieList;