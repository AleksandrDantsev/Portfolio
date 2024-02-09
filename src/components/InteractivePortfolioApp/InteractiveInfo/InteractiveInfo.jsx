import React, { useEffect, useRef } from "react";
import st from "./InteractiveInfo.module.scss";
import InteractiveProjects from "../InteractiveProjects/InteractiveProjects";

const HARD_SKILLS = [
    {name: 'JavaScript', mark: "Основная технология", flag: "base"},
    {name: 'HTML', mark: "Основная технология", flag: "base"},
    {name: 'CSS(scss)', mark: "Основная технология", flag: "base"},
    {name: 'Git', mark: "Основная технология", flag: "base"},
    {name: 'TypeScript', mark: "Основная технология", flag: "base"},
    {name: 'React', mark: "Основная технология", flag: "base"},
    {name: 'Redux Toolkit', mark: "Основная технология", flag: "base"},
    {name: 'React Router', mark: "Основная технология", flag: "base"},
    {name: 'Vue', mark: "Основная технология", flag: "base"},
    {name: 'Vuex', mark: "Основная технология", flag: "base"},
    {name: 'Vue Router', mark: "Основная технология", flag: "base"},
    {name: 'Axios', mark: "Основная технология", flag: "base"},
    {name: 'Rest API', mark: "Основная технология", flag: "base"},
    {name: 'Jest', mark: "Основная технология", flag: "base"},


    {name: 'ООП', mark: "Допольнительные навыки", flag: "additional"},
    {name: 'БЭМ', mark: "Допольнительные навыки", flag: "additional"},
    {name: 'Figma', mark: "Допольнительные навыки", flag: "additional"},


    {name: 'Python', mark: "Использовал в проектах", flag: "rare"},
    {name: 'WordPress', mark: "Использовал в проектах", flag: "rare"},
];

