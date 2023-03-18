import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/productos.json";

const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.category === (id)) : arrayProductos);
            }, 2000);
        });

        promesa.then((data) => {
            setItems(data);
        })
    }, [id]);

    console.log(items)
    return (
            <div className="row container-card">
                <ItemList items = {items}  />
            </div>
    )
}

export default ItemListContainer;


// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
// import ItemList from "./ItemList";
// import Loading from "./Loading";

// const ItemListContainer = () => {
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const {id} = useParams();

//     useEffect(() => {
//         const db = getFirestore();
//         const itemsCollection = collection(db, "items");
//         const filter = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
//         getDocs(filter).then(elements => {
//             setItems(elements.docs.map(element => ({id:element.id, ...element.data()})));
//             setLoading(false);
//         // arrayProductos.forEach(item =>{
//         //     addDoc(itemsCollection,item);
//         });
//         // console.log("se agregaron los Productos!")

//     }, [id]);

//     return (
//         <div className="container">
//             {loading ? <Loading /> : <ItemList items={items} />}
//         </div>
//     )
// }

// export default ItemListContainer;