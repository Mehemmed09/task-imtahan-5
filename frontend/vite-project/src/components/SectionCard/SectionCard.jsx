import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Cards/Card";
import "./SectionCard.scss";
function Products() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchProducts = async () => {
		try {
			const response = await axios.get("http://localhost:5000/api/products");
			setProducts(response.data);
			setLoading(false);
		} catch (error) {
			console.error("Mallar gomrukde qaldi", error.message);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div>
			<div className="OurProducts">
				<span>POPULAR PRODUCTS</span>
				<h2>Our Products</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
			</div>
			{loading ? (
				<p>Mallar gomrukden gelir</p>
			) : (
				<div className="cards">{products && products.map((item) => <Cards key={item._id} id={item._id} image={item.image} text={item.text} title={item.title} product={item} />)}</div>
			)}
		</div>
	);
}

export default Products;
