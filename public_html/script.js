

$('document').ready(function(){
    
    $('.what').css('background-color', 'red');
    
    $('div:last p:nth-child(3)').css('background-color', 'black');
    
    $('p:last').css('color', 'blue');
    
    $('p:gt(1)').css('border-style', 'solid');
    
    $('p:first').css({'background-color':'black', 'color':'white'});
    
    $('h1').bind('mouseover',mouseOverMe).bind('mouseout',mouseOutMe);
    
    $('h1').bind('click',mouseClick);
    
    $('replaceWText').bind('click',replaceWText);
    
    $('#randPara').bind('click', addAPara);
    
    $('#removePara').bind('click', removeAPara);
    
    $('#show').css('visbility', 'hidden');
    
    $('#hide').bind('click', hideThePage);
    
    $('#show').bind('click', showThePage);
    
    
            $   ('.what').css('background-color', 'yellow');
    
    $('#superHumans').accordion({header: "h3"});
});


function hideThePage(){
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}
    function showThePage(){
        $('div').show('fold', {}, 2500);
        $('#show').hide('puff', {}, 2500);
    }


function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p>Hallo</p>');
}

function replaceWText(){
    $('#replaceWText').text('Poooooo!!!');
}

function mouseOverMe(){
    $('h1').html('Hi Guys');
}

function mouseOutMe(){
    $('h1').html('NUTELLA IS BAE!');
}

function mouseClick(){
    
    $('p').html('DO U LIKE IT?');
}