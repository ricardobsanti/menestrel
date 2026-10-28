/*
 * Configuração dos downloads — é o único arquivo que precisa mudar a cada versão.
 *
 * `arquivo` pode ser um caminho relativo (pasta downloads/ ao lado do site) ou um link completo,
 * por exemplo de uma Release do GitHub:
 *   https://github.com/USUARIO/REPO/releases/download/v1.2.0/menestrel-instalador.exe
 */
window.MENESTREL_CONFIG = {
  versao: '1.2.0',
  data: '28 de outubro de 2026',
  downloads: [
    {
      id: 'win-instalador',
      so: 'windows',
      principal: true,
      rotulo: 'Instalador para Windows',
      detalhe: 'Instala o jogo, cria atalhos e aparece em "Aplicativos" para desinstalar quando quiser.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.2.0/menestrel-instalador.exe',
      tamanho: '255 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: '62a18c674484c85f18b12d6fb2761ad98a4f16ef53906d47bd02dc41a90146c1',
    },
    {
      id: 'win-portatil',
      so: 'windows',
      principal: false,
      rotulo: 'Versão portátil (Windows)',
      detalhe: 'Não instala nada: é só abrir e jogar. Cabe num pendrive.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.2.0/menestrel-portatil.exe',
      tamanho: '254 MB',
      requisitos: 'Windows 10 ou 11 · 64 bits',
      sha256: 'ca9ecba298fa8e5947d29ef29ae64e359842f0424b244df66d021f9ed4a19bab',
    },
    {
      id: 'linux',
      so: 'linux',
      principal: true,
      rotulo: 'Pacote para Linux',
      detalhe: 'Extraia e abra o Jogar.sh — não instala nada. Funciona nas distribuições de 64 bits.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.2.0/menestrel-linux.tar.gz',
      tamanho: '269 MB',
      requisitos: 'Linux 64 bits · placa de vídeo com OpenGL/Vulkan',
      sha256: '422f25a562bf806bd51861c352287fe1222e104d0b8e7dbe7b75bf24a46a55f5',
    },
    {
      id: 'android',
      so: 'android',
      principal: true,
      rotulo: 'APK para Android',
      detalhe: 'Instale direto no celular ou tablet. Controles de toque feitos para jogar deitado no sofá.',
      arquivo: 'https://github.com/ricardobsanti/menestrel/releases/download/v1.2.0/menestrel.apk',
      tamanho: '158 MB',
      requisitos: 'Android 7.0 ou mais novo',
      sha256: '786f01d92d3cd0475291f9a6bc4888a28c75f3936991d89726404b2de2806300',
    },
  ],
};
