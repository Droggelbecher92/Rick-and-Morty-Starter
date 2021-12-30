import axios from "axios";

export const getCharacters = () =>
    axios
        .get("https://rickandmortyapi.com/api/character")
        .then(response => response.data)

