import App from "./app";
// Initialize Configuration
import { ENV_CONFIG } from "./config/env.config";

const port = ENV_CONFIG.PORT ?? ENV_CONFIG.DEFAULT_PORT;

/**
 * Start application
 */
const app = new App(port);
app.listen();
