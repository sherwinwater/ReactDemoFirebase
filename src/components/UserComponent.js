import Axios from 'axios';
import React from 'react';
import axios from 'axios';

class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            books:[]
        }
    }


    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        const USERS_REST_API_URL = 'https://api.itbook.store/1.0/search/mongodb';
        const USERS_REST_API_URL2 = 'https://sherwinebook.herokuapp.com/api/users';

        // const USERS_REST_API_URL = 'http://localhost:8080/api/users';
        // fetch(USERS_REST_API_URL)
        fetch(proxyurl+USERS_REST_API_URL2)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    users: data,
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

        // axios.get(USERS_REST_API_URL)
        // fetch(USERS_REST_API_URL, {mode:'cors'})
        fetch(proxyurl+USERS_REST_API_URL)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    books: data.books
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
                <h1 className="text-center">Users List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>User ID</td>
                            <td>User First Name</td>
                            <td>User Last Name</td>
                            <td>User Email</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Book Titles</td>
                            <td>Book Url</td>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.books.map(
                                book =>
                                <tr key={book.title}>
                                    <td>{book.title}</td>
                                    <td>{book.url}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        )
    }

}
export default UserComponent