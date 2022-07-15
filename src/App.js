import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Map from './components/map/Map'
import './App.css';

function App() {
	return (
		<div className='app'>
			<BrowserRouter>
				<Routes>
				<Route exact path="/*" element={<Map/>} />
				</Routes>
			</BrowserRouter>
		</div>
  	)
}

export default App;
