import styles from './styles.module.scss';

export function Todo(props) {
  
  return (
    <li key={props.id}>
      <div className={styles.inputContainer}>
        <input type="radio"/><span>{props.content}</span>
      </div>
      <button onClick={() => props.removeTodos(props.id)} className={styles.buttonRemove}>
        <img src="/assets/icon-cross.svg" alt="Remove" />
      </button>
    </li>
  )
}