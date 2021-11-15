import {CgPokemon} from "react-icons/cg";
import {Link, Outlet} from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <div className={"landingPageContainer"}>
            <div className={"LandingPage"}>
                <div className={"landingPageTitleContentContainer"}>
                <div className={"landingPageTitle"}>
                    <CgPokemon/>
                    <div>PokéBuilder</div>
                </div>
                <div className={"landingPageContent"}>a tool for building and sharing Pokémon teams</div>
                </div>
                <div className={"imgRow"}>
                    <img className={"landingPageImage"}
                         src={"https://media.giphy.com/media/IGfnmF45dRRCKBLxoi/giphy.gif"}/>
                    <img className={"landingPageImage"}
                         src={"https://media.giphy.com/media/MOS0e7uuQiD2oB54PZ/giphy.gif"}/>
                    <img className={"landingPageImage"}
                         src={"https://media.giphy.com/media/B6PQgj1ZDPy9TDXw1f/giphy.gif"}/>
                </div>
                <Link className={"getStarted"} to={"/app/build"}>Get
                    Started</Link>
            </div>
        </div>
    );
}

export default LandingPage;