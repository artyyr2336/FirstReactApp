import {useSelector} from "react-redux"
import TodoList from "./components/Todo/Todo";

const App = () => {
    const [todos, setTodos] = React.useState([
        {
            id: 1,
            complited: false,
            title: "Купить хлеб"
        },
        {
            id: 2,
            complited: false,
            title: "Купить масло"
        },
        {
            id: 3,
            complited: false,
            title: "Купить гречку"
        }
    ])
    const state = useSelector(state => state)
    console.log(state)

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.complited = !todo.complited
            }
            return todo
        }))

    }


    return (
        <>
            <div className="d-flex ai-center jc-center">
                <h1>ReactJS + Redux App</h1>
            </div>
            <TodoList todos={todos} onToggle={toggleTodo}/>
        </>
    )
}

export default App
