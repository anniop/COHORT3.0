import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil"
import { todoAtomFamily } from "./atom"
import './App.css'
import { useEffect } from "react";

function App() {

  return <RecoilRoot>
    <UpdaterComponent />
    <Todo id={1} />
    <Todo id={2} />

    <Todo id={2} />
    <Todo id={2} />
    <Todo id={3} />
  </RecoilRoot>
}

function UpdaterComponent() {
  const updateTodo = useSetRecoilState(todoAtomFamily(2));

  useEffect(() => {
    setTimeout(() => {
      updateTodo({
        id: "2",
        title: "Have BReakFast",
        description: "Take Heavy BReakFast"
      })
    }, 5000)
  }, [])

}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilState(todoAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App
