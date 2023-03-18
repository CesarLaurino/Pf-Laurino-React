// import React, { useState } from "react";

// const ItemCount = ({stock}) => {
//     const [counter, setCounter] = useState(1);

//     const decrementarStock = () => {
//         if (counter > 1) {
//             setCounter(counter - 1);
//         }
//     }

//     const incrementarStock = () => {
//         if (counter < stock) {
//             setCounter(counter + 1);
//         }
//     }

//     const onAdd = () => {
//         if (stock > 0) {
//             console.log("Agregaste: " + counter + " Productos al Carrito!");
//         }
//     }

//     return (
//         <div>
//             <div className="row mb-3">
//                 <div className="col-md-5 text-center">
//                     <div className="btn-group" role="group" aria-label="Basic outlined example">
//                         <button type="button" className="btn btn-outline-primary boton-detail-menos" onClick={decrementarStock}> - </button>
//                         <button type="button" className="btn btn-outline-primary boton-detail-n">{counter}</button>
//                         <button type="button" className="btn btn-outline-primary boton-detail-mas" onClick={incrementarStock}> + </button>
//                     </div>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-md-5 text-center">
//                     <button type="button" className="btn btn-outline-primary boton-detail" onClick={onAdd}>Agregar al Carrito</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ItemCount;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 

const ItemCount = ({stock, onAdd}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementarStock = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    }

    const decrementarStock = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }

    const addToCart = () => {
        if (itemStock >= items) {
            setItemStock(itemStock - items);
            setItems(1);
            setItemAdded(true);
            onAdd(items);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <div className="container">
            <div className="row my-1">
                <div className="col">
                    <div className="btn-group">
                        <button className="btn btn-warning" onClick={decrementarStock}>-</button>
                        <button className="btn btn-warning">{items}</button>
                        <button className="btn btn-warning" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    {itemAdded ? <Link to={"/cart"} className="btn btn-warning">Terminar Mi Compra</Link> : <button className="btn btn-warning" onClick={addToCart}>Agregar Al Carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;