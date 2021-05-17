import { useState } from 'react';
import './AdDesigner.css';

function AdDesigner() {

const[flavor, setFlavor] = useState("")
const [size, setSize] = useState(24);
const [darkTheme, setDarkTheme] = useState(false);

const turnDark = () => {
    setDarkTheme(true);
};

let themeClass ="";
if (darkTheme) {
    themeClass = " dark"
};

function sizeUp() {
    setSize(prev => prev + 1);
};

function sizeDown() {
    setSize(prev => prev -1);
};

const sizeStyle = { fontSize: size + "px"};

return(
    <div className="AdDesigner">
        <h2>Ad Designer</h2>
        <div className={"AdDesigner__box" + themeClass}>
            <p>Vote for</p>
            <p className="Flavor" style={sizeStyle}>{flavor}</p>
        </div>

        <h3>What to Support</h3>
        <p>
            <button disabled={flavor === "Chocolate"} onClick={() => setFlavor("Chocolate")}>Chocolate</button>
            <button disabled={flavor === "Vanilla"} onClick={() => setFlavor("Vanilla")}>Vanilla</button>
            <button disabled={flavor === "Strawberry"} onClick={() => setFlavor("Strawberry")}>Strawberry</button>
        </p>
        <h3>Color Theme</h3>
        <div>
            <button onClick={() => setDarkTheme(false)}>Light</button>
            <button onClick={turnDark}>Dark</button>
        </div>

        <h3>Font Size</h3>
        <button onClick={sizeDown}>Down</button>
        {size}
        <button onClick={sizeUp}>Up</button>
    </div>
);
}

export default AdDesigner;
