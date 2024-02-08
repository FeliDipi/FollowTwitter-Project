import './App.css'
import { TwitterFollowCard } from './Components/TwitterFollowCard.jsx'
import { users } from './Mock/users.js'

function App() {
  return (
      <section className='App'>
        {
          users.map(({name,userName,isFollowing})=>
          (          
            <TwitterFollowCard
              key={userName} 
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          ))
        }
      </section>
  )
}

export default App
