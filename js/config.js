/*
 * Configuração dos downloads — é o único arquivo que precisa mudar a cada versão.
 *
 * `arquivo` pode ser um caminho relativo (pasta downloads/ ao lado do site) ou um link completo,
 * por exemplo de uma Release do GitHub:
 *   https://github.com/USUARIO/REPO/releases/download/v1.3.2/menestrel-instalador.exe
 */
window.MENESTREL_CONFIG = {
  versao: '1.3.2',
  data: '29 de outubro de 2026',
  downloads: [
    {
      id: 'win-instalador',
      so: 'windows',
      principal: true,
      rotulo: 'Instalador para Windows',
      detalhe: 'Instala o jogo, cria atalhos e aparece em "Aplicativos" para desinstalar quando quiser.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.3.2/menestrel-instalador.exe',
      tamanho: '255 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: 'e0a80c28787677cb163786bc0ac7586da14f23147aa5a005883946acab300b03',
    },
    {
      id: 'win-portatil',
      so: 'windows',
      principal: false,
      rotulo: 'Versão portátil (Windows)',
      detalhe: 'Não instala nada: é só abrir e jogar. Cabe num pendrive.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.3.2/menestrel-portatil.exe',
      tamanho: '254 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: 'a5a292882c33902f6738ee6aeb0ce9fd63db2f9835302331d55606de67a83168',
    },
    {
      id: 'linux',
      so: 'linux',
      principal: true,
      rotulo: 'Pacote para Linux',
      detalhe: 'Extraia e abra o Jogar.sh — não instala nada. Funciona nas distribuições de 64 bits.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.3.2/menestrel-linux.tar.gz',
      tamanho: '269 MB',
      requisitos: 'Linux 64 bits · placa de vídeo com OpenGL/Vulkan',
      sha256: '02b3949c7630e8916f26f73310261b39abbf4ad7705f9410f5b969a3044580b7',
    },
    {
      id: 'android',
      so: 'android',
      principal: true,
      rotulo: 'APK para Android',
      detalhe: 'Instale direto no celular ou tablet. Controles de toque feitos para jogar deitado no sofá.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.3.2/menestrel.apk',
      tamanho: '158 MB',
      requisitos: 'Android 7.0 ou mais novo',
      sha256: '96a8b36866d533f6d45556b458a2d51dc07742b7c4fac8d5324acfd9b02f5b6f',
    },
  ],
};
