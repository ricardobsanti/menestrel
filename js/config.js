/*
 * Configuração dos downloads — é o único arquivo que precisa mudar a cada versão.
 *
 * `arquivo` pode ser um caminho relativo (pasta downloads/ ao lado do site) ou um link completo,
 * por exemplo de uma Release do GitHub:
 *   https://github.com/USUARIO/REPO/releases/download/v1.2.1/menestrel-instalador.exe
 */
window.MENESTREL_CONFIG = {
  versao: '1.2.1',
  data: '28 de outubro de 2026',
  downloads: [
    {
      id: 'win-instalador',
      so: 'windows',
      principal: true,
      rotulo: 'Instalador para Windows',
      detalhe: 'Instala o jogo, cria atalhos e aparece em "Aplicativos" para desinstalar quando quiser.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.2.1/menestrel-instalador.exe',
      tamanho: '255 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: '8abe291d010ee2122da942fe17ceb3d26c3bae9260fb1f03ccf52ad18c6d6ded',
    },
    {
      id: 'win-portatil',
      so: 'windows',
      principal: false,
      rotulo: 'Versão portátil (Windows)',
      detalhe: 'Não instala nada: é só abrir e jogar. Cabe num pendrive.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.2.1/menestrel-portatil.exe',
      tamanho: '254 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: '7bd8a687a68e11be972a3744a0c86b3381dfde3eb8ffd372a5344e52f6733305',
    },
    {
      id: 'linux',
      so: 'linux',
      principal: true,
      rotulo: 'Pacote para Linux',
      detalhe: 'Extraia e abra o Jogar.sh — não instala nada. Funciona nas distribuições de 64 bits.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.2.1/menestrel-linux.tar.gz',
      tamanho: '269 MB',
      requisitos: 'Linux 64 bits · placa de vídeo com OpenGL/Vulkan',
      sha256: 'c1ca6df29654d97540defd58a27e5b4f2e41d5aafb9d6a188a7714701e3b473a',
    },
    {
      id: 'android',
      so: 'android',
      principal: true,
      rotulo: 'APK para Android',
      detalhe: 'Instale direto no celular ou tablet. Controles de toque feitos para jogar deitado no sofá.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.2.1/menestrel.apk',
      tamanho: '158 MB',
      requisitos: 'Android 7.0 ou mais novo',
      sha256: '1029cc8235b7be06b5a7513558f55a63395da13920c32e3f6847a3b453f5e226',
    },
  ],
};
