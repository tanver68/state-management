import React from 'react';
import CategoriesDetails from '../CategoriesDetails/CategoriesDetails';

const Categories = (props) => {
    const {count} = props;
    return (
        <div>
            <h2>This is categories</h2>
            <CategoriesDetails></CategoriesDetails>
        </div>
    );
};

export default Categories;