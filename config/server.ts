import loader from './utils/loader';

loader.load();

const port = parseInt(process.env.PORT || '3000');

const server = { port };

export default server;