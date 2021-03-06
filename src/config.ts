import { config } from './deps.ts';

export enum EnvConfig {
  PORT = 'PORT'
}

export type Config = {
  [key in EnvConfig]: string;
}

export const loadEnvConfig = (): Config => {
  // default will not bind to process.env
  return config({ safe: true, path: './.env' }) as Config;
} 