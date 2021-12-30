import "./Card.css"

export default function Card(props){
    return(
        <div className="card">
            <h3>{props.name}</h3>
            <img src={props.pic} alt="Ein Bild"/>
            <ul>
                <li>{props.status}</li>
                <li>{props.origin}</li>
                <li>{props.species}</li>
            </ul>
        </div>
    )
}