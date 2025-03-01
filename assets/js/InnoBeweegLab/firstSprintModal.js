const first_sprint = document.querySelector('.first_sprintClass');
$(".first_sprintClass").on('click', function () {
    /* The position of the container will be set to fixed, so set the top & left properties of the container */
    var bounding_box = $(".first_sprintClass").get(0).getBoundingClientRect();


    /* Set container to fixed position. Add animation */
    $(this).addClass('in-animation');
    $(this).css("z-index", "1000");
    $(this).removeAttr('id');
    $('.first_sprintClass #container-inner').css("display", "none");
    $('.first_sprintClass #container-inner-text').css("display", "block");
    $(this).css('overflow', 'auto');

    /* An empty container has to be added in place of the lightbox container so that the elements below don't come up
    Dimensions of this empty container is the same as the original container */
    $('<div id="empty-container"></div>').insertAfter("first_sprint");

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
$(".first_sprintClass #close").on('click', function (e) {
    $(".first_sprintClass #close").hide();

    /* Window scrollbar normal */
    $("body").css('overflow', 'auto');

    /* Show animation */
    $(".first_sprintClass").addClass('out-animation');

    e.stopPropagation();
});

////////////////////////////////////////////////////////////////////////////////////

$(".first_sprintClass").on('animationend', function (e) {
    /* On animation end from normal to full-screen */
    if (e.originalEvent.animationName == 'inlightbox') {
        $(".first_sprintClass #close").show();
    }
    /* On animation end from full-screen to normal */
    else if (e.originalEvent.animationName == 'outlightbox') {
        /* Remove fixed positioning, remove animation rules */
        $(".first_sprintClass").removeClass('in-animation').removeClass('out-animation');
        $('.first_sprintClass').css("z-index", "3");
        $('.first_sprintClass #container-inner').css("display", "block");
        $('.first_sprintClass #container-inner-text').css("display", "none");
        first_sprint.setAttribute("id", "first_sprint");

        /* Remove the empty container that was earlier added */
        $("#empty-container").remove();

        /* Delete the dynamic keyframe rule that was earlier created */
        $("#lightbox-animations").get(0).sheet.deleteRule(0);
    }
});

function firstSprintHover() {
    document.getElementById('second_sprint').style.width = "180px";
    document.getElementById('second_sprint').style.height = "180px";
    document.getElementById('second_sprint').style.left = "55%";
    document.getElementById('second_sprint').style.top = "38%";


    document.getElementById('third_sprint').style.width = "180px";
    document.getElementById('third_sprint').style.height = "180px";
    document.getElementById('third_sprint').style.left = "71%";
    document.getElementById('third_sprint').style.top = "38%";


    document.getElementById('fourth_sprint').style.width = "180px";
    document.getElementById('fourth_sprint').style.height = "180px";
    document.getElementById('fourth_sprint').style.left = "63.2%";

}

function firstSprintHoverOff() {
    document.getElementById('second_sprint').style.width = "300px";
    document.getElementById('second_sprint').style.height = "300px";
    document.getElementById('second_sprint').style.left = "48%";
    document.getElementById('second_sprint').style.top = "29.5%";


    document.getElementById('third_sprint').style.width = "300px";
    document.getElementById('third_sprint').style.height = "300px";
    document.getElementById('third_sprint').style.left = "72%";
    document.getElementById('third_sprint').style.top = "29.5%";


    document.getElementById('fourth_sprint').style.width = "300px";
    document.getElementById('fourth_sprint').style.height = "300px";
    document.getElementById('fourth_sprint').style.left = "60%";
}