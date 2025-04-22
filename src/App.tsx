import './App.css'
import Profile from './components/profile'

const profiles = [
  { name: '홍길동', age: 20 },
  { name: '김철수', age: 25 },
  { name: '이영희', age: 30 },
]

function App() {
  return (
    <div>
      {
        profiles.map((item, index) => (
          <Profile
          key={index}
          name={item.name}
          age={item.age}
          />
        ))
      }
    </div>
    )
}

export default App