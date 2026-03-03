import { useParams } from "react-router"
import { useState, useEffect } from "react";


export default function DetailView() {
    const { id } = useParams();
    const [posts, setPosts] = useState();

    const getData = async () => {
        const promise = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const json = await promise.json();
        setPosts(json);
    }

    useEffect(
        () => {
            getData()
        }, []
    );

    return (
        <div className="detailPage">

            <h1>Pagina dettaglio</h1>
            <h2>Id: {id}</h2>
            {posts && <>
                <p>Title: {posts.title}</p>
                <p>Body: {posts.body}</p>
            </>}
        </div>
    )
}