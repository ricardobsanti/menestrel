/*
 * Configuração dos downloads — é o único arquivo que precisa mudar a cada versão.
 *
 * `arquivo` pode ser um caminho relativo (pasta downloads/ ao lado do site) ou um link completo,
 * por exemplo de uma Release do GitHub:
 *   https://github.com/USUARIO/REPO/releases/latest/download/menestrel-instalador.exe
 */
window.MENESTREL_CONFIG = {
  versao: '0.1.0',
  data: '22 de outubro de 2026',
  downloads: [
    {
      id: 'win-instalador',
      so: 'windows',
      principal: true,
      rotulo: 'Instalador para Windows',
      detalhe: 'Instala o jogo, cria atalhos e aparece em "Aplicativos" para desinstalar quando quiser.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/latest/download/menestrel-instalador.exe',
      tamanho: '252 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: 'a6e7deb29844ab6bb5d29645680d1837bf1bf1dc211d92a0a348d2475838ddf0',
    },
    {
      id: 'win-portatil',
      so: 'windows',
      principal: false,
      rotulo: 'Versão portátil (Windows)',
      detalhe: 'Não instala nada: é só abrir e jogar. Cabe num pendrive.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/latest/download/menestrel-portatil.exe',
      tamanho: '252 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: '0867e89ecb52de2b80f808e4629da57d60710099099b0f742fccf5373270e926',
    },
    {
      id: 'android',
      so: 'android',
      principal: true,
      rotulo: 'APK para Android',
      detalhe: 'Instale direto no celular ou tablet. Controles de toque feitos para jogar deitado no sofá.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/latest/download/menestrel.apk',
      tamanho: '156 MB',
      requisitos: 'Android 7.0 ou mais novo',
      sha256: 'cf2ec0108ea1be5febfe824b7354a40c309cefda845f1c0e0360f6ff1ee8c60d',
    },
  ],
};
