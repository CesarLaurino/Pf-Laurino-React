import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
            <div className="card">
                <img src={item.image} className="card-img" alt={item.title}/>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                </div>
            </div>
        </Link>
                
    )
}

export default Item;

