import React, { Component } from 'react'

import Search from './components/Search'
import UserList from './components/UserList'

import githubAPI from './apis/github'

import './App.css'

export default class App extends Component {

    state = {
        users: []
    }

    onSearch = async (term) => {
        const response = await githubAPI.get("search/users", {
            params: {
                q: term,
            }
        })
        this.setState({
            users: response.data.items
        })
    }

    render() {
        return (
            <div className='app'>
                <Search onSearch={this.onSearch}/>
                <UserList users={this.state.users}/>
            </div>
        )
    }
}
