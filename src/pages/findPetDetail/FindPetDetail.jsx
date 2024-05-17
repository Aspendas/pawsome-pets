import React from 'react';
import { useParams } from 'react-router-dom';

const FindPetDetail = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Find Pet Detail</h1>
            <p>ID: {id}</p>
            {/* Add your content here */}
        </div>
    );
};

export default FindPetDetail;