import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.devinjsc.app',
  appName: 'DEVIN JSC',
  webDir: 'dist',
  backgroundColor: '#015AB1',
  server: {
    androidScheme: 'https',
  },
  ios: {
    contentInset: 'automatic',
  },
}

export default config
