import { CDN_URL } from "../utils/constant";

const Cart = (props) => {
    
    const {resData} = props;

    const{
      cloudinaryImageId,
      name,
      avgRating,
      costForTwo,
      cuisines,
    } = resData?.info;
    return (
      <div className="cart">
        <img src={CDN_URL+cloudinaryImageId} alt="" />
        <div className="content">
        <h2>{name}</h2>
        <p>{cuisines.join(",")}</p>
        <h4>{avgRating}star</h4>
        <h4>{costForTwo}</h4>
        </div>
      </div>
    )
}
export default Cart