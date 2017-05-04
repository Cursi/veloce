//---------------------------------
	var audio;
	var currentTimeOut;
//---------------------------------

function switchForm(numberTo)
{
	if (numberTo == 1)
	{
	$("#form1").css("left","0%");
	$("#form2").css("left","100%");
	$("#form3").css("left","200%");
	}
	if (numberTo == 2)
	{
	$("#form1").css("left","-100%");
	$("#form2").css("left","0%");
	$("#form3").css("left","100%");
	}
	if (numberTo == 3)
	{
	$("#form1").css("left","-200%");
	$("#form2").css("left","-100%");
	$("#form3").css("left","0%");
	}
}

$( document ).ready(function() 
{	
	audio = new Audio("audio/sci_fi.mp3");
	audio.play();
	$("#logo").addClass("active");

	setTimeout(function()
	{
		$("#video_frame").attr('src',"");
		
		$("#logo").addClass("up");
		$("#content").addClass("active");
	}, 750);
	
	$("#video").click(function() 
	{
		switchForm(1);
		
		setTimeout(function()
		{
			$("#video_frame").attr('src','https://www.youtube.com/embed/tToSZ49st9E?autoplay=1&showinfo=0&controls=0&modestbranding=1&vq=hd1080&rel=0');
			
			currentTimeOut = setTimeout(function()
			{
				switchForm(2);
				setTimeout(function()
				{
					$("#video_frame").attr('src',"");	
				}, 400);	
			}, 32200);		
		}, 400);	
	});
	
	$("#arrow_right").click(function() 
	{
		clearTimeout(currentTimeOut);
		switchForm(2);
		setTimeout(function()
		{
			$("#video_frame").attr('src',"");	
		}, 400);
	});
	
	$("#arrow_left").click(function() 
	{
		switchForm(2);
	});
	
	$("#download").click(function() 
	{
		switchForm(3);
		
		setTimeout(function()
		{
			window.open("download/Project Veloce.rar");	
		}, 400);		
	});
	
	$("#facebook").click(function() 
	{
		window.open("https://www.facebook.com/pk.razby");
	});
});
