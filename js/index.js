$('.letters_button').click(function(){
  $('.home').slideToggle();
  $('.letter_wrap').show();
});
$('.numbers_button').click(function(){
  $('.home').slideToggle();
  $('.number_wrap').show();
});

//Letters Game

$(document).ready(function(){ 
	vowels = Array('A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'U', 'U', 'U', 'U', 'U');
	consonants = Array('B', 'B', 'C', 'C', 'C', 'D', 'D', 'D', 'D', 'D', 'D', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'J', 'K', 'L', 'L', 'L', 'L', 'L', 'M', 'M', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'P', 'P', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'V', 'W', 'X', 'Y', 'Z');
	letter_click = 0;
	vowels_click = 0;
	consonants_click = 0;
//Vowels
	$('.vowel_button').click(function(){
	var vowelpick = vowels[Math.floor(Math.random()*vowels.length)];  
	letter_click++;
	vowels_click++; 
	var remove_item = vowelpick;
	vowels.splice( $.inArray(remove_item, vowels), 1);
	if(vowels_click==5){
		$('.vowel_button').unbind('click');
	};
	if(vowels_click==9){
	  $('.vowel_button').unbind('click');
	  $('.consonant_button').unbind('click');
	};
	if(letter_click==1){
		$('.lone').append( vowelpick ); 
	};
	if(letter_click==2){
		$('.ltwo').append( vowelpick ); 
	};
	if(letter_click==3){
		$('.lthree').append( vowelpick ); 	
	};
	if(letter_click==4){
		$('.lfour').append( vowelpick ); 
	};
	if(letter_click==5){
		$('.lfive').append( vowelpick ); 
	};
	if(letter_click==6){
		$('.lsix').append( vowelpick ); 
	};
	if(letter_click==7){
		$('.lseven').append( vowelpick ); 
	};
	if(letter_click==8){
		$('.leight').append( vowelpick ); 
	};
	if(letter_click==9){
		$('.lnine').append( vowelpick ); 
	};
	});
//Consonant
	$('.consonant_button').click(function(){
	var consonantpick = consonants[Math.floor(Math.random()*consonants.length)];  
	consonants_click++; 
	letter_click++;
	var removeItem = consonantpick;
	consonants.splice( $.inArray(removeItem, consonants), 1);
	if(consonants_click==6){
		$('.consonant_button').unbind('click');
	};
	if(consonants_click==9){
	  $('.vowel_button').unbind('click');
	  $('.consonant_button').unbind('click');
	};
	if(letter_click==1){
		$('.lone').append( consonantpick ); 
	};
	if(letter_click==2){
		$('.ltwo').append( consonantpick ); 
	};
	if(letter_click==3){
		$('.lthree').append( consonantpick ); 	
	};
	if(letter_click==4){
		$('.lfour').append( consonantpick ); 
	};
	if(letter_click==5){
		$('.lfive').append( consonantpick ); 
	};
	if(letter_click==6){
		$('.lsix').append( consonantpick ); 
	};
	if(letter_click==7){
		$('.lseven').append( consonantpick ); 
	};
	if(letter_click==8){
		$('.leight').append( consonantpick ); 
	};
	if(letter_click==9){
		$('.lnine').append( consonantpick ); 
	};
	});
//Reset
	$('.reset').click(function(){
	window.location.href=window.location.href;
	});
//Timer
	$('.lclock_button').click(function(){
    const video = document.getElementById('clock');
    if (video.paused) {
      video.currentTime = 0;
      video.play();
    } else {
      video.pause();
    }
	});
});