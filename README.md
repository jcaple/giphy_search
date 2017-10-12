# JC's Giphy Search Tool

## Project Description

This is a NodeJS/Express/Vue/Bootstrap web application that allows the user to search giphy.com from a simple
web interface and share resulting images on their Facebook feed.

This project is just for fun and to do some interesting things with the NodeJS/Vue/Express platform and Docker.

## Supported Web Browsers

Compatible with Google Chrome Version 61.0.3163.100 and Internet Explorer 40.15063.0.0.

Testing on Firefox 40.15063.0.0 revealed many display discrepancies not encountered in the browsers mentioned above.

## Usage

### Run From Source

1.  Clone the repository
2.  **Obtain your own giphy.com API Key**
3.  Enter API key in approprate place in frontend.js
4.  npm run start
5.  Using Google Chrome (or IE Edge) navigate to http://localhost:8000
6.  Enter any email address/password combination

### Pull Docker Image from Docker Hub

1.  docker run -p 8000:8000 -d jcaple007/gliphy_search
2.  Using Google Chrome (or IE Edge) navigate to http://localhost:8000
3.  Enter any email address/password combination

### Build Docker Container and Run Locally

1.  Type 'make'
2.  Using Google Chrome (or IE Edge) navigate to http://localhost:8000
3.  Enter any email address/password combination
