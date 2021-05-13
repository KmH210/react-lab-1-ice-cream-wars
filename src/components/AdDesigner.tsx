import {useState} from 'react';
import './AdDesigner.css';

function AdDesigner() {

const[flavors, setFlavors] = useState("Mint Chocolate Chip")

function pickMintChocolateChip(){
    setFlavors("Mint Chocolate Chip");
}
function pickCookieDough(){
    setFlavors("Cookie Dough");
}

function pickCookiesAndCream(){
    setFlavors("Cookies and Cream");
}

// const [click, setClick] = useState(true)
// function clickedButton(){
//     setClick(true)
// }

// let additionalClasses = "";
// if(click){
//     additionalClasses = " clicked"
// }


    return(
        <div className={"AdDesigner" }>
                <h1>Ad Designer</h1>
                    <div className="AdDesigner__box">
                    <p>Vote For</p>
                    <h3>{flavors}</h3>
                </div>
            <h2>What to Support</h2>
            <button onClick={pickMintChocolateChip}>Mint Chocolate Chip</button>
            <button onClick={pickCookieDough}>Cookie Dough</button>
            <button onClick={pickCookiesAndCream}>Cookies and Cream</button>
            <h2>Color Theme</h2>
            <button>Light</button>
            <button>Dark</button>
            <h2>Font Size</h2>
            <button>Down</button>
            {/* <p>{fontSize}</p> */}
            <button>Up</button>

        </div>
    )


}





export default AdDesigner;
