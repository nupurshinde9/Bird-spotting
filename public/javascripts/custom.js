$(function() {
    $("td[colspan=4]").find("p").hide();
    $(".expand").click(function(event) {
        event.stopPropagation();
        var $target = $(event.target);
        if ($target.closest("td").attr("colspan") > 1) {
            $target.slideUp();
        } else {
            $target.closest("tr").next().find("p").slideToggle();
        }
    });

    // Get query parameters
    location.queryString = {};
    location.search.substr(1).split("&").forEach(function(pair) {
        if (pair === "") return;
        var parts = pair.split("=");
        location.queryString[parts[0]] = parts[1] &&
            decodeURIComponent(parts[1].replace(/\+/g, " "));
    });

    if (location.queryString.hasOwnProperty('confidence')) {
        $('#selectConfidence').val(location.queryString['confidence']);
    }

    $('#selectConfidence').on('change', function() {
        window.location.href = '/?confidence=' + this.value;
    });
});