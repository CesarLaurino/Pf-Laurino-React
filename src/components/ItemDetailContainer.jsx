import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
// import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)));
            }, 2000);
        });

        promesa.then((data) => {
            setItem(data);
        })
    }, [id]);

    return (
        <div className="container my-5">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;

// import { doc, getDoc, getFirestore } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ItemDetail from "./ItemDetail";
// import Loading from "./Loading";

// const ItemDetailContainer = () => {
//     const [item, setItem] = useState({});
//     const [loading, setLoading] = useState(true);
//     const {id} = useParams();

//     useEffect(() => {
//         const db = getFirestore();
//         const document = doc(db, "items", id);
//         getDoc(document).then(element => {
//             setItem({id:element.id, ...element.data()});
//             setLoading(false);
//         });
//     }, [id]);

//     return (
//         loading ? <Loading /> : <ItemDetail item={item} />
//     )
// }

// export default ItemDetailContainer;