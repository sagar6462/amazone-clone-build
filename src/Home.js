import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className='home'>
			<div className='home__container'>
				<img
					className='home__image'
					src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
					alt='Banner'
				/>
				<div className='home__row'>
					<Product
						id='1'
						title='Product 1 this is the first product that we are going to sell in this chapter'
						price={29.99}
						image='https://images-na.ssl-images-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg'
						rating={3}
					/>
					<Product
						id='2'
						title='Product 2'
						price={29.99}
						image='https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg'
						rating={3}
					/>
				</div>
				<div className='home__row'>
					<Product
						id='3'
						title='Product 3'
						price={29.99}
						image='https://cdn.pixabay.com/photo/2020/05/26/09/32/product-5222398_960_720.jpg'
						rating={3}
					/>
					<Product
						id='4'
						title='Product 4'
						price={29.99}
						image='https://upload.wikimedia.org/wikipedia/commons/1/11/IPhone_11_Product_RED.jpg'
						rating={3}
					/>
					<Product
						id='5'
						title='Product 5'
						price={29.99}
						image='https://elcopcbonline.com/photos/product/4/176/4.jpg'
						rating={3}
					/>
				</div>
				<div className='home__row'>
					<Product
						id='6'
						title='Product 6'
						price={29.99}
						image='https://img.freepik.com/free-vector/beauty-skin-care-background_52683-728.jpg?size=626&ext=jpg'
						rating={3}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
