import React, { useState } from 'react'
import arrow from "../../img/arrow.svg"
import MockUsersList from "../../mock-users.json"


const cols = MockUsersList.cols;
const data = MockUsersList.data.map((item) =>
    item.reduce((store, currentValue, index) => {
        store[cols[index]] = currentValue;
        return store;
    }, {})
);

const ListPageResults = () => {
    const [visible, setVisible] = useState(6);

    /*    const filteredUserList = data.filter((user) =>
       `${user.NameSurname}`.toLowerCase().includes(searchUserName.toLowerCase())
   ); */
    return (
        <div className="listPageResults">
            <div className="listPageResults-orderby">
                <img src={arrow} alt="arrow" />
                <div className="listPageResults-orderby-dropdown">
                    <button className="listPageResults-orderby-dropdown-dropbtn">Order By</button>
                    <div className="listPageResults-orderby-dropdown-dropbtn-content">
                        <a href="#">Name ascending</a>
                        <a href="#">Name descending</a>
                        <a href="#">Year ascending</a>
                        <a href="#">Year descending</a>

                    </div>
                </div>
            </div>
            <div>
                {
                    data.slice(0, visible).map((item, index) => (
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
