import Header from "../../components/Header/";
import Sidebar from "../../components/Sidebar/";
import Products from "../../components/Products/";
import Form from "../../components/Form/";
import WhatsApp from "../../components/Whatsapp/";
import Footer from "../../components/Footer/";

import { Container } from "./styles";

export default function Store() {
    return (
        <>
            <Header />
            <Container>
                <Sidebar />
                <Products />
            </Container>
            <Form />
            <Footer />
            <WhatsApp />
        </>
    )
}