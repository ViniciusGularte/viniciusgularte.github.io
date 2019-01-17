  import {download_file} from './module.js';
  const en = document.querySelector('#en-us');
  const pt = document.querySelector('#pt-br');
  enableStylesheet(en);
  function enableStylesheet (node) {
    node.media = '';
  }
  function disableStylesheet (node) {
    node.media = 'none';
  }
  function enablePt () {
    enableStylesheet(pt);
    disableStylesheet(en);
  }
  function enableEn () {
    enableStylesheet(en);
    disableStylesheet(pt);
  }
  function printCurriculum(){
    let portfolio = ''
    if(pt.media ==='none'){
        portfolio = 'curriculum.pdf'
        download_file(`./portfolios/${portfolio}`, portfolio);
    }
    else{
      portfolio = 'curriculo.pdf'
      download_file(`./portfolios/${portfolio}`, portfolio);
    }
  }

  document.querySelector("#pt").onclick = enablePt;
  document.querySelector("#en").onclick = enableEn;
  document.querySelector("#print").onclick = printCurriculum;
