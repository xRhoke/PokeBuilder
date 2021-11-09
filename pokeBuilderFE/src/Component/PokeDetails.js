import "./PokeDetails.css"
import {useEffect, useState} from "react";
import {CgPokemon} from "react-icons/cg"
import axios from "axios";
import RadarChart from "./RadarChart";

const PokeDetails = ({currentPokemon, setCurrentPokemon}) => {

    // const [moves, setMoves] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const [stats, setStats] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log(stats)
    }, [stats]);

    const fetchData = () => {
        // axios.get("http://localhost:8080/pokemon/" + currentPokemon.id + "/moves")
        //     .then(response => setMoves(response.data));

        axios.get("http://localhost:8080/pokemon/" + currentPokemon.id + "/abilities")
            .then(response => setAbilities(response.data));

        axios.get("http://localhost:8080/pokemon/" + currentPokemon.id + "/stats")
            .then(response => setStats(response.data));
    }

    const typeList = currentPokemon.types.map(typeSlot => {
        return <div key={`${currentPokemon.id}_${typeSlot.slot}`}
                    className={"type " + typeSlot.type.name}>{typeSlot.type.name}</div>
    });

    const abilityList = abilities.map(abilitySlot => {
        return <div key={`${currentPokemon.id}_${abilitySlot.slot}`}
                    className={"abilityName"}
        >
            {abilitySlot.ability.name}
        </div>
    });

    const chartData = {
        labels: ["HP", "Atk", "Def", "SpA", "SpD", "Speed"],
        datasets: [
            {
                data: stats.map(statSlot => statSlot.base_stat),
                fill: true,
                backgroundColor: "#79C99E",
                borderColor: "black",
            }
        ],
    }

    return (
        <div className={"PokeDetails"}>
            <button className={"detailsCloseButton"} onClick={() => setCurrentPokemon({})}>X</button>
            <div className={"detailRow1"}>
                <div className={"imageWithType"}>
                    <img className={"pokemonDetailsImage"} src={currentPokemon.image} alt={currentPokemon.name}/>
                    <div className={"detailsTypeList"}>{typeList}</div>
                </div>
                <div className={"pokemonData"}>
                    <div className={"pokemonName"}>
                        <div className={"pokemonNumber"}>
                            <CgPokemon/>
                            {currentPokemon.id}
                        </div>
                        {currentPokemon.name[0].toUpperCase() + currentPokemon.name.slice(1)}
                    </div>
                    <div className={"heightWeight"}>
                        <div className={"pokeHeight"}>Height: {currentPokemon.height / 10} m</div>
                        <div className={"pokeWeight"}>Weight: {currentPokemon.weight / 10} kg</div>
                    </div>
                    <div className={"abilities"}>
                        <div>Abilities:</div>
                        {abilityList}
                    </div>
                    <div className={"pokemonStats"}>
                        <div className={"statChart"}>
                            <RadarChart chartData={chartData}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokeDetails;