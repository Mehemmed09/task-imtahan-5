import { useContext } from "react";
import "./Card.scss";
import { BasketContext, } from './../../context/Basketcontext';
const Card = ({image,title,text,product}) => {
    const{AddBasket}=useContext(BasketContext)

	return (
		<>
			<div className="Card">
				<div className="CardImage">
					<img src={image} alt="" />
				</div>
				<div className="CardTitle">
					<span>{title}</span>
				</div>
				<div className="CardIcons">
					<div className="CardStar">
                    <i class="fa-solid fa-star"></i>
                    </div>
					<div className="CardWish">
                    <i class="fa-solid fa-heart"></i>
                    </div>
				</div>
				<div className="CardText">
					<span>{text}</span>
				</div>
				<div className="CardBtn">
					<button onClick={()=> AddBasket(product)} >CART</button>
					
					<button>Detail</button>
				</div>
			</div>
		</>
	);
};

export default Card;
