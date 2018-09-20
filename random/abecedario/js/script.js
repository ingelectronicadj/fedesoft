function animConejo(contenedor,player,imagen){
  for(var inc = 1; inc <= 7; inc++){
  	var nomAnim = 'conejo_'+inc
  	var audAnim = 'pla_'+inc
	   if(contenedor != nomAnim){
	    $('#'+nomAnim).html('')	
	   }
	   if(audAnim != player){
	   	$('#pla_'+inc)[0].pause()		
		  
	   }else{
	   	$('#pla_'+inc)[0].play()	
	   }
  }	
		$('#'+contenedor).html('<img src="img/'+imagen+'" class="imagDiv">')
  }

  function imgAuto(){ 
  	for(var inc = 24; inc <= 24; inc++){
  	 $('#imgAnid').append('<img src="img/'+inc+'.png"  id="img_'+inc+'" class="img-circle imgPeq">');
  	}
  }

	$('#vocales').click(function(){
	  //$('#conejo').show('fast');//slow
	  animConejo('conejo_1','pla_1','conejo2.gif')
	  /*setInterval(function() {
       $('#conejo').hide('fast');//slow
	   }, 8000);*/
	 })
 	$('#a').click(function(){
	  animConejo('conejo_2','pla_2','conejo2.gif')
	 })
	 $('#e').click(function(){
	  animConejo('conejo_3','pla_3','conejo2.gif')
	 })
	 $('#i').click(function(){
	  animConejo('conejo_4','pla_4','conejo2.gif')
	 })
	 $('#o').click(function(){
	  animConejo('conejo_5','pla_5','conejo2.gif')
	 })	
	 $('#u').click(function(){
	  animConejo('conejo_6','pla_6','conejo2.gif')
	 })
	 
	 imgAuto()		

	 $('#img_24').click(function(){
	  animConejo('conejo_7','pla_7','conejo2.gif')
	 })
