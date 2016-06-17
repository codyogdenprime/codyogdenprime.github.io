var lastperson = new Array();

  function add_person() {
    if(lastperson.length > 0) {
    lastperson[0].appendTo($(".group:first-of-type"));
    lastperson.splice(0, 1);
    console.log("Added a person!");
    }
  }

$().ready(function() {

  
  

  //Removes the person who is clicked.
  $(".group:first-of-type > li").on("click",function(){
      if($(this).parent().children().length > 1 ) {
      lastperson.push($(this).detach());
      console.log("Removed a person!");
      }
  });

console.log($(".group li").length);
  
});