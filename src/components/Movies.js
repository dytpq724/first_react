import PropsTypes from "prop-types";
import {
    Link,
  } from "react-router-dom";

function Movies({id,coverImg,title,summary,genres}){
    return(
        <div>
            <img src={coverImg} alt={title}/>
            <h1><Link to ={`/movie/${id}`}>{title}</Link></h1>
            <p>{summary}</p>
            <ul>
                {genres.map((genres_item)=> (
                <li key={genres_item}>{genres_item}</li>
                ))}
            </ul>
        </div>
    )
}
Movies.PropsTypes ={
    id : PropsTypes.number.isRequired,
    coverImg : PropsTypes.string.isRequired,
    title : PropsTypes.string.isRequired,
    summary : PropsTypes.string.isRequired,
    genres : PropsTypes.arrayOf(PropsTypes.string).isRequired,

}

export default Movies;