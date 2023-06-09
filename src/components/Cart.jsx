import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import trash from "./img/trash2.svg";

const Cart = () => {
    const {cart, clear, removeItem, cartTotal, cartSum} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-primary text-center" role="alert">No se encontraron Productos en el Carrito!</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <h1 className="text-center">Productos Seleccionados</h1>
                <div className="col-md-12">
                    <table className="table">
                        <tr>
                            <td className="text-end" colSpan={5}><button className="btn btn-primary bg-primary" onClick={() => {clear()}}>Vaciar Carrito</button></td>
                        </tr>
                        {
                            cart.map(item => ( 
                                <tr key={item.index}>
                                    <td className="text-start" width="10%"><img src={item.image} alt={item.title} width={120} /></td>
                                    <td className="text-start align-middle" width="30%">{item.title}</td>
                                    <td className="text-center align-middle" width="20%">{item.quantity} x USD{item.price}</td>
                                    <td className="text-center align-middle" width="20%">USD{item.quantity * item.price}</td>
                                    <td className="text-end align-middle" width="20%"><Link type="button" className="btn btn-primary bg-primary" onClick={() => {removeItem(item.index)}} title={"Eliminar Producto"}><img src={trash} alt={"Eliminar Producto"} width={32} /></Link></td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={2}>&nbsp;</td>
                            <td className="text-center">Total a Pagar</td>
                            <td className="text-center"><b>USD{cartSum()}</b></td>
                            <td className="text-end"><Link to={"/checkout"} className="btn btn-primary bg-primary">Finalizar Compra</Link></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;