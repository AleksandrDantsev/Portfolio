import { useState, lazy} from 'react';
import st from './App.module.scss';

import InteractivPortfolioApp from './components/InteractivePortfolioApp/InteractivePortfolioApp';
const DocumentPortfolioApp = lazy(() => import('./components/DocumentPortfolioApp/DocumentPortfolioApp'))

import IsFormatPortfolio from './hoc/IsFormatPortfolio/IsFormatPortfolio';

function App() {
 const [mode, setMode] = useState(true);

  return (
    <main>
      <button className={st.switchMode + ' ' + (mode === false ? st.green : undefined)} onClick={() => setMode(!mode)} type="button">{Boolean(mode) ? "PDF" : "Int"}</button>
      <IsFormatPortfolio  InteractivPortfolioApp={InteractivPortfolioApp}
                          DocumentPortfolioApp={DocumentPortfolioApp}
                          mode={mode} />
    </main>
  )
}

export default App
