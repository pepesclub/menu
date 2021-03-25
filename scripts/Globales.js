

$(document).ready(function () {


    ActDimenBody();

    function ActDimenBody() {

        $("#CuerpoMaster").css("width", $(window).width());
        $("#CuerpoMaster").css("height", $(window).height());
       
    }


    /* Eventos --------------------------------*/
  
    $(window).resize(

        function () {
            ActDimenBody();
        }
    );


    $("#PosterDiv").click(

        function () {

            $("#PosterDiv").hide();

        }

    );
    
});

