import React, { Component } from 'react'

import User from '../User'
import './index.css'

export default class UserList extends Component {
    render() {
        const {users} = this.props
        console.log(users)
        return (
            <div className='userlist'>
                {
                    users.map((user) => {
                        return (
                            <User user={user}/>
                            )
                        }
                    )
                }
            </div>
        )
    }
}
