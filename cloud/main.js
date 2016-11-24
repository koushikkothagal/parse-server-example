var courses = require('../data/courses.json');



Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('courses', function(req, res) {
  res.success(courses);
});
