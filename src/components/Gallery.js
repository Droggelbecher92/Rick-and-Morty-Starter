import Card from "./Card";
import "./Gallery.css"
import {useEffect, useState} from "react";
import {getCharacters} from "../services/apiService";

export default function Gallery(props){
        const [chars ,setChars] = useState()

        useEffect( () => {
                setupChars().catch(e => console.log(e.message))
        },[])

        const setupChars = () => getCharacters().then(data => setChars(data.results))

        if (!chars){
                return <div className="gallery">
                        <h1>loading...</h1>
                </div>
        }

    return(
        <div className="gallery">
                {chars.map( char => (
                    <Card
                        key = {char.id}
                        pic = {char.image}
                        name = {char.name}
                        species = {char.species}
                        status = {char.status}
                        origin = {char.location.name}
                    />
                ))}
        </div>
    )
}