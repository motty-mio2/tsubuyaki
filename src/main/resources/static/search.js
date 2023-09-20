document.addEventListener("DOMContentLoaded", function () {
    // This file is used to handle the search bar on the home page
    const query = document.getElementById('search_query');
    const button = document.getElementById('search_button');

    button.addEventListener('click', () => {
        const url = window.location.protocol + "//" + location.host + '/search/?q=' + query.value;
        window.location.href = url;
    });
});