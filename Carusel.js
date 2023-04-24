import { useState, useEffect, Children, cloneElement } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons";


import "./Carusel.scss";

const Carusel = ({children}) => {
    const PAGE_WIDTH = 850;
    const [pages, setPages] = useState([]);

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: "100%",
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    },
                });
            })
        );
    }, []);

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            return Math.min(newOffset, 0); // Валидацияю стоп при 0
        });
    };

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

            const newOffset = currentOffset - PAGE_WIDTH;
            return Math.max(newOffset, maxOffset);
        });
    };

    return (
        <div className="main-container">
            {/* <FaChevronLeft className="arrow" onClick={handleLeftArrowClick} /> */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-bar-left"
                viewBox="0 0 16 16"
                style={{ color: "#fff", cursor: "pointer" }}
                onClick={()=>handleLeftArrowClick()}
            >
                <path
                    fillRule="evenodd"
                    d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"
                />
            </svg>
            <div className="window">
                <div
                    className="all-pages-container"
                    style={{ transform: `translateX(${offset})` }}
                >
                    {pages}
                </div>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-bar-right"
                viewBox="0 0 16 16"
                style={{ color: "#fff", cursor: "pointer" }}
                onClick={()=>handleRightArrowClick()}
            >
                <path
                    fillRule="evenodd"
                    d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"
                />
            </svg>

            {/* <FaChevronRight className="arrow" onClick={handleRightArrowClick} /> */}
        </div>
    );
};

export default Carusel;
