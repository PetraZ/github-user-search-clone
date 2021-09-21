import React, { Component } from 'react'
import './index.css'

export default class User extends Component {
    render() {
        const {user} = this.props
        return (
            <div className='user' id={user.id}>
                <a href={user.html_url}>
                    <img src={user.avatar_url} alt={user.login}></img>
                    <div>{user.login}</div>
                </a>
            </div>
        )
    }
}
