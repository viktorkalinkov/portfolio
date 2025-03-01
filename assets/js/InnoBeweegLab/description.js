const description = document.querySelector('.descriptionClass');
        /* We need to create dynamic keyframes to show the animation from full-screen to normal. So we create a stylesheet in which we can insert CSS keyframe rules */
        $("body").append('<style id="lightbox-animations" type="text/css"></style>');

        $(".descriptionClass").on('click', function () {
            /* The position of the container will be set to fixed, so set the top & left properties of the container */
            var bounding_box = $(".descriptionClass").get(0).getBoundingClientRect();

            /* Set container to fixed position. Add animation */
            $(this).addClass('in-animation');
            $(this).css("z-index", "1000");
            $(this).removeAttr('id');
            $('.descriptionClass #container-inner').css("display", "none");
            $('.descriptionClass #short-description').css("display", "none");
            $('.descriptionClass #container-inner-text').css("display", "block");
            $(this).css('overflow', 'auto');

            /* An empty container has to be added in place of the lightbox container so that the elements below don't come up
            Dimensions of this empty container is the same as the original container */
            $('<div id="empty-container"></div>').insertAfter("description");

            /* To animate the container from full-screen to normal, we need dynamic keyframes */
            var styles = ``;
            styles = `@keyframes outlightbox {
                0% {
                height: 100%;
                width: 100%;
                }
                50% {
                height: 1000px;
                }
                100% {
                height: 900px;
                width: 900px;
                }
            }`;

            /* Add keyframe to CSS */
            $("#lightbox-animations").get(0).sheet.insertRule(styles, 0);

            /* Hide the window scrollbar */
            $("body").css('overflow', 'hidden');
        });

        ////////////////////////////////////////////////////////////////////////////////////

        /* Click on close button when full-screen */
        $(".descriptionClass #close").on('click', function (e) {
            $(".descriptionClass #close").hide();

            /* Window scrollbar normal */
            $("body").css('overflow', 'auto');

            /* Show animation */
            $(".descriptionClass").addClass('out-animation');

            e.stopPropagation();
        });

        ////////////////////////////////////////////////////////////////////////////////////

        $(".descriptionClass").on('animationend', function (e) {
            /* On animation end from normal to full-screen */
            if (e.originalEvent.animationName == 'inlightbox') {
                $("#close").show();
            }
            /* On animation end from full-screen to normal */
            else if (e.originalEvent.animationName == 'outlightbox') {
                $(".descriptionClass").css('overflow', 'hidden');
                /* Remove fixed positioning, remove animation rules */
                $(".descriptionClass").removeClass('in-animation').removeClass('out-animation');
                $('.descriptionClass #container-inner').css("display", "block");
                $('.descriptionClass #short-description').css("display", "block");
                $('.descriptionClass #container-inner-text').css("display", "none");
                description.setAttribute("id", "description");

                /* Remove the empty container that was earlier added */
                $("#empty-container").remove();

                /* Delete the dynamic keyframe rule that was earlier created */
                $("#lightbox-animations").get(0).sheet.deleteRule(0);
            }
        });
