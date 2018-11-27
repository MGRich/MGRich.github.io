$('.dropdown-trigger').dropdown();

document.getElementById("#pdd-btn").addEventListener("click", function() {
    var instance = M.Dropdown.getInstance(document.getElementById("#pdd-btn"));
    instance.open();
})