Router.configure({
    layoutTemplate: 'layout'
});



Router.map( function() {

	this.route('app', {
		path: '/'
	})

	this.route('about', {
		path: '/about'
	})

})




