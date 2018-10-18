import React from 'react'

const Noticia = (props) => {
  const { title, description, url, urlToImage, source } = props.noticia
  const img = 'https://img.freepik.com/free-vector/newspapers_23-2147495892.jpg?size=338&ext=jpg'

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">

          <img src={urlToImage ? urlToImage : img} alt={title} />
          <span className="card-title">
            {source.name}
          </span>
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a href={url} className="waves-effect waves-light btn" target="_blank">
            Leer</a>
        </div>
      </div>
    </div>
  )
}

export default Noticia 
