import './App.css'
import { Pesquisa } from './componentes/Pesquisa'
import { Lista } from './componentes/Lista'
import {Checkbox} from './componentes/Checkbox'

function App() {

  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <Pesquisa/>
                <Lista/>
                <Checkbox></Checkbox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
