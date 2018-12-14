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
    if(pt.media ==='none'){
        console.log("English curriculum");
        return;
    }
  }

  document.querySelector("#pt").onclick = enablePt;
  document.querySelector("#en").onclick = enableEn;
  document.querySelector("#print").onclick = printCurriculum;
