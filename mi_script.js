$(document).ready(function () {
  $("#postulantes").hover(
    function () {
      $(".postulantes").addClass("showpostulantes");
    },
    function () {
      $(".postulantes").removeClass("showpostulantes");
    }
  );
});

$(document).ready(function () {
    $(".postulantes").hover(
        function () {
          $(".postulantes").addClass("showpostulantes");
        },
        function () {
          $(".postulantes").removeClass("showpostulantes");
        }
      );
});


  $(document).ready(function () {
    $("#estudiantes").hover(
      function () {
        $(".estudiantes").addClass("showestudiantes");
      },
      function () {
        $(".estudiantes").removeClass("showestudiantes");
      }
    );
  });