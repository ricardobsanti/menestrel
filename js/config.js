/*
 * Configuração dos downloads — é o único arquivo que precisa mudar a cada versão.
 *
 * `arquivo` pode ser um caminho relativo (pasta downloads/ ao lado do site) ou um link completo,
 * por exemplo de uma Release do GitHub:
 *   https://github.com/USUARIO/REPO/releases/download/v1.3.0/menestrel-instalador.exe
 */
window.MENESTREL_CONFIG = {
  versao: '1.3.0',
  data: '28 de outubro de 2026',
  downloads: [
    {
      id: 'win-instalador',
      so: 'windows',
      principal: true,
      rotulo: 'Instalador para Windows',
      detalhe: 'Instala o jogo, cria atalhos e aparece em "Aplicativos" para desinstalar quando quiser.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.3.0/menestrel-instalador.exe',
      tamanho: '255 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: '17ed5e8357e636c9a45c3a83fbdeaf511b38ee5d5a55dbcf8a00678d4b55bf26',
    },
    {
      id: 'win-portatil',
      so: 'windows',
      principal: false,
      rotulo: 'Versão portátil (Windows)',
      detalhe: 'Não instala nada: é só abrir e jogar. Cabe num pendrive.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.3.0/menestrel-portatil.exe',
      tamanho: '254 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: '6ebdf821dd06e348a110889dbdac3c6bb3f381a18196cdbf50d9524b555bf6f7',
    },
    {
      id: 'linux',
      so: 'linux',
      principal: true,
      rotulo: 'Pacote para Linux',
      detalhe: 'Extraia e abra o Jogar.sh — não instala nada. Funciona nas distribuições de 64 bits.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.3.0/menestrel-linux.tar.gz',
      tamanho: '269 MB',
      requisitos: 'Linux 64 bits · placa de vídeo com OpenGL/Vulkan',
      sha256: '2eb2fcaee99b0f1e5445dfa07bf4250361ae8ac8f61825d46387ca1898d17a60',
    },
    {
      id: 'android',
      so: 'android',
      principal: true,
      rotulo: 'APK para Android',
      detalhe: 'Instale direto no celular ou tablet. Controles de toque feitos para jogar deitado no sofá.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.3.0/menestrel.apk',
      tamanho: '158 MB',
      requisitos: 'Android 7.0 ou mais novo',
      sha256: '69d18c340e8189f2e47175e83694f32cd4322adcf5256ccde9a290da5165a2b7',
    },
  ],
};
