import React, { useState } from "react";
import st from "./InteractiveProjects.module.scss";

import InteractiveProjectsCard from "../InteractiveProjectsCard/InteractiveProjectsCard";

const PROJECTS = [
    {name: "Интернет-магазин женской одежды", img: "/XXL.webp", link: "https://aleksandrdantsev.github.io/online-shop", description: `
        Интернет-магазин женской одежды. В ходе создания проекта использовались такие технологии как: React в связке с Redux toolkit, JavaScript, SCSS, Lazy Loading React. Проект построен по принципу SPA с использование React Router
    `},
    {name: "Приложение для изучения английского языка", link: "https://aleksandrdantsev.github.io/english-app", img: "/britan.webp", description: `
        Приложение для изучения английского языка. Используемые технологии: React, TypeScript,  SCSS,  Axios, React Router (SPA),  Redux toolkit
    `},
];

const InteractiveProjects = () => {
    const [countSlide, setCountSlide] = useState(0);

    const slideToLeft = () => {
        if (countSlide === 0) setCountSlide(0);
        else setCountSlide(prev => prev - 1);
    }

    const slideToRight = () => {
        if (countSlide >= PROJECTS.length-1) setCountSlide(PROJECTS.length - 1);
        else setCountSlide(prev => prev + 1);
    }



    return(
        <div className={st.interactiveProjects}>
            <div className={st.wrapper}>
                <div className={st.slider}>
                    <div className={st.arrowLeft + ' ' + st.arrow}>
                        <button onClick={slideToLeft} className={(countSlide === 0 ? st.deactivate : undefined)}>
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" transform="rotate(180)">
                            <g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M10 16L14 12L10 8" stroke="#949494" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </button>
                    </div>
                    <div className={st.sliderConteiner}>
                        <InteractiveProjectsCard name={PROJECTS[countSlide].name}
                                                 img={PROJECTS[countSlide].img}
                                                 slideToLeft={slideToLeft}
                                                 slideToRight={slideToRight}
                        />
                    </div>
                    <div className={st.arrowRight + ' ' + st.arrow}>
                        <button onClick={slideToRight} className={(countSlide === PROJECTS.length - 1 ? st.deactivate : undefined)}>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                            <g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M10 16L14 12L10 8" stroke="#949494" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </button>
                    </div>
                </div>
                <div className={st.descriptionProject}>
                    <a href={PROJECTS[countSlide].link} className={st.showProject} target="blank">
                        Посмотреть проект
                    </a>
                    <p>{PROJECTS[countSlide].description}</p>
                </div>
            </div>
        </div>
    );
} 

export default InteractiveProjects;