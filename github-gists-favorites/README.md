## Visit Hosted Website
To view the hosted website, navigate to: [https://github-gists-favorites.netlify.app/](https://github-gists-favorites.netlify.app/)

**Note: For some reason Netlify does not like it when you refresh the page while not on the root domain. Refreshing on the /favorites route results in a Page Not Found error. I deemed solving this out of scope for this project.**

## Or Run The Application Locally


### run: `yarn` in your terminal then `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

##  How would I extend or improve this application design if I were building this for production?

### Better / More Robust and Dynamic Error Handling

I would create a more robust error handling system that caught any error that occured and gave the user a clean alert message noting that error.

### More Reusable Components

I would make two or three of the components in this application more dynamic and reusable. I would pass in props for text copy vs. hard coding the text in each component. 

### Offline First Functionality

I would implement offline functionality for this app so that users could access their favorite gists from anywhere without the need for internet connectivity.

### Request Cacheing

I would want to cache or save username requests and/or payloads locally so that if the user had a certain set of github users they like looking for new gists in, the app wouldn't make any unnecessary api requests.
