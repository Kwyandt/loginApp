[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/xhlg1JLx)

Description: React Native app for CSCE 490 course focusing on understanding the basics of mobile app development in native. Personal emphasis on functional login using firebase for authentication and navigation bar in-app to help guide development of final project. Our package manager is node.js and I am developing in VS code for windows and running  the app using expo go on my phone.

Video: issue

Concept: Simple app with random things to read, write, and see. Literally something is for everyone/every sense (couldn't make one for touch sadly). App concept is random fun way to test different capabilities of react native anf firebase. Ubuntu penguin theme just for fun :)

Note: I wasn't able to get the authentication fully functioning as I hoped but I didn't want to get into a time sink and not have anything to deliver, but I will continue to work on this app post-due date

~ Notes to Self ~

To Start the app: 
- running on same networks: npx expo start
- running on eduroam (restricted network): npx expo start --tunnel

Resources to Come back to:
- react-native-vector-icons-directory
- react JS SDK
    - npx expo install firebase
    - configure metro:
        - npx expo customize metro.config.js

Bugs and Solutions log:
- Non-std C++ Extension :- npm run --reset-cache
- Importing images from one folder to another requires the path:- "../folderName/fileName"
- tried to use SVG instead of png for app images, causes app to crash and would not revert:- had to copy code to new project, still unsure of the issue at the moment
- would not run, error said todays perfornance wasn't a part of coachelllla
- descriptive/functional aspects of textInput not working, placeholder text not appearing:- flex box error, visual element displayed over textinput
-  Error: Requiring unknown module "827". If you are sure the module exists, try restarting Metro. You may also want to run `yarn` or `npm install`., js engine: hermes :- somehow installed extra dependency which conflicted with existing navigation, removed all navigation from json and reinstalled bottom-tabs and stack


Notes to self for improvement:
- move all styling to css file
- troubleshoot react svgs
- tabBarShowLabel: false (gets rid of lavels on tab bar, depends on how it redners on mobile)
- clean up this readme to be more professional/informative to others
- figure out how to get tab bar to show active page
- for some reason my input field function through an error about react child not working, want to go back later to figure out what the issue is and how to implement the function in code
- future me: use date picker instead of text input for birth
- for firebase: need to look into how uploading to appstore works (storage with firebase different for uploading to ios app store, not sure how this would effect signup/sign in) 
- note to self: there is an anonymous sign in we can use for 'guest' sign in for our app
- for final app, look into email authentication, persistence using firebase and firestore
- also need to add bounds on email and birth date
- in the next app i need to find what the industry standard formatting is, i tend to reduce it to the fewest lines of code possible which also doesn't look very good
