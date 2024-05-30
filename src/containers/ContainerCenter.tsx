import React, { useState, useEffect } from 'react';
//@ts-ignore
import imgLogoSol from '../assets/images/icon-sun.svg';
//@ts-ignore
import cruz from '../assets/images/icon-cross.svg';
import { InputTodo } from '../components/input';
import UltimetElements from '../bloks/UltimetElements';

const ContainerCenter = () => {

    const [valueInput, setValueInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [showDivs, setShowDivs] = useState(['']);
    const [checkedTodos, setCheckedTodos] = useState(new Set());

    const handleChange = (event) => {
        setValueInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que el formulario se envíe y la página se recargue
        if (valueInput.trim()) {
            setTodos([...todos, valueInput]); // Agrega el nuevo todo a la lista de todos
            setValueInput(''); // Limpia el input después de enviar
        }
    }

    const toggleCheck = (index) => {
        const newCheckedTodos = new Set(checkedTodos);
        if (newCheckedTodos.has(index)) {
            newCheckedTodos.delete(index);
        } else {
            newCheckedTodos.add(index);
        }
        setCheckedTodos(newCheckedTodos);
    }


    const deleteIndexTodo = (event) => {
        const listTodos = event.target.closest('.todo-item');
        listTodos.remove()
        
    }


    const deleteTodo = () => {
        const element = document.querySelector(".lista-todos");
        if (element) {
          // Selecciona todos los divs anidados dentro del elemento principal
          const childDivs = element.querySelectorAll('div');
          // Elimina cada div anidado
          childDivs.forEach(child => child.remove());
        }
    };
    

    

    

    return (
        <div className="container-center">
            <div className="component-todo">
                <h1 className="todo">TODO</h1>
                <img className="imgLogoSol" src={imgLogoSol} alt="Logo Sol" />
            </div>
            <form onSubmit={handleSubmit}>
                <InputTodo 
                    type='text' 
                    id='input' 
                    value={valueInput} 
                    onChange={handleChange} 
                    placeholder='Create a new Todo' 
                />
            </form>
            
            <div className="lista-todos">
                {todos.map((todo, index) => (
                    <div key={index} className="todo-item">
                             <div id='div-input-value' className={'div-input-value'}>
                             <div>
                                 <div 
                                 id='circle' 
                                 className={`circle ${checkedTodos.has(index) ? 'checked' : ''}`} 
                                 onClick={() => toggleCheck(index)}
                                 >
                                 <span className="checkmark">✔</span>
                             </div>
                             </div>
                             <div><img src={cruz} className='cruz' onClick={deleteIndexTodo} alt="Eliminar Todo" /></div>
                             
                             <p id='todoItem' className={`todoItem ${checkedTodos.has(index) ? 'underline' : ''}`}>{todo}</p>
                         </div>
                    </div>
                ))}
            </div>
                <UltimetElements deleteAllTodo={deleteTodo} />
        </div>
    );
};

export { ContainerCenter };