import React from 'react';

const CategoriesDetails = (props) => {
    const {count}=props;
    return (
        <div>
            <h2>This is categories details view: {count}</h2>
        </div>
    );
};

export default CategoriesDetails;