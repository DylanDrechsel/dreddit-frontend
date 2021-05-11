import './App.css';
import { atom, useRecoilState } from 'recoil';
import LandingPage from './LandingPage/LandingPage'
import Home from './Home/Home'

export const tokenState = atom({
  key: 'token',
  default: null
})

function App() {
  const [token, setToken] = useRecoilState(tokenState)

  if (token === null) {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  } else if (token != null) {
    return (
			<div className='App'>
				<Home />
			</div>
		);
  }
}

export default App;
