/* eslint-disable react/prop-types */



//import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const TodoList = ({todolist, deleteHandler}) => {
    return (
        <div>
            {todolist.map((todo,index) =>
            <div key={index}>
                <h5>{todo} &nbsp; <button onClick={() => deleteHandler(index)}>Delete</button></h5>
            </div>)}
        </div>
    )
}



export default TodoList;