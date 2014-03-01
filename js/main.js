var app = {
	initialize: function() {
		var self = this;
		var homeview = new HomeView(self.store);

		this.store = new MemoryStore(function() {
			$('body').html(homeview.render().el);
		});

		function deleteSem(sem) {
			var element = document.getElementById(sem);
			element.parentNode.removeChild(element);
		}


		// // 3. Enable Editing
		// $('.edit-button p').on('click', function() {
			
		// });
	}
}

app.initialize();























