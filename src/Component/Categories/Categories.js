import React, { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../App';
import CategoriesDetails from '../CategoriesDetails/CategoriesDetails';

const AllProducts = [{name:'lenevo', category:'laptop'},{name:'asus',category:'laptop'},{name:'dell',category:'laptop'},{name:'nokiya', category:'mobile'},{name:'samsung',category:'mobile'},{name:'xiome',category:'mobile'},{name:'canon', category:'camera'},{name:'nikon',category:'camera'},{name:'smart',category:'camera'},
]

const Categories = (props) => {
    const [category] = useContext(CategoriesContext)
    const [products,setProducts] = useState([]);
    useEffect(()=>{
           const matchProducts = AllProducts.filter(pd => pd.category === category);
           setProducts(matchProducts)
    },[category])
    return (
        <div>
            <h2>select your categorys: {category}</h2>
            {
                products.map(pd => <CategoriesDetails products={pd}></CategoriesDetails>)
            }
        </div>
    );
};

export default Categories;