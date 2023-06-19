import './Jumbotron.css';
import PlanetAnimation from '../planetAnimation/PlanetAnimation';
import { Button } from 'primereact/button';

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <div className="jumbotron-text">
                <h1>Welcome to our Crypto Real Estate Crowdfunding website!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam error a labore ut minima vero deserunt, reprehenderit, veritatis quas voluptates perferendis fugiat consequuntur beatae facilis ratione provident odit magni. Unde itaque iure sed vero ipsam omnis nisi. Sapiente, laudantium!</p>
                <Button label="Join Now!" className="p-button" />
            </div>
            <div className="jumbotron-animation">
                <PlanetAnimation />
            </div>
        </div>
    );
}

export default Jumbotron;