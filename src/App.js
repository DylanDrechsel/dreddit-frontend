import './App.css';
import { atom, useRecoilState } from 'recoil';
import LandingPage from './LandingPage/LandingPage'
import Home from './Home/Home'
import { Route } from 'react-router-dom'

export const tokenState = atom({
  key: 'token',
  default: null
})

export const userIdState = atom({
  key: 'userId',
  default: null
})

export const userNameState = atom({
  key: 'userName',
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

        <Route path='/:id/comments' component={LandingPage} />
			</div>
		);
  }
}

export default App;
