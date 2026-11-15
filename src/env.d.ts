/// <reference types="astro/client" />

declare module "virtual:astro-sage/user-config" {
  const config: import("astro-sage").SageConfig;
  export default config;
  export const publicFiles: string[];
  export const packageDir: string;
}
