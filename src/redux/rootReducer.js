import {HomeReducer} from "./Home/HomeReducer";
import {SearchReducer} from "./Search/SearchReducer";
import {AboutReducer} from "./About/AboutReducer";
import {AdsOnElementReducer} from "./AdsOnElement/AdsOnElementReducer";
import {CareersReducer} from './Careers/CareersReducer';
import {ContactReducer} from './Contact/ContactReducer';
import {GiftCardsReducer} from "./GiftCards/GiftCardsReducer";
import {OrderReducer} from "./Order/OrderReducer";
import {OtherPagesReducer} from './OtherPages/OtherPagesReducer'
import { ReturnsReducer } from "./Returns/ReturnsReducer";
import { StorePickUpReducer } from "./StorePickUp/StorePickUpReducer";
import { ChangeLanguageReducer } from "./ChangeLanguage/ChangeLanguageReducer";

const rootReducer = {
    home: HomeReducer,
    search: SearchReducer,
    about: AboutReducer,
    adsonelement: AdsOnElementReducer,
    careers: CareersReducer,
    contact: ContactReducer, 
    giftcards: GiftCardsReducer,
    order: OrderReducer,
    otherpages: OtherPagesReducer,
    returns: ReturnsReducer,
    storepickup: StorePickUpReducer,
    changelanguage: ChangeLanguageReducer
}

export default rootReducer;