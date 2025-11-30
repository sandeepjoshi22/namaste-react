import { imageBaseUrl } from "../utils/constants";

const RestaurantCard = (props) => {
    const {data} = props;
    const {name, avgRating, costForTwo, cloudinaryImageId} = data?.info;
    return (
        <div className="card-rest">
            <img alt="rest-img" src={imageBaseUrl+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
        </div>
    )
}
export default RestaurantCard;