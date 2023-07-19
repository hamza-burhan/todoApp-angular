import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dreanJournal.com',
  appName: 'frontEnd',
  webDir: 'dist/front-end',
  server: {
    androidScheme: 'https'
  }
};

export default config;
