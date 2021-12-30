import "./Card.css"

export default function Card(props){
    return(
        <div className="card">
            <h3>Ein Name</h3>
            <img src="#" alt="Ein Bild"/>
            <ul>
                <li>status</li>
                <li>origin</li>
                <li>species</li>
            </ul>
        </div>
    )
}