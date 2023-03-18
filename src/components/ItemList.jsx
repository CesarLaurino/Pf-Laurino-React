// import Item from "./Item";

// const ItemList = ({items}) => {
//     return (
//         <div>
//             {items.map(item => (
//             <div className="col-sm-3 cartas" key={item.id}>
//                 <Item item={item} />
//             </div>
//         ))}
//         </div>
//         )
// }

// export default ItemList;

import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="row">
            {items.map(item => (
            <div className="col-md-4" key={item.index}>
                <Item item={item} />
            </div>
        ))}
        </div>
    )
}

export default ItemList;