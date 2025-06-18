import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LanguageToggle from './components/LanguageToggle';
import Navbar from './components/Navbar';
import BioWaste from './components/BioWaste';
import PlasticWaste from './components/PlasticWaste';
import MixedWaste from './components/MixedWaste';
import PaperWaste from './components/PaperWaste';
import CardboardWaste from './components/CardboardWaste';
import MetalWaste from './components/MetalWaste';
import GlassWaste from './components/GlassWaste';
import Home from './components/Home';

export default function App() {
	return (
		<div style={{ fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
			<header style={{
				position: 'sticky',
				top: 0,
				zIndex: 1000,
				backgroundColor: '#006666',
				padding: '1rem',
				color: 'white',
				boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
			}}>
				<LanguageToggle />
				<Navbar />
			</header>

			<main style={{ padding: '2rem' }}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/bio" element={<BioWaste />} />
					<Route path="/plastic" element={<PlasticWaste />} />
					<Route path="/mixed" element={<MixedWaste />} />
					<Route path="/paper" element={<PaperWaste />} />
					<Route path="/cardboard" element={<CardboardWaste />} />
					<Route path="/metal" element={<MetalWaste />} />
					<Route path="/glass" element={<GlassWaste />} />
				</Routes>
			</main>
		</div>
	);
}
