import React from 'react';
import ReactDOM from 'react-dom/client';
import Shop from './components/ImmerShop';
import { motion } from 'framer-motion';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<motion.div animate={{ x: 100 }}>Test</motion.div>
		<Shop />
	</React.StrictMode>
);
