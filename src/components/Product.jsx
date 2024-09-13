const Product = ({ product }) => {
    return(
        <div key={product.id} className="product-item">
            <div className="product-item__imgBx">
                <img src={product?.image} alt={product.name} />
            </div>
            <div className="product-item__content">
                <h3 className="product-item__title">{product.name}</h3>
                <p><b>Price:</b> ₹{product.price}</p>
                <p><b>Color:</b> {product.colors.map((size) => size).join(', ')}</p>
                <p><b>Sizes:</b> {product.sizes.map((size) => size).join(', ')}</p>
                <button className="btn btn--primary">Add to Cart</button>
            </div>
        </div>
    );
}

export default Product;