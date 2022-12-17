import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';

import './Rating.css';

interface Props {
    value: number,
    numRatings: number
};

const Rating = ( { value, numRatings } : Props ) => {
    const numFullStars = Math.floor( value );
    const numHalfStars = Math.round( value ) - numFullStars; // 0 / 1
    const numEmptyStars = 5 - ( numFullStars + numHalfStars );

    return (
        <span className="star-rating">
            {
                (new Array( numFullStars ).fill( 0 )).map(
                    ( star, idx ) => <FontAwesomeIcon icon={faStar} key={idx} />
                )
            }
            {
                new Array( numHalfStars ).fill( 0 ).map(
                    ( star, idx ) => <FontAwesomeIcon icon={faStarHalfAlt} key={idx} />
                )
            }
            {
                new Array( numEmptyStars ).fill( 0 ).map(
                    ( star, idx ) => <FontAwesomeIcon icon={faEmptyStar} key={idx} />
                )
            }
            {value} ({numRatings} rated)
        </span>
    );
}
 
export default Rating;