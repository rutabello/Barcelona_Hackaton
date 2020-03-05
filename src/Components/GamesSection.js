import React from 'react'
import './GamesSection.css'
import NavbarSection from './NavbarSection'
import Navbar from './Navbar/navbar';

function GamesSection() {
    return (
        <div>
            <Navbar />
            <section id="games-section">
                <div id="games-title">
                    <h3 id="inv-title">
                    Juegos
                    </h3>
                </div>
            </section>
        </div>
    );
}

export default GamesSection