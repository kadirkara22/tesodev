import React, { useState } from 'react'
import Results from './Results'
import SearchInput from './SearchInput'

const Content = () => {
    const [searchUserName, setSearchUserName] = useState("")

    return (
        <div>
            <SearchInput handleOnChange={setSearchUserName} />
            <Results searchUserName={searchUserName} />
        </div>
    )
}

export default Content
