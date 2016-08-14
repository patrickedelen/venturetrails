///////////////////////////
// routes.js - handle all app routes
///////////////////////////

module.exports = function(app) {
	app.get('/', function() {

	});
}
app.get('/*', function (req, res) {
   db.findPage({ slug: req.url}, function (err, pageData) {
       res.render('page-template', {
           pageContent: pageData.content,
           pageTitle: pageData.title
       });
   });
});