const InteractiveInfo = ({isPaintProjectAside}) => {
    const skills = useRef(null);

    useEffect(() => {
        function addClass(element) {
            let count = 0;
            return function wrapper(elementInternal) {
                if (count === element.length) return;
                if (count === 0) element[0].className += ' ' + st.slowAppearAnimation;
                else {
                    elementInternal.className += ' ' + st.slowAppearAnimation;
                }
                count++;
                setTimeout(() => wrapper(element[count]), 180);
            }
        }
        addClass(skills.current.children)();
    }, []);


    return(
        <div className={st.info}>
            <div className={st.wrapper}>
                <div className={st.name}>Александр Данцев</div>
                <section className={st.firstInfo}>
                    <h3>Дата рождения:</h3>
                    <div className={st.dateBirth}>12.04.1999</div>
                </section>
                <section className={st.firstInfo}>
                    <h3>Город:</h3>
                    <div className={st.infoCity}>Симферополь</div>
                </section>
                <nav className={st.navigation}>
                    <h3>Ссылки:</h3>
                    <ul className={st.listLinks}>
                        <li>
                            <a className={st.github} href="https://github.com/AleksandrDantsev" target="blank">
                                GitHub
                                <span className={st.tokenSite}><svg className={st.svgGit} height="20px" width="20px" viewBox="-8.74 -20.74 308.80 308.80" fill="#ffffff" stroke="#ffffff" strokeWidth="0.0029132000000000003"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.74792"></g><g> <g> <path d="M145.66,0C65.219,0,0,65.219,0,145.66c0,80.45,65.219,145.66,145.66,145.66 s145.66-65.21,145.66-145.66C291.319,65.219,226.1,0,145.66,0z M186.462,256.625c-0.838-11.398-1.775-25.518-1.83-31.235 c-0.364-4.388-0.838-15.549-11.434-22.677c42.068-3.523,62.087-26.774,63.526-57.499c1.202-17.497-5.754-32.883-18.107-45.3 c0.628-13.282-0.401-29.023-1.256-35.941c-9.486-2.731-31.608,8.949-37.79,13.947c-13.037-5.062-44.945-6.837-64.336,0 c-13.747-9.668-29.396-15.64-37.926-13.974c-7.875,17.452-2.813,33.948-1.275,35.914c-10.142,9.268-24.289,20.675-20.447,44.572 c6.163,35.04,30.816,53.94,70.508,58.564c-8.466,1.73-9.896,8.048-10.606,10.788c-26.656,10.997-34.275-6.791-37.644-11.425 c-11.188-13.847-21.23-9.832-21.849-9.614c-0.601,0.218-1.056,1.092-0.992,1.511c0.564,2.986,6.655,6.018,6.955,6.263 c8.257,6.154,11.316,17.27,13.2,20.438c11.844,19.473,39.374,11.398,39.638,11.562c0.018,1.702-0.191,16.032-0.355,27.184 C64.245,245.992,27.311,200.2,27.311,145.66c0-65.365,52.984-118.348,118.348-118.348S264.008,80.295,264.008,145.66 C264.008,196.668,231.69,239.992,186.462,256.625z"></path> </g> </g></svg></span>
                            </a>
                        </li>
                        <li>
                            <a className={st.mail} href="alexander.dantsev@mail.ru" target="blank">
                            E-mail
                            <span className={st.tokenEmail}><svg className={st.svgMail} width="20px" height="18px" viewBox="0 0 20 22" fill="#f7f7f7" stroke="#f7f7f7"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <title></title> <g > <g> <g> <polyline fill="none" points="4 8.2 12 14.1 20 8.2" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></polyline> <rect fill="none" height="14" rx="2" ry="2" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" width="18" x="3" y="6.5"></rect> </g> </g> </g> </g></svg></span>
                            </a>
                        </li>
                        <li>
                            <a className={st.telegram} href="https://t.me/Alekdanc" target="blank">
                                Telegram
                                <span className={st.tokenTg}><svg fill="#ffffff" height="18px" width="18px"  viewBox="0 0 189.473 189.473" stroke="#ffffff"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <g> <path d="M152.531,179.476c-1.48,0-2.95-0.438-4.211-1.293l-47.641-32.316l-25.552,18.386c-2.004,1.441-4.587,1.804-6.914,0.972 c-2.324-0.834-4.089-2.759-4.719-5.146l-12.83-48.622L4.821,93.928c-2.886-1.104-4.8-3.865-4.821-6.955 c-0.021-3.09,1.855-5.877,4.727-7.02l174.312-69.36c0.791-0.336,1.628-0.53,2.472-0.582c0.302-0.018,0.605-0.018,0.906-0.001 c1.748,0.104,3.465,0.816,4.805,2.13c0.139,0.136,0.271,0.275,0.396,0.42c1.11,1.268,1.72,2.814,1.835,4.389 c0.028,0.396,0.026,0.797-0.009,1.198c-0.024,0.286-0.065,0.571-0.123,0.854L159.898,173.38c-0.473,2.48-2.161,4.556-4.493,5.523 C154.48,179.287,153.503,179.476,152.531,179.476z M104.862,130.579l42.437,28.785L170.193,39.24l-82.687,79.566l17.156,11.638 C104.731,130.487,104.797,130.533,104.862,130.579z M69.535,124.178l5.682,21.53l12.242-8.809l-16.03-10.874 C70.684,125.521,70.046,124.893,69.535,124.178z M28.136,86.782l31.478,12.035c2.255,0.862,3.957,2.758,4.573,5.092l3.992,15.129 c0.183-1.745,0.974-3.387,2.259-4.624L149.227,38.6L28.136,86.782z"></path> </g> </g></svg></span>
                            </a>
                        </li>
                    </ul>
                </nav>
                {(isPaintProjectAside === false || window.innerWidth < 1150) && <InteractiveProjects />}
                <section className={st.goal}>
                    <h3>Цель</h3>
                    <p className={st.goalText}>
                    Получить должность Frontend Developer где я мог бы развивать свои навыки
                    разработки интерфейсов, изучать новые технологии, получать и делиться опытом 
                    с другими разработчиками
                    </p>
                </section>
                <section className={st.hardSkills}>
                    <h3>Навыки</h3>
                    <div ref={skills} className={st.hardSkillsWrapper}>
                        {HARD_SKILLS.map(element => 
                        <div className={st.skillElem} key={element.name}>
                            {element.name}
                        </div>)}
                    </div>
                </section>
                <section className={st.aboutMe}>
                    <h3>О себе</h3>
                    <div className={st.aboutMeCharacteristic}>
                        <h4>Личностные качества:</h4>
                        <p>
	                        Хороший уровень английского языка (аудиование, чтение), высокая
                            самодисциплина, ответственность, педантичность, умение и желание искать 
                            компромисс в работе, способность перерабатывать большой массив 	
                            информации, желание учиться новым технологиям и навыкам
                        </p>
                    </div>
                    <div className={st.hobby}>
                        <h4>Хобби</h4>
                        <p>
                            Программирование, пауэрлифтинг, изучение английского языка
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
} 

export default InteractiveInfo;