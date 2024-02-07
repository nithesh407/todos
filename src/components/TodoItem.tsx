import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string; onRemoveAdd: () => void }> = (props) => {
  return <li className={classes.item} onClick={props.onRemoveAdd}>{props.text}</li>;
};

export default TodoItem;
