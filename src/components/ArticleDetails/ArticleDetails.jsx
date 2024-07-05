import './style.css'

const ArticleDetails = (props) => {
  const {img, title, description} = props
  return (
    <div className='articleDetails'>
      <div>
      <img src={img} alt="imagem" />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ArticleDetails;