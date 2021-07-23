import { WhatsAppChat } from "./styles";
import WhatsApp from "../../assets/images/whatsapp.png";

export default function Sidebar() {
    return (
        <WhatsAppChat>
            <a href="https://api.whatsapp.com/send?phone=5534997736190&text=Ol%C3%A1%20CAPED!%20Gostaria%20de%20saber%20mais%20sobre%20as%20promo%C3%A7%C3%B5es%20do%20site." target="_blank" rel="noreferrer">
                <img src={WhatsApp} alt="WhatsApp" />
            </a>
        </WhatsAppChat>
    )
}