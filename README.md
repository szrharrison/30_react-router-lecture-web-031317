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

+ After deleting - how to redirect?
+ updating the state when the student gets deleted
+ sending through the delete request to the API

### CHALLENGE

### Update
+ We should be able to update each student
+ Visiting '/students/:id/edit' should show the update form
+ Submitting the form should change it in the database
+ The student form values should be pre-populated with that student's values
+ After submitting, we should go back to the student show page

#### Hints
+ `defaultValue` for inputs
+ `refs`

### Delete

+ Each student show page should have a delete button
+ When I click that button, we shoudl delete the student from the database
+ We should delete them from the state of the StudentsContainer
+ We should redirect to '/students'
