import React, { useState } from 'react'
import logo from "../../img/logo.svg"
import ListPageResults from './ListPageResults'
import Pagination from './Pagination'
import MockUsersList from "../../mock-users.json"



const cols = MockUsersList.cols;
const data = MockUsersList.data.map((item) =>
    item.reduce((store, currentValue, index) => {
        store[cols[index]] = currentValue;
        return store;
    }, {})
);


const ListPage = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [userPerPage] = useState(6)

    const [searchUserName, setSearchUserName] = useState("")
    return (
        <div className="listPage">
            <div className="listPage-header">
                <img src={logo} alt="logo" />
                <input type="text" onChange={(event) => setSearchUserName(event.target.value)}></input>
                <button className="listPage-header-btn">Search</button>
            </div>
            <ListPageResults data={data} currentPage={currentPage} userPerPage={userPerPage} searchUserName={searchUserName} />
            <Pagination data={data} setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default ListPage
