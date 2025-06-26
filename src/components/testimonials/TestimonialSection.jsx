import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialSection.css';
import { FaQuoteLeft } from 'react-icons/fa';
import Slider from 'react-slick';

const testimonials = [
	{
		name: 'Sarah M.',
		role: 'Retail Store Owner',
		text: 'Erudite POS made running my shop so much easier. The interface is beautiful and my staff learned it in a day!',
		image: 'https://randomuser.me/api/portraits/women/44.jpg',
	},
	{
		name: 'James K.',
		role: 'Cafe Manager',
		text: 'The analytics and reporting are a game changer. I can finally see what sells best and when.',
		image: 'https://randomuser.me/api/portraits/men/32.jpg',
	},
	{
		name: 'Amina S.',
		role: 'Salon Owner',
		text: 'Setup was a breeze and the support team is fantastic. Highly recommend for any business!',
		image: 'https://randomuser.me/api/portraits/women/65.jpg',
	},
	{
		name: 'David L.',
		role: 'Hotel Manager',
		text: 'Switching to Erudite POS was the best decision for our front desk. Fast, reliable, and great support.',
		image: 'https://randomuser.me/api/portraits/men/41.jpg',
	},
	{
		name: 'Priya R.',
		role: 'Grocery Store Owner',
		text: 'Inventory management is now effortless. I love the real-time updates and easy reporting.',
		image: 'https://randomuser.me/api/portraits/women/68.jpg',
	},
];

const sliderSettings = {
	arrows: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};

const TestimonialSection = () => (
	<section className="testimonial-section">
		<h2 className="testimonial-title">What Our Customers Say</h2>
		<p className="testimonial-desc">
			Real feedback from business owners who use Erudite POS every day.
		</p>
		<div className="testimonial-cards-container">
			<Slider {...sliderSettings}>
				{testimonials.map((t, idx) => (
					<div className="testimonial-card" key={idx}>
						<FaQuoteLeft className="testimonial-quote-icon" />
						<p className="testimonial-text">{t.text}</p>
						<div className="testimonial-user-row">
							<img
								src={t.image}
								alt={t.name}
								className="testimonial-user-img"
							/>
							<div className="testimonial-user-info">
								<div className="testimonial-user-name">{t.name}</div>
								<div className="testimonial-user-role">{t.role}</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	</section>
);

export default TestimonialSection;
