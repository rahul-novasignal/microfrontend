import { Button, Form, Alert } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './index.css';

function Products() {
	const [products,setProducts] = useState([]);
	const [error,setError] = useState(false);
	const [message,setMessage] = useState('');
	useEffect(()=>{
		
		axios.get("https://api-server-products.onrender.com/products")
			 .then(response =>{
			 	setProducts(response.data.data)
			 })
			 .catch(err =>{

			 })

	},[])
	function calculte_amount(price,discount){
		if(discount > 0){
			return price - (price * (discount/100))
		}else{
			return price;
		}
	}

	return (
	    <div className="container">
	    	<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
	    		{products.map(function(product,index){
	    			return (
	    					<div className="col mb-2" key={index}>
						        <div className="card shadow-sm">
						        	{product.product_image != '' &&
						        		<img src={product.product_image} width="100%" height="238"/>
						            
						        	}
						        	{product.product_image === '' &&
						        		<img src={require("./no-image.png")} width="100%" height="238"/>
						 
						        	}
						            <div className="card-body">
						              <p className="card-text">{product.product_name}</p>
                                      <p className="card-text"><span className="card-text"><b>&#8377;{calculte_amount(product.product_price,product.product_discount)}</b><s className="p-2 actual-price-text">{product.product_price}</s><b className="p-2 discount-text">{product.product_discount}% Off</b></span></p>
						              
						            </div>
						        </div>
						    </div>
	    				)
	    		})}
		       
	        </div>
	      
	    </div>
	);
}

export default Products;
