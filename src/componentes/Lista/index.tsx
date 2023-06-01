export const Lista = () => {

  let lista = [
    {
      titulo: "All",
      classname: "all-task active"
    },
    {
      titulo: "Active",
      classname: "active-task"
    },
    {
      titulo: "Completed",
      classname: "completed,task"
    }
  ]

    return (
        <>
        {lista.map((lista, index) =>
          <li role="presentation" className={`nav-item ${lista.classname}`}>
            <a href="#" className="nav-link">{lista.titulo}</a>
          </li>
        )}
      </>
    )
}