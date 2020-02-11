import React, { Component, Fragment } from 'react';
import Media from 'react-responsive';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './Slider.scss';

class Slider extends Component {
	state = {
		currentIndex: 0,
	};

	slideTo = (i) => this.setState({ currentIndex: i });

	onSlideChanged = (e) => this.setState({ currentIndex: e.item });

	slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

	slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

	galleryItems = () => {
		const { items } = this.props;
		return items.map((i) => <h2 key={i}> {i}</h2>);
	}

	handleOnDragStart = e => e.preventDefault();

	render() {
		const { responsive, showArrows, children, } = this.props;
		const { currentIndex, galleryItems } = this.state;
		return (
			<Fragment>
				<div className="slide_wrap" >
					{showArrows && <button className="slider_left_btn" onClick={() => this.slidePrev()} />}
					<Media maxWidth={991}>
						<AliceCarousel
							dotsDisabled ={true}
							buttonsDisabled={true}
							items={galleryItems}
							responsive={responsive}
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
							responsive={responsive}
							slideToIndex={currentIndex}
							onSlideChanged={this.onSlideChanged}
						>
							{children}
						</AliceCarousel>
					</Media>
					{showArrows && <button className="slider_right_btn" onClick={() => this.slideNext()} />}
				</div>
			</Fragment>
		);
	}
}

export default Slider;