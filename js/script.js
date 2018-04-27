"use strict";


var author = {
    name : "JOHN DOE",
    position : "Web Developer",
    projects : [  ]
};

var img  =180;
for (var i = 0; i < 10; i++) {

    author.projects[i] = {
        id:(i+1),
        title:"Project "+(i+1),
        img:"https://placeimg.com/240/"+(img+i)+"/tech",
        description  :" Project "+(i+1) + " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda autem consectetur debitis id inventore neque omnis perferendis, porro quasi, quia, recusandae repellendus vero voluptate voluptatibus. Autem cupiditate nisi voluptas!\n"
    }
}
$(document).ready(function () {

    $("#author_name").html(author.name);
    $("title").html(author.name);
    $("#author_position").html(author.position);

// render projects
    for (var i = 0; i < author.projects.length; i++) {
        $("#featured_work").append('<div class="col-md-4 col-sm-12"> <a href="#" data-toggle="modal" data-target="#Modal" data-project_id="'+author.projects[i].id+'"> <img class="img-thumbnail" src="'+author.projects[i].img+'" alt=""> <h3 class=" text-thin ">'+author.projects[i].title+'</h3> </a> </div>');
    }


//change modal data
    $("#featured_work a").click(function (ev) {
        var requiredProject = author.projects[ev.currentTarget.attributes['data-project_id'].value-1] ;

        $("#ModalLabel").html(requiredProject.title);


        var img = '<img class="img-thumbnail" src="'+requiredProject.img+'" alt=""> ';
        $(".modal-body").html(img + requiredProject.description);


    });

})