(function(){
  var $navigation = document.getElementById('navigation');
  var defaultClasses = $navigation.className;

  var onScroll = function(event){
    if(document.body.scrollTop > 20){
      $navigation.className = 'mode-light';
    }else{
      $navigation.className = defaultClasses;
    }
  };

  window.addEventListener('scroll', onScroll);
}());