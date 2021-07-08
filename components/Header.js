import  beauty from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Image from 'next/image';


function Header() {  
  return (
    <div className={beauty.header}>
      
        <Image
          className={beauty.header__logo}
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      

      <div className={beauty.header__search}>
        <input className={beauty.header__searchInput} type="text" />
        <SearchIcon className={beauty.header__searchIcon} />
      </div>

      <div className={beauty.header__nav}>
        
          <div className={beauty.header__option}>
            <span className={beauty.header__optionLineOne}>Hello Guest</span>
            <span className={beauty.header__optionLineTwo}>Sign In</span>
          </div>
        

        
          <div className={beauty.header__option}>
            <span className={beauty.header__optionLineOne}>Returns</span>
            <span className={beauty.header__optionLineTwo}>& Orders</span>
          </div>
        
        

        <div className={beauty.header__option}>
          <span className={beauty.header__optionLineOne}>Your</span>
          <span className={beauty.header__optionLineTwo}>Prime</span>
        </div>

        
          <div className={beauty.header__optionBasket}>
            <ShoppingBasketIcon />
            <span className={beauty.header__basketCount}>0</span>
          </div>
        
      </div>
    </div>
  );
}

export default Header;
