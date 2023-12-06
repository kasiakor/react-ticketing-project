# Ticketing Project

## Introduction

It is a web-based application with which the user can access a list of the latest tickets.
The first screen of the application is a login page.
After successful login user is navigated to the main screen of the application.
The correctness of each Tax ID is checked, based on the correctness algorithm of the Greek Tax
ID.
The user, by double-clicking on the description of a ticket, can change the status of the ticket
to "Finished". The specific change is made by calling the server’s API.
The user, by pressing a button in the upper right corner of the screen, can change
the way the ticket list is displayed from tabs to grid format and vice versa.
The app is responsive.

## Installation/Launch

Download or clone the repository
In the project directory
Run **npm install**
Run **npm start**

Open http://localhost:3000 to view it in the browser.

## Technologies applied

Application has been developed with React 18 using create-react-app.

State Management - useContext
Routing - react router
Api calls - axios
Bundling - webpack
Keys unique id - uuid
UI - JSX, Material UI
Additional styling - CSS

## Build status

The application has been partially implemented

### implemented

User Login validation with jwt token
Validation of Greek Tax Id
Responsive design

### not implemented

Change of ticket status
Display view toggle

## Screenshots

![Alt text](/public//ticket.PNG)

## API reference

Service Base url: https://frontendtest.unixfor.gr
Login: /api/Tickets/login
Get Tickets: /api/Tickets/GetTickets
Update Status: /api/Tickets/UpdateStatus
