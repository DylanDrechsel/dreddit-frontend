import './App.css';
import { atom, useRecoilState } from 'recoil';
import LandingPage from './LandingPage/LandingPage'

export const tokenState = atom({
  key: 'token',
  default: null
})

function App() {
  const [token, setToken] = useRecoilState(tokenState)

  return (
    <div className="App">
        <LandingPage />
    </div>
  );
}

export default App;
