import Header from "../components/Header";
import Gallery from "../components/Gallery";

export default function MainPage(){
    return(<div className="mainPage">
            <Header name="Rick and Morty Gallery"/>
            <Gallery/>
        </div>
    )
}