import Axios from 'axios';
import React from 'react';
import axios from 'axios';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: []
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

    render() {
        return (
            <div>
                <h1 className="text-center">Cards</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Suit</td>
                            <td>Value</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.cards.map(
                                (card,index) =>
                                <tr key={index}>
                                    <td>{card.suit}</td>
                                    <td>{card.value}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        )
    }

}
export default Card