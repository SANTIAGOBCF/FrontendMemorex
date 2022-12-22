const InputsForm = ({ label, children }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        {label && <span className="input-group-text">{label}</span>}
      </div>
      {children}
    </div>
  );
};

export default InputsForm;
