/*
 * Configuração dos downloads — é o único arquivo que precisa mudar a cada versão.
 *
 * `arquivo` pode ser um caminho relativo (pasta downloads/ ao lado do site) ou um link completo,
 * por exemplo de uma Release do GitHub:
 *   https://github.com/USUARIO/REPO/releases/download/v1.5.0/menestrel-instalador.exe
 */
window.MENESTREL_CONFIG = {
  versao: '1.5.0',
  data: '5 de novembro de 2026',
  downloads: [
    {
      id: 'win-instalador',
      so: 'windows',
      principal: true,
      rotulo: 'Instalador para Windows',
      detalhe: 'Instala o jogo, cria atalhos e aparece em "Aplicativos" para desinstalar quando quiser.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.5.0/menestrel-instalador.exe',
      tamanho: '263 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: '07de45aa0ed502848a67ba861ec52f8dcf9f9f9236f4ecb25f83ade863e3dfb2',
    },
    {
      id: 'win-portatil',
      so: 'windows',
      principal: false,
      rotulo: 'Versão portátil (Windows)',
      detalhe: 'Não instala nada: é só abrir e jogar. Cabe num pendrive.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.5.0/menestrel-portatil.exe',
      tamanho: '262 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: '66f96fd588b2f961280398c36df3357d664e7186013ab3fc8b05ac0e4c47d172',
    },
    {
      id: 'linux',
      so: 'linux',
      principal: true,
      rotulo: 'Pacote para Linux',
      detalhe: 'Extraia e abra o Jogar.sh — não instala nada. Funciona nas distribuições de 64 bits.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.5.0/menestrel-linux.tar.gz',
      tamanho: '277 MB',
      requisitos: 'Linux 64 bits · placa de vídeo com OpenGL/Vulkan',
      sha256: 'adcdac8383d61e35760481af70df9ef36d6e82eac5c24852d1e003e774c26ae4',
    },
    {
      id: 'android',
      so: 'android',
      principal: true,
      rotulo: 'APK para Android',
      detalhe: 'Instale direto no celular ou tablet. Controles de toque feitos para jogar deitado no sofá.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.5.0/menestrel.apk',
      tamanho: '166 MB',
      requisitos: 'Android 7.0 ou mais novo',
      sha256: 'c41d4d6320134b61181a08c143294334c939e42d1f8076aae14f0fb09e135f42',
    },
  ],
};
