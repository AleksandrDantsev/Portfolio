import React from "react";
import st from "./DocumentPortfolioApp.module.scss";


const DocumentPortfolioApp = () => {
    return(
        <React.Fragment>
        <div className={st.backgroundDocument}></div>
        <div className={st.document}>
            <div className={st.name}>
                <h1>Александр Данцев</h1>
                <a href="./AleksanderDantsevResume.pdf" download className={st.downloadDocument}>
                    <svg width="45px" height="30px" viewBox="0 0 24 24" fill="none"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path opacity="0.5" d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#3d3d3d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#3d3d3d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </a>
            </div>
            <div className={st.birth}>
                <h2>Дата рождения</h2>
                <p>12.04.1999</p>
            </div>
            <section className={st.contactInfo}>
                <h2>Контактная информация</h2>
                <ul className={st.contactInfo_list}>
                    <li>Город: <span className={st.infoContSpan}>Симферополь</span></li>
                    <li>E-mail: <span className={st.infoContSpan}>alexander.dantsev@mail.ru</span></li>
                    <li>Ссылка на Telegram: <span className={st.infoContSpan}>https://t.me/Alekdanc</span></li>
                    <li>Ссылка на GitHub: <span className={st.infoContSpan}>https://github.com/AleksandrDantsev</span></li>
                </ul>
            </section>
            <section className={st.infoBlock}>
                <h2>Цель</h2>
                <p> Получить должность Frontend Developer где я мог бы развивать свои навыки
                    разработки интерфейсов, изучать новые технологии, получать и делиться
                    опытом с другими разработчиками
                </p>
            </section>
            <section className={st.infoBlock}>
                <h2>Технологии</h2>
                <p> HTML, CSS(SCSS), Git, TypeScript, JavaScript, 
                    React(Redux toolkit, React Router и др.),
                    Vue(Vuex, Vue Router), Axios, ООП, БЭМ, 
                    Jest, Python,  PHP(WordPress), Figma
                </p>
            </section>
            <section className={st.infoBlock}>
                <h2>Опыт</h2>
                <p> Имеется несколько работ написанных на определённых технологиях:</p>
                <ul className={st.experienseList}>
                    <li>
                    Интернет-магазин женской одежды. В ходе создания проекта использовались такие технологии как: 
                    React в связке с Redux toolkit, JavaScript, SCSS, Lazy Loading React. Проект построен по принципу 
                    SPA с использование React Router <br/>
	                <span className={st.linkToProject}>Ссылка на проект:  https://aleksandrdantsev.github.io/online-shop</span>
                    </li>
                    <li>
                    Приложение для изучения английского языка. Используемые технологии: React, TypeScript,  SCSS,  Axios, React Router (SPA),  Redux toolkitbr<br/>
                    <span className={st.linkToProject}>Ссылка на проект:  https://aleksandrdantsev.github.io/english-app</span>
                    </li>
                    <li>
                        Так же несколько других работ, которые находятся на GitHub 
                    </li>
                    <li>
                        Имеется коммерческий опыт в области «Микшер-инженер»
                    </li>
                </ul>
            </section>
            <section className={st.infoBlock}>
                <h2 className={st.aboutMe}>О себе</h2>
                    <div className={st.characteristic}>
                    <h3>Личностные качества:</h3>
                        Хороший уровень английского языка (аудиование, чтение), высокая 	самодисциплина, ответственность, педантичность, умение и желание искать 	компромисс в работе,
                        способность перерабатывать большой массив 	информации, желание учиться новым технологиям и навыкам
                    </div>
                    <div className={st.characteristic}>
                    <h3>Хобби:</h3>
	                    Программирование, пауэрлифтинг, изучение английского языка
                    </div>
            </section>
            <section className={st.infoBlock}>
                <h2>Образование</h2>
                <p> Государственное профессиональное образовательное учреждение Республики 	
                    Крым «Романовский колледж индустрии гостеприимства»
                </p>
                <p>Год окончания: 2022</p>
            </section>
        </div>
        </React.Fragment>
    );
} 

export default DocumentPortfolioApp;