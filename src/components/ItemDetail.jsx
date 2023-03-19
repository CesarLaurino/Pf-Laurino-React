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
                <div className="col d-flex align-items-center justify-content-center">
                    <img src={item.image} className="img-detail" alt={item.title} />
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