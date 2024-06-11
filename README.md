# Taskly
#### Video Demo:  [Taskly Demo](https://youtu.be/94r9nsXFd9w?si=l-J5VOMM101Uxo0G)
#### Description:
Taskly is a ToDo/Note-Taking Chrome Extension built by me (Sami khan). This extension is build to help me stay productive and complete tasks effectively, all the other note-taking extensions were too complex and heavy to work with, they were just not straight forward, hence I had to build Taskly.

# Files:
There are are many files in my project and I will explain them step by step in detail:

# manifest.json:
The manifest.json file is required for all chrome extensions otherwise it won't be an extension. This file contains all the necessary information for the browser to display, such as extension's title, description, version, manifest_version, icons, default_popup, permissions and etc. This file must be in JSON format.

# popup.html:
Popup.html is the file that is displayed when you click on the popup icon of the extension. This is the file which can also be thought of as the index.html of chrome extensions, although the extension will work even if you don't create this file. This file displays a window with all the options necessary for the user to interact with. In our case, the whole extension's functionality of taking user input relies on this file.

# popup.css:
This file contains all the necessary styling for the popup.html. This file enables us to make the popup look good and interactable. Although this file is not necessary, you can get around it with inline styling or by using style tag in the popup.html.

# popup.js:
Popup.js is the file where all our code for javascript is written and this file enables the extension to become interactable and perform tasks in the background, such as toggling dark mode, saving the tasks and removing the tasks, etc. This file is required, and inline javascript or using script tag in popup.html is not allowed and browser will throw errors.

# node modules:
These files/folders are not required, they are just to provide syntax highlighting and emmet abbreviations for the extension-specific code such as using chrome storage local api since there's no built in support for the chrome extensions in visual studio code. You can install these file by first installing npm and then executing npm i chrome-types in the terminal of your file directory in your IDE.

# Code in popup.js:
I don't need to explain the code in popup.html or popup.css because it's very simple and you can understand it by simply reading it. But I will try to explain some code in popup.js.
This file contains code for the Dark/Light mode functionalty, Saving tasks and Ui theme preference in the chrome.storage.local API and then displaying each task as complete, or uncomplete and also deleting the tasks onclick.

First the function for dark mode is written, which will replace the class of the body and list containing light with dark and also set save the preference in the storage API.

Then the light mode fucntion is written which will do the same thing as dark mode function but this time it will be replacing dark with light.

Then there is event listener which will listen for click on a varbiable called toggle which is just the img of taskly, after the click it will check if body contains class dark if it does then it will call the lightMode function, else it will call the darkMode function.

After that we are getting the value of the key 'mode' and then checking if the value we got is present if there's no value then we are assigning it light. Then we are removing the class dark and light from body, and adding the class we got from the key 'mode'. Then we are checking if the mode is dark then call darkMode else call lightMode function.

After that we have the functionality for adding tasks, we are checking first if the input is empty then we are alerting the user that you must enter a task. If it's not empty then create a list item and set its innerHTML as the value input from the user and also trim it and append it in list. And also create a span with 'X' and append that in list item. Then set the input as null for the user to enter a new task. And then call the saveData function which is essentially storing the task in chrome storage API.

Then we are checking if the user clicks on the list with the task then mark it as complete, and if the user clicks on the 'X' then remove the task. And also save this in chrome storage API.

After that we have the saveData function which I just explained.

And at last we have an IFFE which is an Immediately Invoked Function Expression which is just showing the tasks we have stored in our chrome.storage.local API.

And that's it!
