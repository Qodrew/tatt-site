import "./RevievSlider.scss";
import stars5 from "../img/5stars.png";
import Carusel from "./Carusel";
import { revievTitle, revievDescr, revievAuthor } from "./RevievLib";
import { useState } from "react";

const ReievSlider = () => {
    const [slide, setSlide] = useState(0);

    const goToSlide = (num) => {
        setSlide(num % revievAuthor.length);
    };


    const addDots = (array) => {
        const dots = [];
        for (let i = 0; i < array.length; i++) {
            dots.push(<div className="dot" key={`dot-${i}`} number={i} onClick={() => goToSlide(i)}/>);
        }
        return dots;
    };

    return (
        <div className="wrapper-carusel">
            <Carusel>
                <div className="reviev">
                    <h2 className="reviev__title">"{revievTitle[0]}"</h2>
                    <div>
                        <img src={stars5} alt="grade" />
                        <p className="reviev__author">{revievAuthor[0]}</p>
                    </div>

                    <p className="reviev__descr">{revievDescr[0]}</p>
                </div>
                <div className="reviev">
                    <h2 className="reviev__title">"{revievTitle[1]}"</h2>
                    <img src={stars5} alt="grade" />
                    <p className="reviev__author">{revievAuthor[1]}</p>
                    <p className="reviev__descr">{revievDescr[1]}</p>
                </div>
                <div className="reviev">
                    <h2 className="reviev__title">"{revievTitle[2]}"</h2>
                    <img src={stars5} alt="grade" />
                    <p className="reviev__author">{revievAuthor[2]}</p>
                    <p className="reviev__descr">{revievDescr[2]}</p>
                </div>
                <div className="reviev">
                    <h2 className="reviev__title">"{revievTitle[3]}"</h2>
                    <img src={stars5} alt="grade" />
                    <p className="reviev__author">{revievAuthor[3]}</p>
                    <p className="reviev__descr">{revievDescr[3]}</p>
                </div>
                <div className="reviev">
                    <h2 className="reviev__title">"{revievTitle[4]}"</h2>
                    <img src={stars5} alt="grade" />
                    <p className="reviev__author">{revievAuthor[4]}</p>
                    <p className="reviev__descr">{revievDescr[4]}</p>
                </div>
            </Carusel>
            <div className="dots-wrap">{addDots(revievTitle)}</div>
        </div>
    );
};

export default ReievSlider;
