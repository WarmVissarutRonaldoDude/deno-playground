import { serve } from './deps.ts';
import { EnvConfig, loadEnvConfig } from './config.ts';
const DEFAULT_PORT = 8000;
const PORT = Number(
  loadEnvConfig()?.[EnvConfig.PORT] ?? DEFAULT_PORT);

export const boot = async (): Promise<void> => {
  const server = serve({ port: PORT });

  console.info(`Server listen to port : ${PORT}`);
  
  for await (const req of server) {
    req.respond({ body: "Hello World\n" });
  }
}
