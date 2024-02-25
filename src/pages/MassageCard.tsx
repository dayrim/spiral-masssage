import * as React from "react";

interface MassageCardProps {
    title: string;
    description: string;
    imageUrl: string;
    index: number;
}

const MassageCard: React.FC<MassageCardProps> = ({ title, description, imageUrl, index }) => {
    const isOdd = index % 2 !== 0;
    return (
        <div className={`massage-card ${isOdd ? 'odd' : 'even'}`}>
            {isOdd && <img src={imageUrl} alt={title} className="massage-image" />}
            <div className="massage-text">
                <h2 className="massage-title">{title}</h2>
                <p className="massage-description">{description}</p>
            </div>
            {!isOdd && <img src={imageUrl} alt={title} className="massage-image" />}
        </div>
    );
};

export default MassageCard;
