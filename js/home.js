$(document).on('click', '.categorybox', function(){
    localStorage.setItem("ClickedId", this.id);
    window.location.href= 'Rankings.html'
});