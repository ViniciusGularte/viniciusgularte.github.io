(function() {
  menu = document.getElementById('more-projects');
  menu.style.display = 'none';
})();
function more(){
 if  (menu.style.display==''){
   menu.style.display = 'none';
 }
 else {
    menu.style.display = '';
  }
}
