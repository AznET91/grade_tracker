var HomeView = function(store) {
	var self = this;
	var numSem = 1;

	this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('click', '.add-button img', this.addSem);
        this.el.on('click', '.edit-button p', this.enableEdit);
        // this.container = $('</div>');

        // 1. Add Semester function
		// $(".add-button img").click(function(event) {
		// 	$('body').html(homeview.addSem().container);
		// });
    };

    this.render = function() {
    	this.template = Handlebars.compile($("#home-tpl").html());
	    this.el.html(this.template());
	    return this;
	};

	this.addSem = function() {
		this.semester = Handlebars.compile($("#semester-tpl").html());
		$('.main-content').append(this.semester());
		console.log(numSem);
		numSem++;
	};

	this.enableEdit = function() {
		if ($('.lhs').is(':visible')) {
			$('.lhs').each(function() {
				$(this).fadeOut('fast')
			});

			$('.lhs').promise().done(function() {
				$('.rhs').each(function() {
					$(this).fadeIn('fast');
				});
			});
		}

		else {
			$('.rhs').each(function() {
				$(this).fadeOut('fast');
			});

			$('.rhs').promise().done(function() {
				$('.lhs').each(function() {
					$(this).fadeIn('fast')
				});
			})
		}
	};

	this.initialize();
}