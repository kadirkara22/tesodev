import React, { useState } from 'react'
import LandingPage from './LandingPage'
import SearchInput from './SearchInput'

const Content = ({ showMore }) => {
    const [searchUserName, setSearchUserName] = useState("")


    return (
        <div>

            <SearchInput handleOnChange={setSearchUserName} />
            <LandingPage searchUserName={searchUserName} showMore={showMore} />

        </div>
    )
}

export default Content
