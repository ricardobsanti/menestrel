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
      arquivo: 'https://github.com/RicardoBMuller/menestrel/releases/latest/download/menestrel-instalador.exe',
      tamanho: '252 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: '7d1ca369008a44c4bf31cd63cc38e4777b903a2b3538b45452cfa954e4ed467c',
    },
    {
      id: 'win-portatil',
      so: 'windows',
      principal: false,
      rotulo: 'Versão portátil (Windows)',
      detalhe: 'Não instala nada: é só abrir e jogar. Cabe num pendrive.',
      arquivo: 'https://github.com/RicardoBMuller/menestrel/releases/latest/download/menestrel-portatil.exe',
      tamanho: '251 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: 'b8cb2664d7811a23fd5b831864b91430dcd338c2434e154cd1e91242e89c38ea',
    },
    {
      id: 'android',
      so: 'android',
      principal: true,
      rotulo: 'APK para Android',
      detalhe: 'Instale direto no celular ou tablet. Controles de toque feitos para jogar deitado no sofá.',
      arquivo: 'https://github.com/RicardoBMuller/menestrel/releases/latest/download/menestrel.apk',
      tamanho: '156 MB',
      requisitos: 'Android 7.0 ou mais novo',
      sha256: '025197b6757b16935087f98b733f1f093d62e7190b151072f8ddd7e4ca2fcd29',
    },
  ],
};
