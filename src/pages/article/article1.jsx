import { useEffect, useState } from "react";
import "./style.css"
import { Link } from "react-router-dom";

export default function Article1 () {

    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);
    const [img, setImg] = useState(null);

    useEffect(() => {
        (async function fetchPost() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');
            const data = await response.json();
            setTitle(data[0].title);
            setBody(data[0].body);
        } )()
    }, [])

    useEffect(() => {
        (async function fetchPhoto() {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
            const data = await response.json();
            setImg(data[0].url);
        } )()
    }, [])
    
    return(
        <div className="articleContainer">
            <div className="homeContainer">
            <Link to="/">Início</Link>
            </div>
            {title && (
                <h1>{title}</h1>
            )}
            {body && (
                <p>{body}</p>
            )}
        </div>
    )
}