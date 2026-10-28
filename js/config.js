/*
 * Configuração dos downloads — é o único arquivo que precisa mudar a cada versão.
 *
 * `arquivo` pode ser um caminho relativo (pasta downloads/ ao lado do site) ou um link completo,
 * por exemplo de uma Release do GitHub:
 *   https://github.com/USUARIO/REPO/releases/download/v1.1.22/menestrel-instalador.exe
 */
window.MENESTREL_CONFIG = {
  versao: '1.1.22',
  data: '28 de outubro de 2026',
  downloads: [
    {
      id: 'win-instalador',
      so: 'windows',
      principal: true,
      rotulo: 'Instalador para Windows',
      detalhe: 'Instala o jogo, cria atalhos e aparece em "Aplicativos" para desinstalar quando quiser.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.1.22/menestrel-instalador.exe',
      tamanho: '252 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: '077466344b637833c27a2f9ccd88a53b2b7c1a03bc6d3f0e041fc678771c580b',
    },
    {
      id: 'win-portatil',
      so: 'windows',
      principal: false,
      rotulo: 'Versão portátil (Windows)',
      detalhe: 'Não instala nada: é só abrir e jogar. Cabe num pendrive.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.1.22/menestrel-portatil.exe',
      tamanho: '252 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: '5ed5c52c282fe0328edb6868e4db16548e9cf6aa9c169613ba9578d59c6fa067',
    },
    {
      id: 'linux',
      so: 'linux',
      principal: true,
      rotulo: 'Pacote para Linux',
      detalhe: 'Extraia e abra o Jogar.sh — não instala nada. Funciona nas distribuições de 64 bits.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.1.22/menestrel-linux.tar.gz',
      tamanho: '266 MB',
      requisitos: 'Linux 64 bits · placa de vídeo com OpenGL/Vulkan',
      sha256: '302613c71a11f2695fd114df27c1729d2a968fbcbf115d6b669a46e393c5f46f',
    },
    {
      id: 'android',
      so: 'android',
      principal: true,
      rotulo: 'APK para Android',
      detalhe: 'Instale direto no celular ou tablet. Controles de toque feitos para jogar deitado no sofá.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.1.22/menestrel.apk',
      tamanho: '156 MB',
      requisitos: 'Android 7.0 ou mais novo',
      sha256: '6994a03f96ba0af910f56e72f8cefea243a3acd677cc7d4655f064635e8e7b34',
    },
  ],
};
