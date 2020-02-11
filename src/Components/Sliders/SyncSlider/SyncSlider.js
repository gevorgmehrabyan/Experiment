import React from "react";
import './SyncSlider.scss';
import Sync_left from '../../../Assets/svgs/Sync_left.svg';
import Sync_right from '../../../Assets/svgs/Sync_right.svg';
import sync_1 from '../../../Assets/images/sync_1.png';
import sync_2 from '../../../Assets/images/sync_2.png';
import sync_3 from '../../../Assets/images/sync_3.png';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

class SyncSlider extends React.Component {
    items = [sync_1, sync_2, sync_3, sync_2, sync_1, sync_3];

    state = {
        currentImgUrl: this.items[0],
        currentIndex: 0,
        responsive: { 1024: { items: 3 } },
        galleryItems: this.galleryItems(),
    }

    changeImg = (i) => this.setState({ currentImgUrl: i })

    slideTo = (i) => this.setState({ currentIndex: i })

    onSlideChanged = (e) => this.setState({ currentIndex: e.item })

    slideNext = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex + 1 })

    galleryItems() {
        return this.items.map((i) => <img onClick={_ => this.changeImg(i)} src={i} key={i} alt="i" />)
    }

    render() {
        const { galleryItems, responsive, currentIndex } = this.state
        return (
            <div className="global_wrap">
                <div className="image_container">
                    <img src={this.state.currentImgUrl} alt={this.state.currentImgUrl} />
                </div>
                <div className="wrap">
                    <img className='arrows' src={Sync_left} onClick={() => this.slideNext()} alt="left arrow" />
                    <AliceCarousel
                        dotsDisabled={true}
                        buttonsDisabled={true}
                        items={galleryItems}
                        responsive={responsive}
                        slideToIndex={currentIndex}
                        onSlideChanged={this.onSlideChanged}
                    />
                    <img className='arrows' src={Sync_right} onClick={() => this.slidePrev()} alt="right arrow" />
                </div>
            </div>
        )
    }
}
export default SyncSlider;