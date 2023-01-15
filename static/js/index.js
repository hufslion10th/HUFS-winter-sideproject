var div2 = document.getElementsByClassName("div2");
div2[0].classList.add("clicked")

function handleClick(event) {
  console.log(event.target);
  console.log(event.target.classList);
  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (var i = 0; i < div2.length; i++) {
        div2[i].classList.remove("clicked");
    }
    
    event.target.classList.add("clicked");
    console.log(event.target)
  }
}

function init() {
  for (var i = 0; i < div2.length; i++) {
    div2[i].addEventListener("click", handleClick);
  }
}

function reply_click(clicked_id)
{
  $("#explain2").html(explain2[clicked_id]);
}

init();