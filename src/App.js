import React, { useState } from 'react';
import './App.css';

function App() {
	const [currImg, setCurrImg] = useState(0);
	const imgArr = [
		'DSC_0026.JPG',
		'DSC_0027.JPG',
		'DSC_0028.JPG',
		'DSC_0029.JPG',
		'DSC_0030.JPG',
		'DSC_0031.JPG',
		'DSC_0032.JPG',
		'DSC_0033.JPG',
		'DSC_0034.JPG',
	];

	return (
		<div
			className="app"
			style={{
				backgroundImage: `url(images/${imgArr[Math.abs(currImg) % imgArr.length]})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
			}}
		>
			<div
				className='float-left left-image-flip'
				onClick={() => setCurrImg(currImg => currImg - 1)}
			/>
			<div
				className='float-right right-image-flip'
				onClick={() => setCurrImg(currImg => currImg + 1)}
			/>
		</div>
	);
}

export default App;
