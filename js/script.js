"use strict";


var author = {
    name : "JOHN DOE",
    position : "Web Developer",
    projects : [  ] // below I will generate x projects
};


$(document).ready(function () {







    $("#author_name").html(author.name);
    $("title").html(author.name);
    $("#author_position").html(author.position);


    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        // beforeSend: function( xhr ) {
        //     xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
        // }
    })
        .done(function( arr ) {

            /**
             * generate projects
             * @type {number}
             */
            var img  =180;
            for (var i = 0; i < arr.length; i++) {

                author.projects[i] = {
                    id:(i+1),
                    title:arr[i].title,
                    img:"https://picsum.photos/200/"+(img+i),
                    description  :arr[i].body
                }
            }


            // render projects
            for (var i = 0; i < author.projects.length; i++) {
                $("#featured_work").append('<div class="col-md-3 col-sm-12"> <a href="#" data-toggle="modal" data-target="#Modal" data-project_id="'+author.projects[i].id+'"> <img class="img-thumbnail" src="'+author.projects[i].img+'" alt=""> <h3 class=" text-thin ">'+author.projects[i].title+'</h3> </a> </div>');
            }





//change modal data
            $("#featured_work a").click(function (ev) {
                var requiredProject = author.projects[ev.currentTarget.attributes['data-project_id'].value-1] ;
                debugger
                $("#ModalLabel").html(requiredProject.title);
                var img = '<img class="img-thumbnail" src="'+requiredProject.img+'" alt=""> ';
                $(".modal-body").html(img + requiredProject.description);


            });


            // $("#featured_work h3").each(function () {
            //     var text = $(this).text();;
            //     $(this).text( "=>" +text );
            // })


            $("#featured_work img").hover(function (ev) {
                // $(this).toggleClass('hover');

                $("#featured_work img").addClass('grayImage')
                $(this).removeClass('grayImage')
                $(this).addClass('selectedImage')
            },function () {
                $("#featured_work img").removeClass('selectedImage')
                $("#featured_work img").removeClass('grayImage')

            })



        })
        .fail(function( data ) {
            debugger
            console.log(data.statusText);
        });

})



