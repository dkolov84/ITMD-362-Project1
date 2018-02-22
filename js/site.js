// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
document.getElementById("submit").addEventListener("click", confirm);
function confirm(event){
  for(i = 0; i < document.getElementsByTagName("input").length; i++)
  {
    if(document.getElementsByTagName("input").item(i).value === "" ||
        (document.getElementsByTagName("input").item(i).type === "radio" && document.getElementsByTagName("input").item(i).checked===false))
        {
          return false;
        }
  }
  alert("You have successfully subscribed to our Newsletter!");
  return true;
}
