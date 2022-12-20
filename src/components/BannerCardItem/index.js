import './index.css'

const Banner = props => {
  const {bannerList} = props
  const {headerText, description, className} = bannerList

  return (
    <div className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button">show more</button>
      </div>
    </div>
  )
}

export default Banner
