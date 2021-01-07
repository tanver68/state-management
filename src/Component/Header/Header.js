import { useContext } from "react";
import {CategoriesContext} from "../../App";

const Header = () => {
      const [category,setCategory] = useContext(CategoriesContext);
    return (
        <div>
            <h2>This is header : {category}</h2>
            <button onClick={()=>setCategory(category+1)}>Increment</button>
        </div>
    );
};

export default Header;