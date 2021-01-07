import React, { useContext } from 'react';
import { CategoriesContext } from '../../App';
import CategoriesDetails from '../CategoriesDetails/CategoriesDetails';

const Categories = (props) => {
    const category = useContext(CategoriesContext)
    return (
        <div>
            <h2>This is categories {category}</h2>
            <CategoriesDetails></CategoriesDetails>
        </div>
    );
};

export default Categories;