const third_sprint = document.querySelector('.third_sprintClass');
$(".third_sprintClass").on('click', function () {
    /* The position of the container will be set to fixed, so set the top & left properties of the container */
    var bounding_box = $(".third_sprintClass").get(0).getBoundingClientRect();


    /* Set container to fixed position. Add animation */
    $(this).addClass('in-animation');
    $(this).css("z-index", "1000");
    $(this).removeAttr('id');
    $('.third_sprintClass #container-inner').css("display", "none");
    $('.third_sprintClass #container-inner-text').css("display", "block");
    $(this).css('overflow', 'auto');

    /* An empty container has to be added in place of the lightbox container so that the elements below don't come up
    Dimensions of this empty container is the same as the original container */
    $('<div id="empty-container"></div>').insertAfter("third_sprint");

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
$(".third_sprintClass #close").on('click', function (e) {
    $(".third_sprintClass #close").hide();

    /* Window scrollbar normal */
    $("body").css('overflow', 'auto');

    /* Show animation */
    $(".third_sprintClass").addClass('out-animation');

    e.stopPropagation();
});

////////////////////////////////////////////////////////////////////////////////////

$(".third_sprintClass").on('animationend', function (e) {
    /* On animation end from normal to full-screen */
    if (e.originalEvent.animationName == 'inlightbox') {
        $(".third_sprintClass #close").show();
    }
    /* On animation end from full-screen to normal */
    else if (e.originalEvent.animationName == 'outlightbox') {
        /* Remove fixed positioning, remove animation rules */
        $(".third_sprintClass").removeClass('in-animation').removeClass('out-animation');
        $('.third_sprintClass').css("z-index", "3");
        $('.third_sprintClass #container-inner').css("display", "block");
        $('.third_sprintClass #container-inner-text').css("display", "none");
        third_sprint.setAttribute("id", "third_sprint");

        /* Remove the empty container that was earlier added */
        $("#empty-container").remove();

        /* Delete the dynamic keyframe rule that was earlier created */
        $("#lightbox-animations").get(0).sheet.deleteRule(0);
    }
});

function thirdSprintHover() {
    document.getElementById('first_sprint').style.width = "180px";
    document.getElementById('first_sprint').style.height = "180px";
    document.getElementById('first_sprint').style.left = "63%";
    document.getElementById('first_sprint').style.top = "18%";

    document.getElementById('second_sprint').style.width = "180px";
    document.getElementById('second_sprint').style.height = "180px";
    document.getElementById('second_sprint').style.left = "55%";
    document.getElementById('second_sprint').style.top = "36%";


    document.getElementById('fourth_sprint').style.width = "180px";
    document.getElementById('fourth_sprint').style.height = "180px";
    document.getElementById('fourth_sprint').style.left = "63%";
}

function thirdSprintHoverOff() {
    document.getElementById('first_sprint').style.width = "300px";
    document.getElementById('first_sprint').style.height = "300px";
    document.getElementById('first_sprint').style.left = "60%";
    document.getElementById('first_sprint').style.top = "5%";


    document.getElementById('second_sprint').style.width = "300px";
    document.getElementById('second_sprint').style.height = "300px";
    document.getElementById('second_sprint').style.left = "48%";
    document.getElementById('second_sprint').style.top = "29.5%";

    document.getElementById('fourth_sprint').style.width = "300px";
    document.getElementById('fourth_sprint').style.height = "300px";
    document.getElementById('fourth_sprint').style.left = "60%";
}