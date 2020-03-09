import order_1 from '../Assets/images/order_1.png';
import order_2 from '../Assets/images/order_2.png';
import slide1 from "../Assets/images/slide1.png";
import slide2 from "../Assets/images/slide2.png";
import slide3 from "../Assets/images/slide3.png";
import slide4 from "../Assets/images/slide4.png";

export const options = ['last 30 days ', 'last 60 days ', '2019', '2018', '2017', '2016'];
export const orderList = [
    {
        image: order_1,
        name: 'GreenBeans Ultra meat grinder with 4 different knives',
        count: 2,
        orderDate: '29 Oct 2019',
        delDate: 'Not delivered yet',
        orderNumber: 164855547889,
        orderTotal: '25.80',
        shippingType: 'free',
        deliveryTime: '18 Aug 2019',
        userFullName: 'Rachel Green',
        address: 'Some street 11, some apt 22, Yerevan, Armenia, 92007',
        paymentMethod: 'Visa ending in 8897',
        available: false
    },
    {
        image: order_2,
        name: 'DJI Phantom Pro 4, only for professionals',
        count: 1,
        orderDate: '16 Aug 2019',
        delDate: '18 Aug 2019',
        orderNumber: 164855547889,
        orderTotal: '25.80',
        shippingType: 'free',
        deliveryTime: '18 Aug 2019',
        userFullName: 'Rachel Green',
        address: 'Some street 11, some apt 22, Yerevan, Armenia, 92007',
        paymentMethod: 'Visa ending in 8897',
        available: true
    }
]

export const  sliderList = [
    {image: slide1, name: 'HOTOR Stand for Iphone', price: '$31.50'},
    {image: slide2, name: 'Lesco Domestic 232V Adaptor ', price: '$4.45'},
    {image: slide3, name: 'Solimo mobile cover', price: '$10.50'},
    {image: slide4, name: 'ADAS 7.84 Dash Cam', price: '$244.45'}
];