import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import 'dotenv/config';
import process from 'process';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
	},
});
