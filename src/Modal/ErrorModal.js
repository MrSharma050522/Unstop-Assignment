import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={classes.modal} style={{ display: `${props.display}` }}>
      <div className={classes["modal-content"]}>
        <span className={classes.close} onClick={props.close}>
          &times;
        </span>
        <p>Can't Book More than 7 seats at once!</p>
      </div>
    </div>
  );
};

export default ErrorModal;
