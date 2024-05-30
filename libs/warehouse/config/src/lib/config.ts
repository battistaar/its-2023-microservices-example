export const WAREHOUSE_MESSAGE_PORT = process.env['WAREHOUSE_MESSAGE_PORT'] ? parseInt(process.env['WAREHOUSE_MESSAGE_PORT']) : 5000;
export const WAREHOUSE_MESSAGE_HOST = process.env['WAREHOUSE_MESSAGE_HOST'] ? process.env['WAREHOUSE_MESSAGE_HOST'] : '127.0.0.1';

export const REDIS_HOST = process.env['REDIS_HOST'] || 'localhost';
export const REDIS_PORT = process.env['REDIS_PORT'] ? parseInt(process.env['REDIS_PORT']) : 6379;
