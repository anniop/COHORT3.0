import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PostComponent } from './Post'


function App() {
  const [posts, setPosts] = useState([]);

  const postComponent = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)
  function addPost() {
    setPosts([...posts, {
      name: "Aniket",
      subtitle: "1000 Followers",
      time: "2m Ago",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUvy77ds0v5v041xEWVYxwGSVaCtwM2D3gg&s",
      description: "This is a Demo App for Learning React Application"
    }])
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}> Add Post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {postComponent}
        </div>
      </div>
    </div>
  )
}
export default App
