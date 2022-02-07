import React, { useState } from 'react'
import MockUsersList from "../../mock-users.json"


const cols = MockUsersList.cols;
const data = MockUsersList.data.map((item) =>
    item.reduce((store, currentValue, index) => {
        store[cols[index]] = currentValue;
        return store;
    }, {})
);
const Results = ({ searchUserName }) => {
    const [visible, setVisible] = useState(3)

    const filteredUserList = data.filter((user) =>
        `${user.NameSurname}`.toLowerCase().includes(searchUserName.toLowerCase())
    );


    //console.log(data)
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }

    return (
        <div className="results">
            {
                filteredUserList.slice(0, visible).map(item => (
                    <>
                        <div className="results-title">
                            <div className="results-title-city">{item.Country} - {item.City}</div>
                            <div className="results-title-email">Email: {item.Email}</div>
                        </div>
                        <div className="results-name">{item.NameSurname} - {item.Date.slice(6)}</div>
                        <div className="results-cizgi"></div>

                    </>
                ))
            }
            <div className="results-more" onClick={showMoreItems}>Show More...</div>
        </div>
    )
}

export default Results
