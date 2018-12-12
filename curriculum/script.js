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
    console.log('pt');
    enableStylesheet(pt);
    disableStylesheet(en);
  }

  function enableEn () {
    console.log('en');
    enableStylesheet(en);
    disableStylesheet(pt);
  }


  document.querySelector("#pt").onclick = enablePt;
  document.querySelector("#en").onclick = enableEn;
