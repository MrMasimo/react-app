import Styles from './loginInput.module.css';
import {memo} from 'react'

export const LoginInput = memo(({name, type, value, setValue, isError}) => {
    console.log(`Render ${name}`)

    return(
        <div className={Styles.input}>
            <span>{name}:</span>
            <input
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{border: `2px solid ${isError ? 'red' : 'black'}`}}
            />
        </div>
    )
})