import React from 'react';

const ExampleCarouselImage = ({ imageUrl, altText }) => {
    return (
        <img 
            src={imageUrl} 
        alt={altText} 
        className="d-block w-100" 
        style={{ height: '400px', objectFit: 'cover' }}
    />
    );
};

export default ExampleCarouselImage;