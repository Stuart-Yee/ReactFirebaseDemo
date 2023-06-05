import { useEffect, useState } from "react";
import BlueButton from "./BlueButton";
import { getLoggedInUser } from "../utils/authentication";

const RateIt = ({recipe}) => {

    const [rating, setRating] = useState(5)
    const [userId, setUserId] = useState(null);
    const [rated, setRated] = useState(false);

    const changeHandler = (e) => {
        setRating(e.target.value);
    }

    useEffect(()=>{
        const user = getLoggedInUser();
        if (user) {
            setUserId(user.uid);
            const myRating = recipe.ratings[user.uid]
            if (myRating) {
                setRating(myRating);
                setRated(true);
            }
        }
    }, [recipe])

    const rateHandler = () => {
        recipe.submitRating(userId, rating);
    }

    return (
        <div>
            {rated? <label htmlFor="rateIt">You Rated It:</label>:
                <label htmlFor="rateIt">Rate It:</label>}
            <select 
                name="rateIt"
                value={rating}
                onChange={changeHandler}
                >
                {[1,2,3,4,5].map((val, idx)=>{
                    return (
                        <option key={idx} value={val}>
                            {val}
                        </option>
                    )
                })}
            </select>
            <BlueButton onClick={rateHandler}>
                {rated? <>Update Rating</> : <>Submit</>}
            </BlueButton>
        </div>
    )

}

export default RateIt;