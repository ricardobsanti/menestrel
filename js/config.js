/*
 * Configuração dos downloads — é o único arquivo que precisa mudar a cada versão.
 *
 * `arquivo` pode ser um caminho relativo (pasta downloads/ ao lado do site) ou um link completo,
 * por exemplo de uma Release do GitHub:
 *   https://github.com/USUARIO/REPO/releases/latest/download/menestrel-instalador.exe
 */
window.MENESTREL_CONFIG = {
  versao: '1.1',
  data: '23 de outubro de 2026',
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
      sha256: 'a8648d7a1df545c9ded6bccae2df429dfe3d9c600f47e5cb2789d35ac852c6c1',
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
      sha256: 'e730559426d67dacfa86178c21056b02b74c94e45f95afd4cb36ce05fbc50d25',
    },
    {
      id: 'android',
      so: 'android',
      principal: true,
      rotulo: 'APK para Android',
      detalhe: 'Instale direto no celular ou tablet. Controles de toque feitos para jogar deitado no sofá.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/latest/download/menestrel.apk',
      tamanho: '155 MB',
      requisitos: 'Android 7.0 ou mais novo',
      sha256: '90c7ae0ca1f3ee56d4bc94b3ad865b0e937b80f149f347bea065f56dc61def6c',
    },
  ],
};
