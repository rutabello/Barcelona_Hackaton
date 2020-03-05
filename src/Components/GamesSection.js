import React from 'react'
import './GamesSection.css'
import NavbarSection from './NavbarSection'

function GamesSection() {
    return (
        <div>
            <NavbarSection />
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