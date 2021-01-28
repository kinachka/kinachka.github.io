jQuery(document).ready(function( $ ) {

	if($('#canvas').length) {

		var doughnutData = [{
        value: 70,
        color: "#f85c37"
      },
      {
        value: 30,
        color: "#ecf0f1"
      }
    ];
    var myDoughnut = new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(doughnutData);
	};

	if($('#canvas2').length) {
		var doughnutData = [{
				value: 90,
				color: "#f85c37"
			},
			{
				value: 10,
				color: "#ecf0f1"
			}
		];
		var myDoughnut = new Chart(document.getElementById("canvas2").getContext("2d")).Doughnut(doughnutData);
	}

	if($('#canvas3').length) {
		var doughnutData = [{
				value: 55,
				color: "#f85c37"
			},
			{
				value: 45,
				color: "#ecf0f1"
			}
		];
		var myDoughnut = new Chart(document.getElementById("canvas3").getContext("2d")).Doughnut(doughnutData);
	}

	if($('#canvas4').length) {
		var doughnutData = [{
				value: 55,
				color: "#f85c37"
			},
			{
				value: 45,
				color: "#ecf0f1"
			}
		];
		var myDoughnut = new Chart(document.getElementById("canvas4").getContext("2d")).Doughnut(doughnutData);
	}
});

$(window).load(function () {
	$("#preloader-wrapper").fadeOut("slow");
  });
  
  $(document).ready(function () {
	//animated header class
	$(window).scroll(function () {
	  var scroll = $(window).scrollTop();
	  //console.log(scroll);
	  if (scroll > 200) {
		//console.log('a');
		$(".navigation").addClass("animated");
	  } else {
		//console.log('a');
		$(".navigation").removeClass("animated");
	  }
	});
  });
  