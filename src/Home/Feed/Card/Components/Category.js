import React from 'react';

const Category = ({ category }) => {
    console.log(category)
    return (

        <div className="CardCaregory">
            <b>{category}</b>
        </div>
    );
};

export default Category;