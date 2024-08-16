import dotenv from 'dotenv';

dotenv.config();

const port = parseInt(process.env.PORT || '3000');

const config = { port };

export default config;
