# News App
### Built using React.JS with CORS-enabled backend in Flask (running on AWS server)
### deep-learning classification model made using HuggingFace transformers 

In this day and age, all the world's news are at our fingertips but instead of having to hunt them down individually, I decided to create an **aesthetically-pleasing**, **easy-to-use**, and **non-overwhelming** fullstack App capable of rendering all recent news using a News API.

Once you clone this repo:
  - cd into newsApp/
  - run *npm start* to run the dev server
  - go to *localhost:3000/* to view the application

Here is the landing page for the app:

![alt text](https://github.com/mxzahid/newsApp/blob/main/reactNewsAppLP.png?raw=true)

Each card shows the Title and author of the news article and is click-to-flip, which shows the rest of the article on the back like this:

![alt text](https://github.com/mxzahid/newsApp/blob/main/reactNewsClick.png?raw=true)

Once the loading animation on the back finishes once the article goes through my **deep-learning transformer roBERTa model for classification with ~90% accuracy** (running on a flask backend on a linux AWS machine) and returns JSON which is used to create beautiful doughnut charts for ease of comprehension:

![alt text](https://github.com/mxzahid/newsApp/blob/main/reactAppShowViz.png?raw=true)

(Note: if the loading doesn't finish, it means that I stopped paying for the server because I was cheap :D)


