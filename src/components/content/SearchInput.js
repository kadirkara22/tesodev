import React from 'react'
import "./Content.scss"
const SearchInput = () => {
    return (
        <div className="search">
            <div className="search-input">
                <input type="text" id="text" name="text" />
            </div>
            <button className="search-btn">Search</button>
        </div>
    )
}

export default SearchInput
