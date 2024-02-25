import React, { useState, useEffect } from 'react';
import { ParallaxBannerLayer } from 'react-scroll-parallax';

// Interface for component props
interface ParallaxImageLoaderProps {
    image: string;
    blurImage: string;
    speed: number;
}

const ParallaxImageLoader: React.FC<ParallaxImageLoaderProps> = ({ image, blurImage, speed }) => {
    const [loaded, setLoaded] = useState(false);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
            setLoaded(true);
            setOpacity(1); // Start transition to full opacity when image is loaded
        };
    }, [image]);

    return (

        <ParallaxBannerLayer
            image={image}
            speed={speed}
            style={{ height: '100%' }} // Ensure the layer covers the desired area, adjust as needed
        />

    );
};
export default ParallaxImageLoader;
