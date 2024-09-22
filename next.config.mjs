import path from 'path';

export default {
  webpack: (config) => {
    // Menggunakan alias '@' yang mengarah ke folder 'src'
    config.resolve.alias['@'] = path.resolve('./src'); // Sesuaikan 'src' sesuai dengan struktur proyekmu
    return config;
  },
};
