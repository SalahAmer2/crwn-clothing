import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
	<div className='homepage'>
		<Directory />

		<div className='test-warning'>
			*Note that this website is just one of my portfolio projects, it has all the functionality of a real E-Commerce website but doesn't actually sell clothes, so transactions won't actually follow through. It will give you a test credit card's details to use at checkout.*
        </div>
	</div>
)

export default HomePage;