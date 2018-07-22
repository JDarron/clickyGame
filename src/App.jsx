
/*
    APP.JSX CONTAINS THE APP COMPONENT THAT ALL THE OTHER GET RENDERED ON. 
*/

// DEPENDENCIES
import React, { Component } from "react";

// JUMBOTRON
import Jumbotron from "./components/Jumbotron";
// NAVBAR
import Navbar from "./components/Navbar";
// IMAGE
import Image from "./components/Image";

//  IMAGES
import Pic from "./Images.json";

// GAME RULE VARS
let guess = [];
let score = 0;
let highScore = 0;

const styles = {
    imageContent: {
        marginBottom: 125
    }
}; // END STYLES 

// APP COMPONENT
class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            correct: true
        };
    };

    // PLAYER GUESS
    playerGuess = (id) => {
        // LOG THE ID 
        console.log(id);
        // CHACK TO SEE IF IMG HAS BEEN CHOSEN YET
        if(guess.indexOf(id) > -1) {
            if (score > highScore) {
                highScore = score;
                score = 0;
                guess = [];
                this.setState({correct: true});
            } else {
                score = 0;
                guess = [];
                this.setState({correct: true});
            }
        } else {
            console.log("Good Guess!");
            guess.push(id);
            score++;
            this.setState({correct: false});
        };
    }; // END PLAYER GUESS


    // RENDRER
    render() {
        // RETRUN THIS HTML
        return (
            // THESE COMPONENTS STAY OUT OF THE CONTAINER
            <div>
                {/* JUMBOTRON */}
                <div className="row">
                    <Jumbotron />
                </div>
                {/* NAVBAR */}
                <div className="row">
                    <Navbar
                        score={score}
                        highScore={highScore}
                    />
                </div>
                <div className="container">
                    {/* IMAGE */}
                    <div className="row" style={styles.imageContent}>
                        <Image
                            onClick={this.playerGuess}
                            image={Pic}
                            />
                    </div>
                </div>
            </div>
        );  // END RETURN
    };  // END RENDER

};  // END APP COMPONENT

// EXPORT APP COMPONENT
export default App;
