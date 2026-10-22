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
      sha256: '1e6a8c6d082fdaff195ca431266d98b5938786890b88f3505a3c51839dbc7772',
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
      sha256: 'adc3d64312d5332516670b08c0563fa5e4d9ef3973b1371ea0621eb9114f4060',
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
      sha256: '3892ce45356440ca892869bcedcec6e062a70e49ef8f258c3c5ac820b84752ad',
    },
  ],
};
