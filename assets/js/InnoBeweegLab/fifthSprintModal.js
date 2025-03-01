const fifth_sprint = document.querySelector('.fifth_sprintClass');
$(".fifth_sprintClass").on('click', function () {
    /* The position of the container will be set to fixed, so set the top & left properties of the container */
    var bounding_box = $(".fifth_sprintClass").get(0).getBoundingClientRect();


    /* Set container to fixed position. Add animation */
    $(this).addClass('in-animation');
    $(this).css("z-index", "1000");
    $(this).removeAttr('id');
    $('.fifth_sprintClass #container-inner').css("display", "none");
    $('.fifth_sprintClass #container-inner-text').css("display", "block");
    $(this).css('overflow', 'auto');

    /* An empty container has to be added in place of the lightbox container so that the elements below don't come up
    Dimensions of this empty container is the same as the original container */
    $('<div id="empty-container"></div>').insertAfter("fifth_sprint");

    /* To animate the container from full-screen to normal, we need dynamic keyframes */
    var styles = ``;
    styles = `@keyframes outlightbox {
        0% {
        height: 0;
        width: 0;
        }
        100% {
        height: 300px;
        width: 300px;
        }
    }`;

    /* Add keyframe to CSS */
    $("#lightbox-animations").get(0).sheet.insertRule(styles, 0);

});

////////////////////////////////////////////////////////////////////////////////////

/* Click on close button when full-screen */
$(".fifth_sprintClass #close").on('click', function (e) {
    $(".fifth_sprintClass #close").hide();

    /* Window scrollbar normal */
    $("body").css('overflow', 'auto');

    /* Show animation */
    $(".fifth_sprintClass").addClass('out-animation');

    e.stopPropagation();
});

////////////////////////////////////////////////////////////////////////////////////

$(".fifth_sprintClass").on('animationend', function (e) {
    /* On animation end from normal to full-screen */
    if (e.originalEvent.animationName == 'inlightbox') {
        $(".fifth_sprintClass #close").show();
    }
    /* On animation end from full-screen to normal */
    else if (e.originalEvent.animationName == 'outlightbox') {
        /* Remove fixed positioning, remove animation rules */
        $(".fifth_sprintClass").removeClass('in-animation').removeClass('out-animation');
        $('.fifth_sprintClass').css("z-index", "3");
        $('.fifth_sprintClass #container-inner').css("display", "block");
        $('.fifth_sprintClass #container-inner-text').css("display", "none");
        fifth_sprint.setAttribute("id", "fifth_sprint");

        /* Remove the empty container that was earlier added */
        $("#empty-container").remove();

        /* Delete the dynamic keyframe rule that was earlier created */
        $("#lightbox-animations").get(0).sheet.deleteRule(0);
    }
});