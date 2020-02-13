import React, { Component, Fragment } from 'react';
import Media from 'react-responsive';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './Slider.scss';

class Slider extends Component {
	state = {
		currentIndex: 0,
		responsive: {
			1024: {items: 4},
			800: {items: 3},
			520: {items: 3},
			412: {items: 2},
			300: {items: 1}
		},
		items : [1, 2, 3, 4]
};


	slideTo = (i) => this.setState({ currentIndex: i });

	onSlideChanged = (e) => this.setState({ currentIndex: e.item });

	slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

	slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

	galleryItems = () => {
		return this.state.items.map((i) => <h2 key={i}> {i}</h2>);
	}

	handleOnDragStart = e => e.preventDefault();

	render() {
		const {  children } = this.props;
		const { currentIndex, galleryItems } = this.state;

		return (
			<Fragment>
				<div className="slide_wrap" >
					<button className="slider_left_btn" onClick={() => this.slidePrev()} />
					<Media maxWidth={991}>
						<AliceCarousel
							dotsDisabled ={true}
							buttonsDisabled={true}
							items={galleryItems}
							responsive={this.state.responsive}
							slideToIndex={currentIndex}
							onSlideChanged={this.onSlideChanged}
						>
							{children}
						</AliceCarousel>
					</Media>
					<Media minWidth={992}>
						<AliceCarousel
							dotsDisabled ={true}
							buttonsDisabled={true}
							items={galleryItems}
							responsive={this.state.responsive}
							slideToIndex={currentIndex}
							onSlideChanged={this.onSlideChanged}
						>
							{children}
						</AliceCarousel>
					</Media>
					<button className="slider_right_btn" onClick={() => this.slideNext()} />
				</div>
			</Fragment>
		);
	}
}

export default Slider;