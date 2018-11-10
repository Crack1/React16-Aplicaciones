
import Navegacion from '../components/Navegacion';
import Master from '../components/Master';



const Index = () => {
  return (
    <Master>
      <div className="row">
        <div className="col-12">
          <h2>Precio del Bitcoin</h2>
        </div>
        <div className="col-md-8">
          <h2>noticias del Bitcoin</h2>
        </div>
        <div className="col-md-4">
          <h2>Proximos eventos del Bitcoin</h2>
        </div>
      </div>
    </Master>
  )
}

export default Index
