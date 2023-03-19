import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
// import arrayProductos from "./json/productos.json";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    // useEffect(() => {
    //     const promesa = new Promise ((resolve) => {
    //         setTimeout(() => {
    //             resolve(arrayProductos.find(prod => prod.index === parseInt(id)));
    //         }, 2000);
    //     });
    //     promesa.then((respuesta) => {
    //         setItem(respuesta);
    //     })
    // }, [id]);

    useEffect(() => {
        const db = getFirestore();
        const document = doc(db, "items", id);
        getDoc(document).then(element => {
            setItem({id:element.id, ...element.data()});
            setLoading(false);
        });
    }, [id]);

    return (
        loading ? <Loading /> : <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;