QuickHealz

Technologies Used:  ReactJS, Django, NodeJS, Django Administration for database.

NPM Installation:  To install NPM (node package manager) we need to have an Node.js in our system with appropriate version. After installing Node.js in command prompt run the command npm -v.

After that for creating a new app run the command npx create-react-app<Quick Healz>. Here Quick Healz is our app name and then navigate into app directory run the command cd < Quick Healz> and then run the command npm start.

Django installation and setup:  Before installing Django on your system, we need to have python installed on your computer with latest version. Then in command prompt run the command pip install Django. 

After installing Django Top create new project run the command in command prompt like 
django-admin startproject backend. Here backend is our project name. To run the development server and to start project in command prompt run python manage.py runserver.

For creating new app in Django type the command in command prompt like python manage.py startapp app_name. So, this will create new directory with the name of your app and set of files that Django manages your app.

Axios and Fetch API Calls: Axios and Fetch API calls are JavaScript libraries which are used to make HTTP Requests from web-based applications.

To use Axios in our project type the command in command prompt npm install axios. For use of fetch API cells in your JavaScript project we don’t need to install anything as it was a built-in browser API.

React Scripts:  To install react-scripts we need to have node package manager(npm) installed on your computer then type the following command in command prompt as npm install react -scripts. 

After installing react -scripts into your system then you can use it to start, build and test your project.

Cors-Headers:  Django cors-headers is a Django middleware that adds Cors (Cross-origin Resource sharing) headers to response.

To install cors- headers in our system type the command in command prompt like pip install django-cors-headers.

Execution:

	Open two windows in VS code, open Quickhealz project folder in one window and backend folder in another window.
	Open terminal in Quickhealz window and enter “npm start” command.  
	Simultaneously Open terminal in backend project and enter “python manage.py runserver” command to start backend server.
	The project runs in localhost displaying the landing page.
	Now you can click on registration of your choice and login using the credentials and try the features of patient, doctor, caretaker.

Increment-2

Medication Reminder: To execute medication reminder We need below three packages.

Celery package: celery package is a popular distributed task  queue framework for python, used to handle asynchronous tasks such as sending  emails, processing data. To run this package type command like pip install celery.

Redis Package: Redis package is an open-source, in memory data structure that can be used as a database, cache and manage broker. To run this package type command like pip install redis.

Django-celery-results package: This package extension provides results backends using either the Django ORM, or the Django Cache Framework. To run this package type command like pip install Django-celery-results.
 
