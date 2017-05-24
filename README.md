## React Router

1. When the URL is '/students', we should see the list of all the students names
  + Each name should be a link to "/students/:id"
2. Clicking on that link should change the path and render out the entire list PLUS a student detail page
  +
3. When the URL is '/students/new'


### HARD

+ Switch √
+ render √
  + Where to evaluate JS? Curly Braces?
+ match √
+ browserHistory
+ props.children???

### CHALLENGE

+ Each student show page should have a delete button
+ When I click that button, we shoudl delete the student from the database
+ We should delete them from the state of the StudentsContainer
+ We should redirect to '/students'
