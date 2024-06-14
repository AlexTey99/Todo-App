import { useState, useEffect, useRef } from 'react';
//@ts-ignore
import imgLogoSol from '../assets/images/icon-sun.svg';
//@ts-ignore
import cruz from '../assets/images/icon-cross.svg';
import { InputTodo } from '../components/input';
import {UltimetElements} from '../bloks/UltimetElements';




export const ContainerCenter = ({setMensaje}) => {

    const [valueInput, setValueInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [checkedTodos, setCheckedTodos] = useState(new Set());
    const [divCount, setDivCount] = useState(0);
    const [changeColor, setChangeColor] = useState(true);

    const containerRef = useRef<HTMLDivElement>(null); 
    let numeIncrementor = divCount;

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
          const childDivs = element.querySelectorAll('.underline');
          // Elimina cada div anidado
          childDivs.forEach(child => child.remove());
        }
    };


    let filteredDivs=[];
  // useEffect se ejecuta después de que el componente se ha montado
  useEffect(() => {
    
    // Función para contar los divs hijos
    const countDivs = () => {
      if (containerRef.current) {
        // Obtener todos los divs dentro del contenedor
        const allDivs = containerRef.current.querySelectorAll('.circle');

        // Filtrar los divs que no tienen la clase "circle checked"
         filteredDivs = Array.from(allDivs).filter((div: HTMLDivElement) => !(div.classList.contains("circle") && div.classList.contains("checked")));

        // Contar los divs filtrados
        const divsCountWithoutClass = filteredDivs.length;

        // Actualizar el estado con el número de divs sin la clase
        setDivCount(divsCountWithoutClass);
      }
    };

    // Crear un MutationObserver para observar cambios en el contenedor
    const observer = new MutationObserver(() => {
      countDivs();
    });

    // Configurar el MutationObserver para observar hijos añadidos/eliminados
    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true,
      });

      // Contar los divs inicialmente
      countDivs();
    }

    // Limpiar el observer cuando el componente se desmonta
    return () => {
      observer.disconnect();
    };
  }, [filteredDivs]);
  
  // Cambio de colores al precionar el icono del sol
  const configureColors=()=>{
    setChangeColor(!changeColor);
    setMensaje(!changeColor);
  }
    

    return (
        <div className='container-center'>
            <div className="component-todo">
                <h1 className="todo">TODO</h1>
                <img className="imgLogoSol" onClick={configureColors} src={imgLogoSol} alt="Logo Sol" />
            </div>
            <form onSubmit={handleSubmit}>
                <InputTodo 
                    type='text' 
                    id='input' 
                    value={valueInput} 
                    onChange={handleChange} 
                    placeholder='Create a new Todo' 
                    className={changeColor ? 'veryDark' : 'white'}
                />
            </form>
            
            <div ref={containerRef} className={`lista-todos ${changeColor ? 'veryDark' : 'white'}`}>
                {todos.map((todo, index) => (
                    <div key={index} className="todo-item">
                             <div id='div-input-value' className={`div-input-value ${checkedTodos.has(index) ? 'underline' : ''} ${changeColor ? 'veryDark' : 'white'}`}>
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
                <UltimetElements nume={numeIncrementor} deleteAllTodo={deleteTodo} prop={changeColor}/>
        </div>
    );
};
// Verifica cómo estás exportando el componente
export default ContainerCenter
