
import {FaStar, FaStarHalf, FaRegStar} from 'react-icons/fa'
export default function Testimonyal({text, author , numberOfStars, job}: any){

    const stars = []
    let substractStars = numberOfStars;
    for (let i = 0; i < 5; i++) {
        if (substractStars > 0.5) {
            substractStars -= 1
            stars.push( <FaRegStar/>)
        }
        else if(substractStars <= 0.5 && substractStars > 0) {
            substractStars -= 0.5
            stars.push( <FaStarHalf/>)
        }
        else
            stars.push( <FaStar/>)
    }

    return (
        <div className='testimonyal'>
            <p>
                &#34;{text}&#34;
            </p>
            <cite>{author}</cite>
            <div className="stars">

                {
                    stars
                }
            </div>
            <span>
                {job}
            </span>
        </div>
    )
}