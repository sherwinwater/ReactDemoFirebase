import Axios from 'axios';
import React from 'react';
import axios from 'axios';
import FishCards from './FishCards';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            num:"",
            name1:"",
            name2:"",
            player1:"",
            player2:"",
            player3:"",
            player4:"",
            player1Name:"",
            player2Name:"",
            player3Name:"",
            player4Name:"",
            players:[]
        }
    }


    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        const USERS_REST_API_URL = 'http://localhost:8080/players/0';

        fetch(USERS_REST_API_URL)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    cards: data.hand.cards,
                    players: data
                })
            })
            .catch(function (error) {
                if (error.response) {
                  // Request made and server responded
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
            })

    }

    setPlayerNum = () => {
        const PLAYERNUM_REST_API_URL = 'http://localhost:8080/playernum/'+this.state.num;
        console.log(PLAYERNUM_REST_API_URL);
        fetch(PLAYERNUM_REST_API_URL)
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                this.setState({
                    num: data
                })
            })
    }
    setPlayer1Name = () => {
        const PLAYERNUM_REST_API_URL = 'http://localhost:8080/players/0/'+this.state.player1Name;
        console.log(PLAYERNUM_REST_API_URL);
        fetch(PLAYERNUM_REST_API_URL)
            .then(res => res.json())
            .then(data =>{
                this.setState({
                    player1:data
                })
                console.log(data);

            })
    }
    setPlayer2Name = () => {
        const PLAYERNUM_REST_API_URL = 'http://localhost:8080/players/1/'+this.state.player2Name;
        console.log(PLAYERNUM_REST_API_URL);
        fetch(PLAYERNUM_REST_API_URL)
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                this.setState({
                    player2:data
                })

            })
    }
    setPlayer3Name = () => {
        const PLAYERNUM_REST_API_URL = 'http://localhost:8080/players/2/'+this.state.player3Name;
        console.log(PLAYERNUM_REST_API_URL);
        fetch(PLAYERNUM_REST_API_URL)
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                this.setState({
                    player3:data
                })

            })
    }
    setPlayer4Name = () => {
        const PLAYERNUM_REST_API_URL = 'http://localhost:8080/players/3/'+this.state.player4Name;
        console.log(PLAYERNUM_REST_API_URL);
        fetch(PLAYERNUM_REST_API_URL)
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                this.setState({
                    player4:data
                })

            })
    }


    playerNumberChange = (e) =>{ 
        this.setState({num: e.target.value});
      }
    player1NameChange = (e) =>{ 
        this.setState({player1Name: e.target.value});
      }
    player2NameChange = (e) =>{ 
        this.setState({player2Name: e.target.value});
      }
    player3NameChange = (e) =>{ 
        this.setState({player3Name: e.target.value});
      }
    player4NameChange = (e) =>{ 
        this.setState({player4Name: e.target.value});
      }
    
    startGame =()=>{
        this.setState({
            players:[this.state.player1,this.state.player2,this.state.player3,this.state.player4]
        })

    }

    render() {
        return (
            <div>
                <h4 className="text-center">Go Fish</h4>
                Player Number<input type="text" value={this.state.num} onChange={this.playerNumberChange} class="mx-2"/>
                <button class="btn btn-outline-primary m-1" onClick={this.setPlayerNum} >set player number</button>
                <button class="btn btn-outline-primary m-1" onClick={this.startGame} >start Game</button><br/>

                Player 1 name<input type="text" value={this.state.player1Name} onChange={this.player1NameChange} class="m-1"/>
                <button class="btn btn-outline-primary m-1" onClick={this.setPlayer1Name} >set player1 name</button><br/>
                Player 2 name<input type="text" value={this.state.player2Name} onChange={this.player2NameChange} class="m-1"/>
                <button class="btn btn-outline-primary m-1" onClick={this.setPlayer2Name} >set player2 name</button><br/>
                Player 3 name<input type="text" value={this.state.player3Name} onChange={this.player3NameChange} class="m-1"/>
                <button class="btn btn-outline-primary m-1" onClick={this.setPlayer3Name} >set player3 name</button><br/>
                Player 4 name<input type="text" value={this.state.player4Name} onChange={this.player4NameChange} class="m-1"/>
                <button class="btn btn-outline-primary m-1" onClick={this.setPlayer4Name} >set player4 name</button><br/>

                <p>{this.state.num}</p>
                <FishCards cards = {this.state.cards}></FishCards>
                {/* <FishCards players = {this.state.player1}></FishCards> */}

            </div>
        )
    }

}
export default Card