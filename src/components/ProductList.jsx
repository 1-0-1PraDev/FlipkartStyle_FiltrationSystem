import Product from './Product';
import '../styles/productList.css';

const ProductList = ({ products }) => {
    return(
        <div className="products-list">
            <div className="products">
                {products.map((product) => {
                    return(
                        <Product
                            key={product.id} 
                            product={product}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default ProductList;