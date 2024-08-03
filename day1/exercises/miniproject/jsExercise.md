### Instructions for Adding JavaScript to Your To-Do List App

Welcome to the JavaScript part of your To-Do List app! In this section, you'll learn how to make your app functional by adding interactivity using JavaScript. You'll be able to add, delete, and manage tasks dynamically. This is a lot, I know! Just see how far you can get <3

**MAKE SURE THAT YOUR PROJECT USES GIT FOR VERSION CONTROL AND IS UPLOADED TO A REPO ON BITBUCKET**


#### Step 1: Create Your JavaScript File

1. **Create a JavaScript File:**
   - Inside your project folder (`todo-list-app`), create a new file and name it `script.js`.

2. **Link Your JavaScript File to Your HTML:**
   - Ensure your `index.html` file includes the link to the JavaScript file just before the closing `</body>` tag:

   ```html
   <script src="script.js"></script>
   ```

#### Step 2: Basic Setup

1. **Open `script.js` in your text editor.**

2. **Wait for the DOM to Load:**
   - Use the `DOMContentLoaded` event to ensure your JavaScript runs after the HTML is fully loaded.


#### Step 3: Selecting Elements

1. **Select the Form, Input, and Task List:**
   - Use `document.getElementById` to select these elements and store them in variables.


#### Step 4: Adding Tasks

1. **Add an Event Listener to the Form:**
   - Prevent the default form submission and call a function to add the task.
   - The `addTask` function creates a new list item, adds the task text, and appends a delete button.

#### Step 5: Deleting Tasks

1. **Add a Delete Button to Each Task:**
   - The delete button is added within the `addTask` function and removes the task when clicked.

#### Step 6: Enhancements and Creative Freedom

1. **Adding Checkboxes:**
   - Add checkboxes to mark tasks as completed:
   - Add CSS for completed tasks:


2. **Storing Tasks in Local Storage:**
   - Store and retrieve tasks from the browser's local storage to persist data.
   - If this is too difficult for you, don't worry and just work with an object that gets resetted upon page refresh.


### Bonus Challenges

1. **Add Task Priorities:**
   - Add a dropdown menu in the form to set task priorities (e.g., High, Medium, Low).
   - Style tasks based on their priority.

2. **Edit Tasks:**
   - Add the ability to edit existing tasks.
   - Create an edit button that allows users to modify the task text.

3. **Search and Filter Tasks:**
   - Add a search bar to filter tasks based on keywords.
   - Implement filtering options to show all, completed, or pending tasks.

