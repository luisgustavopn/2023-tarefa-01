export const Checkbox = () => {
  let lista = [
    "Create theme",
    "Work on wordpress",
    "Organize office main department",
    "Error solve in HTML template"
  ];
  return (
    <>
      {lista.map((nome, index) =>
        <div className="todo-item">
          <div className="checker">
            <span><input type="checkbox" /></span>
          </div>
          <span> {nome}</span>
          <a href="javascript:void(0);" className="float-right remove-todo-item"><i className="icon-close"></i></a>
        </div>
      )}
    </>
  )
}