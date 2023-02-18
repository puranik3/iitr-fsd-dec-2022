import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty, faStarHalfAlt } from '@fortawesome/free-regular-svg-icons';

import './Rating.css';

type Props = {
    rating: number,
    numRatings: number,
    color: string
};

const Rating = ( { rating, numRatings, color } : Props ) => {
    const numFullStars = Math.floor( rating );
    const numHalfStars = Math.round( rating ) - numFullStars;
    const numEmptyStars = 5 - ( numFullStars + numHalfStars );

    const starColor = {
        color
    };

    return (
        <span className="star-rating">
            {
                Array.from( { length: numFullStars } ).map(
                    item => <FontAwesomeIcon icon={faStar} style={starColor} />
                )
            }
            {
                Array.from( { length: numHalfStars } ).map(
                    item => <FontAwesomeIcon icon={faStarHalfAlt} style={starColor} />
                )
            }
            {
                Array.from( { length: numEmptyStars } ).map(
                    item => <FontAwesomeIcon icon={faStarEmpty} style={starColor} />
                )
            }
            <span>{rating}</span>
            <span>({numRatings})</span>
        </span>
    );
}

Rating.defaultProps = {
    rating: 5,
    color: 'goldenrod'
};
 
export default Rating;