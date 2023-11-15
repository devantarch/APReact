import React from 'react';

const Product = (props) => {
    return (
        <><div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://m.media-amazon.com/images/I/71SkRGw+cKL._AC_SL1500_.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Nombre: </h5>
                
                <p className="card-text">
                    Descripción:
                </p>
                <p className="card-text">
                    Precio:
                </p>
                <p className="card-text">
                    SKU:
                </p>
                <p className="card-text">
                    Cantidad disponible:
                </p>
                <a href="#" className="btn btn-primary">
                    Comprar
                </a>
            </div>
        </div>
        </>
    );
}

export default Product;