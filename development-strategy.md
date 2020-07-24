# Eye See You-App: Development-Strategy

Building this site one step at a time according to the following steps .

## 0. Setup

- Create `development-strategy.md`.
- Create `readme.md`.
- Create `index.js`.
- Create `api` folder.
- Create `client` folder.
- Create additional configurations files (`package.json`, `license` , `jest.config.js`).

## 1. User Story: Setup-Work Environment for the team .

**As a team we need to have a repository where all team members have access on,and we need to have a clear abstract about the whole project , clear detailed issues and user-stories as well .**

- Pick one of the team members to be the team owner .
- Create a parent repository on one of the team members git-hub account to be the owner .
- Add other team members as collaborators .
- Work on the development strategy.
- Create a project board .
- Create issues , labels , miles-stones , tags ..etc , for the git-hub repo .
- Create wire-frames for a the whole prospective for the project .

## 2. User Story: Search and gather necessary information needed to start development

**As a team we need to start a search to gather information and best practices needed to start the development phase to decide which technologies are more suitable for both front-end and back-end**

- Have a clear and detailed business use-case .
- Have a discussion with the stack-holders and the team members about the business aspect of the app .
- Search for the best practice and technologies for the front-end .
- Search for the best practice and technologies for the back-end .
- Rethink and revisit the wire-frames screens that were created before to apply final changes needed after all meetings with the stakeholders and the team members finished .

## 3. User Story: Create a landing home-page with a wow factor.

**As user when click on the url of the website , an eye-catchy UI element should be there to make sure that users keep on browsing the website for longer periods of time**

### `DOM & styles`

- Come up with a wow factor UI elements ( all ideas are accepted ) .
- Edit both `Client\public` and `Client\src`, to add necessary assets and css styles.
- Check and verify interface correctness (links places, nomination and execution, styles consistency, colour accordance, user-friendly activities, visibility etc), design and consistency

### `Testing & code review`

- Test cross-browser display option in different platforms.
- Make cross collaborators code review

## 4. User Story:Create a Home-page with basic information tabs and links to all other pages available in the website

**As user will browse the home pgae and will be able to navigate to all other pages and services available in the website**

- Create a home-page file with tabs names as follows Home - Test my Eye - AboutMe - Contact .. changes can be applied later for more convenient UI
- Add links as follows site news - what makes us special etc .. changes can be applied later for more convenient UI.
- Edit both `Client\public` and `Client\src`, to add necessary assets and css styles , html and js files .. changes can be applied later for in progress production development .

## 5. User Story:Eye-Test-main page .

**As a user I will click on test my eye tab on the home page and be able to see a introduction first page about the feature and will also see a start my test button to start the test**

- A home page for the eye test feature will be available .
- The page will display description about the whole eye - testing process.
- A start button will be displayed and existed for the user to click to take him to the eye test steps .
- Edit both `Client\public` and `Client\src`, to add necessary assets and css styles , html and js files .. changes can be applied later for in progress production development .

## 6. User Story:Eye-Test-Steps process .

**As a user I will be able to be able to go through steps (mini tests) from which after finishing them I will be having my eye-sight evaluated accurately**

- After pressing start button , a series of mini steps or tests
- Each test will have a a collection of choices as buttons
- Each click on an answer ( a button ), it is a trigger for the next step/test to be initiated.
- Edit both `Client\public` and `Client\src`, to add necessary assets and css styles , html and js files .. changes can be applied later for in progress production development .

## 7. User Story:Eye-Test-Steps user answers saving process .

**As a software developer I need to save the user answers in the the DB to be used in results decision making later**

- As a software developer I will be saving the users eye test answers in the db .
- Create the data-tables and relations necessary for the data to be stored in a normalized way .
- Create the DB in a `SQL` format , Create `tables` and `relations` needed .
- Edit both `Client\public` and `Client\src`, to add necessary assets and css styles , html and js files .. changes can be applied later for in progress production development .

## 8. User Story:Display the Eye-test results.

**As a user I want to be able to see and the results for my eye-sight test**

- As a user I want to see a page which has information about my eye-test results.
- Edit both `Client\public` and `Client\src`, to add necessary assets and css styles , html and js files .. changes can be applied later for in progress production development .

## 9. User Story:Display the correct recommendation for each eye-test results shown

**As a user I want to see the correct recommendations to be taken further as an advice and this should be related to the test result for each user**

- As a user I want to see recommendations and advices needed to be taken into consideration further on .
- Create `tables` and `relations` needed using sql .
- Edit both `Client\public` and `Client\src`, to add necessary assets and css styles , html and js files .. changes can be applied later for in progress production development .

## 10. Optional user story if time was still available for the project life cycle . User Story:Send the eye test results by email to the user and the shop optician .

**As a user I want to receive an email with all eye-test result details to be able to get back to it when needed and to the optician as well for more convenience for bothe clients and shop owners**

- As a user I want to receive an email of my eye-test results to be kept later for later use.
- Use the correct api for this service for better performance
- Edit both `Client\public` and `Client\src`, to add necessary assets and css styles , html and js files .. changes can be applied later for in progress production development .

## 11. User Story:Contact us Add on feature.

**As a user I want to have a tab with contact us information linked out of the main home page of the website**

- As a user I want to have a tab contact where I have information about `address`, `phone number` , `email address` ... etc
- Edit both `Client\public` and `Client\src`, to add necessary assets and css styles , html and js files .. changes can be applied later for in progress production development .

## 12. User Story:About us Add on feature.

**As a user I want to have a tab with about us information linked out of the main home page of the website**

- As a user I want to have a tab where I can have a description about the whole website the available features and the store activities .
- Edit both `Client\public` and `Client\src`, to add necessary assets and css styles , html and js files .. changes can be applied later for in progress production development .

## 13. User Story:Testing phase.

**As a software engineer I want to be sure that all user stories are function very well and passes all happy paths as a minimum threshold**

- Edit both `Client\public` and `Client\src`, to add necessary assets and css styles , html and js files .. changes can be applied later for testing and bug fixing reasons

## 14. User Story:Deployment.

**As a software engineer I want to have to deploy the portal to be accessible online for team members clients and stakeholders**

- Edit both `Client\public` and `Client\src`, to add necessary assets and css styles , html and js files .. changes can be applied later for deploying and bug fixing reasons.

## 15. User Story:Create Presentation and Documents.

**As a HYF student I want to create a presentation and a document for the whole project for better presentation to the coaches**

- Create the power point presentation and documents , Flyers needed for the Demo day .

## 16. User Story:Create a video for the whole use cases.

**As a HYF student I want to create videos for the whole project for better presentation to the coaches**

-Create a Video for more clear representation ...
