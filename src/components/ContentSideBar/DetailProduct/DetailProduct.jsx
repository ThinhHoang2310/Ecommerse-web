import { useContext } from "react";
import { SideBarContext } from "@/contexts/SideBarProvider";
import styles from "./styles.module.scss";
import SliderComon from "@components/SliderComon/SliderComon";

function DetailProduct() {
    const {container} = styles;

    const {detailProduct} =useContext(SideBarContext);


    return <div className={container}>
        <SliderComon data={detailProduct.images}/>
    </div>;
}

export default DetailProduct;