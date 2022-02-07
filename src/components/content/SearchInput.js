import React from 'react'
import "./Content.scss"
const SearchInput = ({ handleOnChange }) => {

    return (
        <div className="search">
            <div className="search-input">
                <input type="text" id="text" name="text" onChange={(event) => {
                    handleOnChange(event.target.value);
                }} />
            </div>
            <button className="search-btn">Search</button>
        </div>
    )
}

export default SearchInput
