import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

function Detail(){
    const {id} = useParams();
    const getmovies_d = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    };
    console.log(id);
    useEffect(()=>{
        getmovies_d();
    },[]);

    return <h1>Datail!</h1>
}
export default Detail;