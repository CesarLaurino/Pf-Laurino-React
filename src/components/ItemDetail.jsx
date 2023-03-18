// import React from "react";
// import ItemCount from "./ItemCount";

// const ItemDetail = ({item}) => {
//     const {addItem} = useContext(CartContext);

//     const onAdd = (quantity) => {
//         addItem(item, quantity);
//     }    
    
//     return (
//         <div className="row">
//             <div className="col-md-4 offset-md-2">
//                 <img src={item.image} alt={item.title} className="img-fluid img-detail" />
//             </div>
//             <div className="col-md-4">
//                 <h1 className="title-detail">{item.title}</h1>
//                 <p className="desc-detail">{item.description}</p>
//                 <p><b>USD {item.price}</b></p>
//                 <ItemCount stock={item.stock} onAdd={onAdd}  />
//             </div>
//         </div>
//     )
// }

// export default ItemDetail;

import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col d-flex align-items-center justify-content-end">
                    <img src={item.imagen} alt={item.nombre} />
                </div>
                <div className="col d-flex align-items-center">
                    <div>
                        <h1 className="title-detail">{item.title}</h1>
                        <p className="desc-detail">{item.description}</p>
                        <p><b>USD {item.price}</b></p>
                        <ItemCount stock={item.stock} onAdd={onAdd}  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;