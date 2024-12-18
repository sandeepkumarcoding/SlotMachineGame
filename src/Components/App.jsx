import React from "react";
import './index.css';
import SlotM from "./SlotMach";
import { EmojiStyle } from 'emoji-picker-react';


const App = () => {
    return (
        <>
            <h1 className="heading_style">🎰 Welcome to <span style={{ fontWeight: "bold", color: "red" }}>Slot machine game</span> 🎰</h1>
            <div className="card_info">
                <div className="slotMachine">
                    <SlotM x='😀' y='😀' z='😀' />
                    <SlotM x='✋' y='😀' z='😖' />
                    <SlotM x='😁' y='😑' z='👨‍❤️‍💋‍👨' />
                    <SlotM x='👨‍❤️‍💋‍👨' y='😑' z='😁' />
                    <SlotM x='😖' y='😛' z='😑' />
                    <SlotM x='😁' y='😁' z='😁' />
                </div>
            </div>
            <h1 className="heading_style">🎰 Thank you <span style={{ fontWeight: "bold", color: "red" }}>Play Again!</span> 🎰</h1>

        </>
    )
}

export default App;