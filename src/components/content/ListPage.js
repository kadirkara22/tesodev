import React from 'react'
import logo from "../../img/logo.svg"
import ListPageResults from './ListPageResults'
const ListPage = () => {
    return (
        <div className="listPage">
            <div className="listPage-header">
                <img src={logo} alt="logo" />
                <input type="text"></input>
                <button className="listPage-header-btn">Search</button>
            </div>
            <ListPageResults />

        </div>
    )
}

export default ListPage
