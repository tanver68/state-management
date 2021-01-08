import { useContext } from "react";
import {CategoriesContext} from "../../App";

const Header = () => {
      const [category,setCategory] = useContext(CategoriesContext);
    return (
        <div>
            <h2>This is header : {category}</h2>
            <button onClick={()=>setCategory('laptop')}>Laptop</button>
            <button onClick={()=>setCategory('mobile')}>Mobile</button>
            <button onClick={()=>setCategory('camera')}>Camera</button>
            
        </div>
    );
};

export default Header;