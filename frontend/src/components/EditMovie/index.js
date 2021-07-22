import {useState,useEffect} from 'react'
import {  useSelector,useDispatch } from "react-redux";
import { fetchMovies } from "../../store/movie";
import {useHistory,useParams} from 'react-router-dom'
import { editMovie } from "../../store/movie";

function EditMovie(){
    const {id} = useParams();
    const dispatch = useDispatch()
    const history = useHistory()

    const movie = useSelector((state)=> state.movieState.movies[0])

    const [title,setTitle] = useState(movie.title)
    const [description,setDescription] = useState(movie.description)
    const [director,setDirector] = useState(movie.director)
    const [date,setDate] = useState(movie.releaseDate)
    const [genre,setGenre] = useState(movie.genre)
    const [imageUrl,setImageUrl] = useState(movie.imageUrl)
    const [length,setLength] = useState(movie.length)


        
    const user = useSelector((state) => state.session.user);
    function handleSubmit(e){
        e.preventDefault()
        const form= {
            userId: user.id,
            title,
            description,
            director,
            releaseDate: date,
            genre,
            imageUrl,
            length
        }
        dispatch(editMovie(form,id))
        history.push(`/movies`)
    }

    return(

        <form onSubmit={handleSubmit}>
            <label for='title'>Movie Title</label>
            <input type='text' name='title' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
            <label for='date'>Release Date</label>
            <input type='number' name='date' value={date} onChange={(e)=>setDate(e.target.value)} required/>
            <label for='description'>Description</label>
            <textarea type='text' name='description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <label for='director'>Directors Name</label>
            <input type='text' name='director' value={director} onChange={(e)=>setDirector(e.target.value)}/>
            <label for='genre'>Genre</label>
            <input type='text' name='genre' value={genre} onChange={(e)=>setGenre(e.target.value)}/>
            <label for='image'>Movie Cover</label>
            <input type='text' name='image' value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}/>
            <label for='length'>Movie Length</label>
            <input type='number' name='length' value={length} onChange={(e)=>setLength(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>

    )
}

export default EditMovie;