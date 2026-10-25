/*
 * Configuração dos downloads — é o único arquivo que precisa mudar a cada versão.
 *
 * `arquivo` pode ser um caminho relativo (pasta downloads/ ao lado do site) ou um link completo,
 * por exemplo de uma Release do GitHub:
 *   https://github.com/USUARIO/REPO/releases/download/v1.1.13/menestrel-instalador.exe
 */
window.MENESTREL_CONFIG = {
  versao: '1.1.13',
  data: '25 de outubro de 2026',
  downloads: [
    {
      id: 'win-instalador',
      so: 'windows',
      principal: true,
      rotulo: 'Instalador para Windows',
      detalhe: 'Instala o jogo, cria atalhos e aparece em "Aplicativos" para desinstalar quando quiser.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.1.13/menestrel-instalador.exe',
      tamanho: '252 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: '4e3dceee6e218474e0c723ea440dd733ac75b55e631ec466dea19e8b0b85a66b',
    },
    {
      id: 'win-portatil',
      so: 'windows',
      principal: false,
      rotulo: 'Versão portátil (Windows)',
      detalhe: 'Não instala nada: é só abrir e jogar. Cabe num pendrive.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.1.13/menestrel-portatil.exe',
      tamanho: '252 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: 'e0f32166ceeba79eb76859b3370294b7c6be5dcddc97736097dd9ddaa22a6e89',
    },
    {
      id: 'linux',
      so: 'linux',
      principal: true,
      rotulo: 'Pacote para Linux',
      detalhe: 'Extraia e abra o Jogar.sh — não instala nada. Funciona nas distribuições de 64 bits.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.1.13/menestrel-linux.tar.gz',
      tamanho: '266 MB',
      requisitos: 'Linux 64 bits · placa de vídeo com OpenGL/Vulkan',
      sha256: 'bf7175589dd0fd69b498df06b9c1936762d1d0a95d7457246ebfad305a7402f0',
    },
    {
      id: 'android',
      so: 'android',
      principal: true,
      rotulo: 'APK para Android',
      detalhe: 'Instale direto no celular ou tablet. Controles de toque feitos para jogar deitado no sofá.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.1.13/menestrel.apk',
      tamanho: '155 MB',
      requisitos: 'Android 7.0 ou mais novo',
      sha256: 'f0fe743dea3f2b53372abb6961a367653bdcb926dbfd5b485b67ddc88fbeec9c',
    },
  ],
};
