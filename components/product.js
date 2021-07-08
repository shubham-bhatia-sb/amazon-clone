import styles from './Product.module.css';
import Image from 'next/image'
function Product({ id, title, image, price, rating }) {
 
    return (
      <div className={styles.display}>
      <div className={styles.product}>
        <div className={styles.product__info}>
          <p>{title}</p>
          <p className={styles.product__price}>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className={styles.product__rating}>
           
                <p>🌟</p>
             
          </div>
        </div>
  
        <Image src={image} alt="" />
  
        <button>Add to Basket</button>
      </div>
      </div>
    );
  }
  
  export default Product;
  
