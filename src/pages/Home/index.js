import { Link } from 'react-router-dom';

import Header from "../../components/Header/";
import Sidebar from "../../components/Sidebar/";
import Form from "../../components/Form/";
import WhatsApp from "../../components/Whatsapp/";
import Footer from "../../components/Footer/";

import { Container, Banners, BannersTop, BannersBottom } from "./styles";

import Banner1 from "../../assets/images/banner1.png";
import Banner2 from "../../assets/images/banner2.png";
import Image1 from "../../assets/images/image1.png";
import Image2 from "../../assets/images/image2.png";
import Image3 from "../../assets/images/image3.png";
import Image4 from "../../assets/images/image4.png";
import Banner3 from "../../assets/images/banner3.png";
import Banner4 from "../../assets/images/banner4.png";
import Like from "../../assets/icons/heart-like.png";

export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <Sidebar />
                <Banners>
                    <BannersTop>
                        <div className="banners1">
                            <img src={Banner1} alt="Banner" />
                            <img src={Banner2} alt="Banner" />
                        </div>

                        <div className="images1">
                            <div className="girl-model">
                                <img className="girl" src={Image1} alt="Banner" />

                                <Link href="/" className="like">
                                    <img src={Like} alt="Like Heart" />
                                </Link>
                            </div>
                            <div className="girl-model">
                                <img className="girl" src={Image2} alt="Banner" />
                                
                                <Link href="/" className="like">
                                    <img src={Like} alt="Like Heart" />
                                </Link>
                            </div>
                        </div>
                    </BannersTop>

                    <BannersBottom>
                        <div className="images2">
                            <div className="girl-model">
                                <img className="girl" src={Image3} alt="Banner" />

                                <Link href="/" className="like">
                                    <img src={Like} alt="Like Heart" />
                                </Link>
                            </div>
                            
                            <div className="girl-model">
                                <img className="girl" src={Image4} alt="Banner" />

                                <Link href="/" className="like">
                                    <img src={Like} alt="Like Heart" />
                                </Link>
                            </div>
                        </div>

                        <div className="banners2">
                            <img src={Banner3} alt="Banner" />
                            <img src={Banner4} alt="Banner" />
                        </div>
                    </BannersBottom>
                </Banners>
            </Container>
            <Form />
            <Footer />
            <WhatsApp />
        </>
    )
}