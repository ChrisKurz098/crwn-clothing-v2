import './product-card.styles.scss'
import Button from '../Button/Button.component'

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}></img>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{`$${price}`}</span>
                <Button buttonType={'inverted'}>Add To Cart</Button>
            </div>
        </div>
    )
}

export default ProductCard;