/*
 * Configuração dos downloads — é o único arquivo que precisa mudar a cada versão.
 *
 * `arquivo` pode ser um caminho relativo (pasta downloads/ ao lado do site) ou um link completo,
 * por exemplo de uma Release do GitHub:
 *   https://github.com/USUARIO/REPO/releases/download/v1.1.23/menestrel-instalador.exe
 */
window.MENESTREL_CONFIG = {
  versao: '1.1.23',
  data: '28 de outubro de 2026',
  downloads: [
    {
      id: 'win-instalador',
      so: 'windows',
      principal: true,
      rotulo: 'Instalador para Windows',
      detalhe: 'Instala o jogo, cria atalhos e aparece em "Aplicativos" para desinstalar quando quiser.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.1.23/menestrel-instalador.exe',
      tamanho: '255 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: '4fe1caf90d77c6fd5c9c72084ca4220e6778df50eb48bb5aeaf6e1127f3103dd',
    },
    {
      id: 'win-portatil',
      so: 'windows',
      principal: false,
      rotulo: 'Versão portátil (Windows)',
      detalhe: 'Não instala nada: é só abrir e jogar. Cabe num pendrive.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.1.23/menestrel-portatil.exe',
      tamanho: '254 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: '43cb738257b6a9c6394a77b07b7f34536d46a2b6cfc3cc79d8768cd3244dfbc1',
    },
    {
      id: 'linux',
      so: 'linux',
      principal: true,
      rotulo: 'Pacote para Linux',
      detalhe: 'Extraia e abra o Jogar.sh — não instala nada. Funciona nas distribuições de 64 bits.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.1.23/menestrel-linux.tar.gz',
      tamanho: '269 MB',
      requisitos: 'Linux 64 bits · placa de vídeo com OpenGL/Vulkan',
      sha256: '02688e051fbae08c861b02f14e7bc74f958ac52f5adb6e680dd621ada018bb2f',
    },
    {
      id: 'android',
      so: 'android',
      principal: true,
      rotulo: 'APK para Android',
      detalhe: 'Instale direto no celular ou tablet. Controles de toque feitos para jogar deitado no sofá.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.1.23/menestrel.apk',
      tamanho: '158 MB',
      requisitos: 'Android 7.0 ou mais novo',
      sha256: 'c33d2a1d5792c5d83f7709abbdce24dd10f8b071cef25685b3d28ff5bdb964a0',
    },
  ],
};
