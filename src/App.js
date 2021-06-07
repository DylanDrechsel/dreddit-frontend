import './App.css';
import { atom, useRecoilState } from 'recoil';
import LandingPage from './LandingPage/LandingPage'
import Home from './Home/Home'
import { Route } from 'react-router-dom'
import PostDetailPage from './PostDetailPage/PostDetailPage'
import Navbar from './Global/Navigation'

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

export const upvoteChangeState = atom({
  key: 'upvoteChange',
  default: false
})

export const websiteState = atom({
  key: 'website',
  default: 'landing'
})

function App() {
  const [token] = useRecoilState(tokenState)

  if (token === null) {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  } else if (token != null) {
    return (
			<div className='App'>
        <Navbar />
        <Route path='/' exact component={Home} />

        <Route path='/submit' exact component={Home} />

        <Route path='/:id' exact component={PostDetailPage} />
			</div>
		);
  }
}

export default App;
