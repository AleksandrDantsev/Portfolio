import React from "react";
import st from "./InteractiveProjectsCard.module.scss";


const InteractiveProjectsCard = ({name, img, slideToLeft, slideToRight}) => {
    const slideClickImg = (e) => {
        e.stopPropagation();
        if (window.innerWidth < 1150) {
           const widthImg = e.target.offsetWidth;
           
        if(e.clientX < widthImg / 2) slideToLeft();
        else if(e.clientX > widthImg / 2) slideToRight();
        }
    }

    return(
            <div className={st.InteractiveProjectsCard}>
                <div className={st.wrapper}>
                    <div className={st.infoImage}>
                        <div className={st.imageWrap} onClick={slideClickImg}>
                            <img className={st.image} src={img} alt={name} />
                        </div>
                    </div>
                </div>
            </div>
    );
} 

export default InteractiveProjectsCard;