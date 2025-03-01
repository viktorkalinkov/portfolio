const fourth_sprint = document.querySelector('.fourth_sprintClass');
$(".fourth_sprintClass").on('click', function () {
    /* The position of the container will be set to fixed, so set the top & left properties of the container */
    var bounding_box = $(".fourth_sprintClass").get(0).getBoundingClientRect();


    /* Set container to fixed position. Add animation */
    $(this).addClass('in-animation');
    $(this).css("z-index", "1000");
    $(this).removeAttr('id');
    $('.fourth_sprintClass #container-inner').css("display", "none");
    $('.fourth_sprintClass #container-inner-text').css("display", "block");
    $(this).css('overflow', 'auto');

    /* An empty container has to be added in place of the lightbox container so that the elements below don't come up
    Dimensions of this empty container is the same as the original container */
    $('<div id="empty-container"></div>').insertAfter("fourth_sprint");

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
$(".fourth_sprintClass #close").on('click', function (e) {
    $(".fourth_sprintClass #close").hide();

    /* Window scrollbar normal */
    $("body").css('overflow', 'auto');

    /* Show animation */
    $(".fourth_sprintClass").addClass('out-animation');

    e.stopPropagation();
});

////////////////////////////////////////////////////////////////////////////////////

$(".fourth_sprintClass").on('animationend', function (e) {
    /* On animation end from normal to full-screen */
    if (e.originalEvent.animationName == 'inlightbox') {
        $(".fourth_sprintClass #close").show();
    }
    /* On animation end from full-screen to normal */
    else if (e.originalEvent.animationName == 'outlightbox') {
        /* Remove fixed positioning, remove animation rules */
        $(".fourth_sprintClass").removeClass('in-animation').removeClass('out-animation');
        $('.fourth_sprintClass').css("z-index", "3");
        $('.fourth_sprintClass #container-inner').css("display", "block");
        $('.fourth_sprintClass #container-inner-text').css("display", "none");
        fourth_sprint.setAttribute("id", "fourth_sprint");

        /* Remove the empty container that was earlier added */
        $("#empty-container").remove();

        /* Delete the dynamic keyframe rule that was earlier created */
        $("#lightbox-animations").get(0).sheet.deleteRule(0);
    }
});


function fourthSprintHover() {
    document.getElementById('first_sprint').style.width = "180px";
    document.getElementById('first_sprint').style.height = "180px";
    document.getElementById('first_sprint').style.left = "63.2%";
    document.getElementById('first_sprint').style.top = "18%";

    document.getElementById('second_sprint').style.width = "180px";
    document.getElementById('second_sprint').style.height = "180px";
    document.getElementById('second_sprint').style.left = "55%";
    document.getElementById('second_sprint').style.top = "34%";

    document.getElementById('third_sprint').style.width = "180px";
    document.getElementById('third_sprint').style.height = "180px";
    document.getElementById('third_sprint').style.left = "71%";
    document.getElementById('third_sprint').style.top = "34%";
}

function fourthSprintHoverOff() {
    document.getElementById('first_sprint').style.width = "300px";
    document.getElementById('first_sprint').style.height = "300px";
    document.getElementById('first_sprint').style.left = "60%";
    document.getElementById('first_sprint').style.top = "5%";


    document.getElementById('second_sprint').style.width = "300px";
    document.getElementById('second_sprint').style.height = "300px";
    document.getElementById('second_sprint').style.left = "48%";
    document.getElementById('second_sprint').style.top = "29.5%";

    document.getElementById('third_sprint').style.width = "300px";
    document.getElementById('third_sprint').style.height = "300px";
    document.getElementById('third_sprint').style.left = "72%";
    document.getElementById('third_sprint').style.top = "29.5%";
}