import "./shopItem.css";

export const ShopItem = ({ image, link, title, description }) => {
  return (
    <div className='product-card'>
      <div className='card-image-container'>
        <img
          src={image}
          alt='A placeholder product image'
          className='product-image'
        />
      </div>
      <div className='card-content'>
        <h3 className='product-title'>{title}</h3>
        <p className='product-description'>{description.slice(0, 100)}...</p>
        <a href={link} className='buy-button'>
          View more
        </a>
      </div>
    </div>
  );
};
