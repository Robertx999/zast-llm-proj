declare namespace NodeJS {
  interface ProcessEnv {
    readonly SPOTIFY_CLIENT_SECRET: string;
  }
}

interface ImportMetaEnv {
  readonly VITE_SPOTIFY_CLIENT_ID: string;
  readonly SPOTIFY_CLIENT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
