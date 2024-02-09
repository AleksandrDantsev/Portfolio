import React, { useEffect, useState } from "react";
import st from "./InteractivePortfolioApp.module.scss";
import InteractiveInfo from "./InteractiveInfo/InteractiveInfo";
import InteractiveProjects from "./InteractiveProjects/InteractiveProjects";

const InteractivePortfolioApp = () => {
    const [isPaintProjectAside, setIsPaintProjectAside] = useState(true);

    useEffect(() => {
        function resizeCheck(e) {
            if (e.target.innerWidth <= 1150) setIsPaintProjectAside(false);
            else setIsPaintProjectAside(true);
        }
        window.addEventListener('resize', resizeCheck);
        return () => window.removeEventListener('resize', resizeCheck);
    })

    return(
        <React.Fragment>
            <div className={st.background}>
            </div>
            <div className={st.interactive}>
                <div className={st.wrapper}>
                    <InteractiveInfo isPaintProjectAside={isPaintProjectAside} />
                    {isPaintProjectAside && window.innerWidth > 1150 && <InteractiveProjects />}
                </div>
            </div>
        </React.Fragment>
    );
} 

export default InteractivePortfolioApp;