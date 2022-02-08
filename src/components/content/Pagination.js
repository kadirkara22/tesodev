import React, { useEffect, useState } from 'react'

const Pagination = ({ data, setCurrentPage }) => {
    const [currentButton, setCurrentButton] = useState(1);


    const pages = 9;
    //console.log(pages)
    const numOfPages = [];

    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i)
    }

    useEffect(() => {
        setCurrentPage(currentButton)
    }, [setCurrentPage, currentButton])

    return (

        <div className="center">
            <div className="center-pagination">
                <a href="#!" className="center-pagination-previous"
                    onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}>Previous</a>

                {
                    numOfPages.map((item, index) => {
                        return (
                            <a key={index} href="#!"
                                className={`${currentButton === item
                                    ? "center-pagination-active" : "center-pagination-page"}`}
                                onClick={() => setCurrentButton(item)}
                            >{item}</a>
                        )

                    })
                }
                <a href="#!" className="center-pagination-next"
                    onClick={() => setCurrentButton((prev) => prev === numOfPages.length ? prev : prev + 1)}
                >Next</a>
            </div>
        </div>

    )
}

export default Pagination
