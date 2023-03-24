import './TextField.css'

const TextField = (props) =>{

    const whenTyping = (event) => {
    props.toChange(event.target.value)
}

    return(
        <div className='text-field'>
            <label>
                {props.label}
            </label>
            <input value={props.result} onChange={whenTyping} required={props.obligatory} placeholder = {props.placeholder}/>
        </div>

    )
}

export default TextField