import React, { Component } from 'react'
import './index.css'

export default class Search extends Component {

    state = {
        term: ''
    }

    onInputChange = (e) => {
        this.setState({term: e.target.value})
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSearch(this.state.term)
    }

    render() {
        return (
            <div className='search'>
                <h2>Search Github Users</h2>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type='text'
                        placeholder='Please type github user name!'
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}
