



export const UltimetElements = ({deleteAllTodo, nume, prop}) => {
  return (
    <div className={`UltimetElements ${prop ? 'veryDark' : 'white'}`}>
        <div className='item-counter'>
            <p>{nume}</p>
            <p>items left</p>
        </div>
        <div className='other-options'>
            <p className="all">All</p>
            <p className={`active ${prop ? 'veryDarkColor' : 'whiteColor'}`}>Active</p>
            <p className='complete'>Complete</p>
        </div>
        <div>
            <p className={`clear-complete ${prop ? 'veryDarkColor' : 'whiteColor'}`} onClick={deleteAllTodo}>Clear Complete</p>
        </div>
      
    </div>
  )
}
