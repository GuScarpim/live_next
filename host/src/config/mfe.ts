export const MFE_CONFIG = {
  baseUrl: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3001' 
    : 'http://localhost:3001', // Ajuste para produção
  
  routes: {
    home: '/',
    dashboard: '/dashboard',
    profile: '/profile',
  },
  
  // Configurações de comunicação entre host e MFE
  communication: {
    allowedOrigins: ['http://localhost:3001'],
    messageTypes: {
      NAVIGATION: 'navigation',
      USER_DATA: 'user_data',
      THEME: 'theme',
    },
  },
};

export const getMFEUrl = (path: string = '') => {
  return `${MFE_CONFIG.baseUrl}${path}`;
}; 