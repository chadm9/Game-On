$(document).ready(function(){
	$('#start-btn').click(()=>{
		function complete(){
		$('.second-section').fadeIn(1000);
		$('.login-form-container').css('display','none');			
		}
		$('.first-section').fadeOut(1000,complete);					
		$('#wrapper_bgndVideo').css('filter','blur(10px)');
	});

    $('.log-in').click(()=> {
        function complete(){
		$('.second-section').fadeIn(1000);
		$('.sign-up-form-container').css('display','none');			
		}
		$('.first-section').fadeOut(1000,complete);					
		$('#wrapper_bgndVideo').css('filter','blur(10px)');
    });
    // if(registered){
    //     $('#accountSetting').modal('show');
    // }

    $('#fav-input').val = $('#compare-search-input').val;

	var nameSource = availableTags.split(",");
	nameSource = nameSource.slice(0, -2);
    $("#search-input").focus(function(){
        $("#search-input").attr("value", "");
        $("#search-input").autocomplete({
    	    minLength: 2,
            autoFocus: true,
            source: function( request, response ) {
            var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
            response( $.grep( nameSource, function( item ){
              return matcher.test( item );
            }) );
            }
        });
    });

    $(".compare-btn").click((e)=>{
        var userInputFromSearch = $('#search-input').val();
        console.log(userInputFromSearch);
        var userInputFromCompare = $('#compare-search-input').val();
        console.log(userInputFromCompare);
        if((nameSource.indexOf(userInputFromSearch) == -1) ||   ((nameSource.indexOf(userInputFromCompare) == -1) && (userInputFromCompare != 'League Average') && (userInputFromCompare != 'League Best'))){
            e.preventDefault();
            $(".message").html("Please enter a real NBA player's name!")
        }else {
            $(".message").html("");
            e.invokeDefault();
        }
    });

    $("#compare-search-input").focus(function(){
        console.log(nameSource);
        $("#compare-search-input").autocomplete({
            minLength: 2,
            source: function( request, response ) {
                var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
                response( $.grep( nameSource, function( item ){
                    return matcher.test( item );
                }) );
            }
        });
    });

    $("#compare-to").change(function () {
        if($(this).val() == "Another Player"){
            $('#compare-search-input').val(undefined);
            $('#compare-search-input').css('display', 'block');

        }else if($(this).val() == "League Best"){
            $('#compare-search-input').val('League Best');
            $('#compare-search-input').css('display', 'none')
        }else{
            $('#compare-search-input').val('League Average');
            $('#compare-search-input').css('display', 'none')
        }

        console.log($('#compare-to').val())
    });

    //console.log(typeof(PPGrank));

    $(".edit-btn").click(()=>{
        var oldUsername = user
        $(".username-form-container").html("");
        $(".username-form-container").html(`<form class='username-form' action='/changeUsername' method='post'><table class='table modal-table table-hover'><thead><tr><th class='text-center'> Your User Name </th><th class='text-center'> Action </th></tr></thead><tbody><td class="text-center username-row"><input class="username-row" type="text" name="newUsername" value="${oldUsername}"></td><td class='text-center'><button class='edit-btn' type="button"> Edit</button><button class='save-btn' type='submit'> Save Changes</button></td></tbody></form>`);
        $(".username-row").focus(function(){
            $(".username-row").attr("value", "");
        });
    });
    $(".edit-btn").focusout(()=>{
        $(".username-row").attr("value", "");
        
    });

	
Highcharts.theme = {
   colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
   chart: {
      backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
         stops: [
            [0, '#2a2a2b'],
            [1, '#3e3e40']
         ]
      },
      style: {
         fontFamily: '\'Unica One\', sans-serif'
      },
      plotBorderColor: '#606063'
   },
   title: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase',
         fontSize: '20px'
      }
   },
   subtitle: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase'
      }
   },
   xAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
         style: {
            color: '#A0A0A3'

         }
      }
   },
   yAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      title: {
         style: {
            color: '#A0A0A3'
         }
      }
   },
   tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
         color: '#F0F0F0'
      }
   },
   plotOptions: {
      series: {
         dataLabels: {
            color: '#B0B0B3'
         },
         marker: {
            lineColor: '#333'
         }
      },
      boxplot: {
         fillColor: '#505053'
      },
      candlestick: {
         lineColor: 'white'
      },
      errorbar: {
         color: 'white'
      }
   },
   legend: {
      itemStyle: {
         color: '#E0E0E3'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#606063'
      }
   },
   credits: {
      style: {
         color: '#666'
      }
   },
   labels: {
      style: {
         color: '#707073'
      }
   },

   drilldown: {
      activeAxisLabelStyle: {
         color: '#F0F0F3'
      },
      activeDataLabelStyle: {
         color: '#F0F0F3'
      }
   },

   navigation: {
      buttonOptions: {
         symbolStroke: '#DDDDDD',
         theme: {
            fill: '#505053'
         }
      }
   },

   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: '#505053',
         stroke: '#000000',
         style: {
            color: '#CCC'
         },
         states: {
            hover: {
               fill: '#707073',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: '#000003',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            }
         }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      },
      xAxis: {
         gridLineColor: '#505053'
      }
   },

   scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
   },

   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   maskColor: 'rgba(255,255,255,0.3)'
};

Highcharts.setOptions(Highcharts.theme);

Highcharts.chart('charts', {

    chart: {
        backgroundColor: 'rgba(1,1,1,0)',
        polar: true,
        type: 'line'

    },

    title: {
        text: 'Player Ranking',
        x: -0
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Points/Game', 'Assists/Game', '3 Point Made/Game', 'Rebounds/Game',
                'Steals/Game', 'Minutes/Game'],
        tickmarkPlacement: 'on',
        lineWidth: 0,
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 100,
        
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
    },

    legend: {
        align: 'bottom',
        verticalAlign: 'top',
        y: 70,
        layout: 'vertical'
    },

    series: [{
        name: fullName,
        data: [parseFloat(PPGrank),parseFloat(ASSrank), parseFloat(THREErank), parseFloat(REBrank), parseFloat(STLrank), parseFloat(MINrank)],
        pointPlacement: 'on'
    }, {
        name: compName,
        data: [parseFloat(compPPGrank),parseFloat(compASSrank), parseFloat(compTHREErank), parseFloat(compREBrank), parseFloat(compSTLrank), parseFloat(compMINrank)],
        pointPlacement: 'on'
    }]

});

});