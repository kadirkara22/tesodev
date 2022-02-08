import React, { useEffect, useState } from 'react'
import arrow from "../../img/arrow.svg"


const ListPageResults = ({ data, currentPage, userPerPage, searchUserName }) => {
    const [orderbyUser, setOrderbyUser] = useState([]);

    useEffect(() => {
        setOrderbyUser(data)
    }, [setOrderbyUser, data])

    const OrderbyUserNameAsc = () => {
        const nameAsc = orderbyUser.sort((a, b) => (a.NameSurname < b.NameSurname ? -1 : 1))
        console.log(nameAsc)
        setOrderbyUser(nameAsc)
    }
    const OrderbyUserNameDesc = () => {
        const nameDesc = orderbyUser.sort((a, b) => (a.NameSurname < b.NameSurname ? 1 : -1))
        console.log(nameDesc)
        setOrderbyUser(nameDesc)
    }
    const OrderbyUserYearAsc = () => {
        const yearAsc = orderbyUser.sort((a, b) => (a.Date < b.Date ? 1 : -1))
        console.log(yearAsc)
        setOrderbyUser(yearAsc)
    }
    const OrderbyUserYearDesc = () => {
        const yearDesc = orderbyUser.sort((a, b) => (a.Date < b.Date ? -1 : 1))
        console.log(yearDesc)
        setOrderbyUser(yearDesc)
    }


    const filteredUserList = orderbyUser.filter((user) =>
        `${user.NameSurname}${user.Country}`.toLowerCase().includes(searchUserName.toLowerCase())
    );

    const indexLastUser = currentPage * userPerPage;
    const indexFirstUSer = indexLastUser - userPerPage;
    return (
        <div className="listPageResults">
            <div className="listPageResults-orderby">
                <img src={arrow} alt="arrow" />
                <div className="listPageResults-orderby-dropdown">
                    <button className="listPageResults-orderby-dropdown-dropbtn">Order By</button>
                    <div className="listPageResults-orderby-dropdown-dropbtn-content">
                        <div onClick={OrderbyUserNameAsc}>Name ascending</div>
                        <div onClick={OrderbyUserNameDesc}>Name descending</div>
                        <div onClick={OrderbyUserYearAsc}>Year ascending</div>
                        <div onClick={OrderbyUserYearDesc}>Year descending</div>
                    </div>
                </div>
            </div>
            <div>
                {
                    filteredUserList.slice(indexFirstUSer, indexLastUser).map((item, index) => (
                        <div key={index}>
                            <div className="results-title">
                                <div className="results-title-city">{item.Country} - {item.City}</div>
                                <div className="results-title-email">Email: {item.Email}</div>
                            </div>
                            <div className="results-name">{item.NameSurname} - {item.Date.slice(6)}</div>
                            <div className="results-cizgi"></div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default ListPageResults
