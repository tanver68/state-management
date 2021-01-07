import { useContext } from "react";
import { CategoriesContext } from "../../App";

const Shipment = () => {
    const[category,setCategory] = useContext(CategoriesContext)
    return (
        <div>
            <h2>This is Shipment value : {category}</h2>
            <button onClick={()=> setCategory(category+1)}>here click me</button>
        </div>
    );
};

export default Shipment;