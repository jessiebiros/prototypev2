var smob = {
	init: function(){
		this.attachEvents();
		this.accordion();
	},

	attachEvents: function(){
		$(".smob-burger").on('click', function(e){
			e.preventDefault();
			$(this).parents(".smob-landing").slideUp();
		});
	},
	accordion: function(){
		$('.toggle').click(function(e) {
		  	e.preventDefault();
		  
		    var $this = $(this);
		  
		    if ($this.next().hasClass('show')) {
		        $this.next().removeClass('show');
		        $this.next().slideUp(350);
		    } else {
		        $this.parent().parent().find('li .inner').removeClass('show');
		        $this.parent().parent().find('li .inner').slideUp(350);
		        $this.next().toggleClass('show');
		        $this.next().slideToggle(350);
		    }
		});
	}
};

$(function() {
    smob.init();
});