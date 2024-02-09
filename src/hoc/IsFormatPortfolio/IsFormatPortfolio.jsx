import React, {Suspense} from "react";



const IsFormatPortfolio = ({mode, InteractivPortfolioApp, DocumentPortfolioApp}) => {
    return(
        <>
            {mode === true ? <InteractivPortfolioApp /> : 
            <Suspense>
                <DocumentPortfolioApp />
            </Suspense>}
        </>
    );
} 

export default IsFormatPortfolio;