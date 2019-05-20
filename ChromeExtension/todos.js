const input = document.getElementById('item')

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
  }); 

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(1000);
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13) {

        var todoText = $(this).val();

        itemsArray.push(input.value);
        localStorage.setItem('items', JSON.stringify(itemsArray))

        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");

        $("input[type='text']").val('');

    }
});

    // other constant declarations here
    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

    localStorage.setItem('items', JSON.stringify(itemsArray))
    const data = JSON.parse(localStorage.getItem('items'))

    data.forEach(item => {
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + item + "</li>");
    });

$("#theplus").click(function(){
    $("input[type='text']").fadeToggle();
  });

$(".fa-trash-alt").click(function(){
    itemsArray.pop(input.value);
    localStorage.removeItem('items', JSON.stringify(itemsArray))
  });  

