# UW_Project2_BootcampProjectReviewApp

## Abby
- html all project view

## Ryan
- html project entry form

## Gi

## Jocelyn
- user log in / account sign up


### Project To-Do List
- html bones 
  - pages: project entry pages, all project view, log in page/create log in
  - utilize materialize with html layout
- log in required to enter submission, no log in needed to view
  - auth/cookies
- add in dynamic scripting for interactive buttons/etc
- add db saving info w/ mySQL/Sequelize
- craft models for project and user
- add GET and POST routes
  - GET a project or all projects
  - POST add a project

#### Once app is functioning
- Update ReadME with SS, new info, app link, etc
- double check code formatting for best practice layouts
- ensure a clean UI experience


#### Req's to meet
* Node.js and Express.js to create a RESTful API
* Handlebars.js as the template engine
* MySQL and Sequelize ORM for the db
* have GET and POST routes for retrieving and adding new data
* folder structure meets MVC paradigm
* Include authentication (express-session and cookies)
* Protect API keys and sensitive information with environment variables
* deploy using Heroku (with data)
* accept and respond to user input

#### Req's assumed to be met
* at least one new library, package, or technology --> MATERIALIZE FRAMEWORK
* code formatting
* README
* polished UI


## Overview
Voting on the "Peoples Choice Awards" for the Bootcamp projects was a fun way to cap off the project, but seeing so many consecutive projects can blur projects together and make it hard to remember what each one was. It would be useful to be able to integrate basic descriptions, user stories, and screenshots into a thumbnail-like reference that makes voting easy to do without a key. The app will allow users to create/submit projects for reference. 

Link to Web App: <!-- LINK TO DEPLOYMENT HERE -->

App Preview:
<!-- Replace with path to screenshot   ![My Password Generator Screenshot](./Assets/MyPasswordGeneratorScreenShot.PNG "My Password Generator Screenshot") -->

## Notes

<!-- Use this area to add personal notes on implementation, etc -->

## User Story

```
AS A bootcamp student with limited memory
I WANT a voting app that has descriptions and imagery of the apps
SO THAT my goldfish memory can be jogged when voting
```

## Acceptance Criteria

### Project Requirements

You and your group will use everything you’ve learned over the past six modules to create a real-world full-stack application that you’ll be able to showcase to potential employers. The user story and acceptance criteria will depend on the project that you create, but your project must fulfil the following requirements:

```
* Use Node.js and Express.js to create a RESTful API.
* Use Handlebars.js as the template engine.
* Use MySQL and the Sequelize ORM for the database.
* Have both GET and POST routes for retrieving and adding new data.
* Use at least one new library, package, or technology that we haven’t discussed.
* Have a folder structure that meets the MVC paradigm.
* Include authentication (express-session and cookies).
* Protect API keys and sensitive information with environment variables.
* Be deployed using Heroku (with data).
* Have a polished UI.
* Be responsive.
* Be interactive (i.e., accept and respond to user input).
* Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
* Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).
```

### Presentation Requirements

Use this [project presentation template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit?usp=sharing) to address the following: 
```
* Elevator pitch: a one minute description of your application
* Concept: What is your user story? What was your motivation for development?
* Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?
* Demo: Show your stuff!
* Directions for Future Development
* Links to the deployed application and the GitHub repository. Use the [Guide to Deploy with Heroku and MySQL](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql) on The Full-Stack Blog if you need a reminder on how to deploy to Heroku.
```

## Resources Used 

<!-- ### Helpful References
- [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys) -->

### Technology
- [jQuery Library](https://jquery.com/)
<!-- 
### Media
- 11d icon (thunderstorm): [lightning cloudy by reynaindra from NounProject.com](https://thenounproject.com/browse/icons/term/lightning-cloudy/") -->




<!-- # 15 Project 2: Interactive Full-Stack Application

Projects play a key role in your journey to becoming a full-stack web developer. As you enter the last phase of the boot camp, you’ll begin to apply for development jobs. If you want to land interviews, your portfolio must feature high-quality deployed examples of your work—-and you can use your finished projects for that very purpose.

As your first opportunity to show employers your collaborative skills and coding abilities, this particular project will be a focal point of your portfolio. Employers want to see what you can do, but they also want to see how you work with other developers. The more examples of deployed collaborative work you have in your portfolio, the more likely you are to get an interview and a job.

## Project Requirements

You and your group will use everything you’ve learned over the past six modules to create a real-world full-stack application that you’ll be able to showcase to potential employers. The user story and acceptance criteria will depend on the project that you create, but your project must fulfil the following requirements:

* Use Node.js and Express.js to create a RESTful API.

* Use Handlebars.js as the template engine.

* Use MySQL and the Sequelize ORM for the database.

* Have both GET and POST routes for retrieving and adding new data.

* Use at least one new library, package, or technology that we haven’t discussed.

* Have a folder structure that meets the MVC paradigm.

* Include authentication (express-session and cookies).

* Protect API keys and sensitive information with environment variables.

* Be deployed using Heroku (with data).

* Have a polished UI.

* Be responsive.

* Be interactive (i.e., accept and respond to user input).

* Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

* Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Presentation Requirements

Use this [project presentation template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit?usp=sharing) to address the following: 

* Elevator pitch: a one minute description of your application

* Concept: What is your user story? What was your motivation for development?

* Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?

* Demo: Show your stuff!

* Directions for Future Development

* Links to the deployed application and the GitHub repository. Use the [Guide to Deploy with Heroku and MySQL](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql) on The Full-Stack Blog if you need a reminder on how to deploy to Heroku.

## Grading Requirements

This project is graded based on the following criteria:

### Technical Acceptance Criteria: 25%

* Satisfies the following code requirements:

  * Application uses a Node.js and Express.js back end and uses both GET and POST routes for retrieving and adding new data.

  * Application has a folder structure that meets the MVC paradigm and uses Handlebars.js as the template engine.

  * Application is backed by a MySQL database with a Sequelize ORM and protects API keys and sensitive information with environment variables.

  * Application includes user authentication (express-session and cookies).

  * Application uses at least one new library, package, or technology not covered in class.

### Concept 10%

* Application should be a unique and novel idea.

* Your group should clearly and concisely articulate your project idea.

### Deployment: 20%

* Application deployed at live URL on Heroku and loads with no errors.

* Application GitHub URL submitted.

### Repository Quality: 10%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id-naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application is responsive.

### Presentation 10%

* Your group should present using a slide deck.

* Every group member should speak during the presentation.

* Your presentation should follow the [Project Presentation Template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit?usp=sharing).

### Collaboration 10%

* There are no major disparities in the number of GitHub contributions between group members.

## How to Submit Your Interactive Full-Stack Project

**Each member of your group** is required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository, with a unique name and a README describing the project.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
 -->
