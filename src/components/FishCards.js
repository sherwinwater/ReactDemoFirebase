import Axios from 'axios';
import React from 'react';
import axios from 'axios';

function FishCards(props){
    return (
        <table class="table table-striped">
                    <thead>
                        <tr>
                            <td>Player1</td>
                            <td>Player2</td>
                            <td>Player3</td>
                            <td>Player4</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            <tr>
                            props.map(
                                (card,index)=>
                                <td key={index}>{card.value}</td>
                            )
                            </tr>

                        }
                    </tbody>
                </table>
    )

}


export default FishCards;