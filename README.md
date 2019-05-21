This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# midterm Simple_Reddit_Clone

This is a simple Reddit clone, where users can post articles and comment on different articles. You can upvote or downvote to posts and comments to share your opinion.
#
## 使用/操作方式
### Install and run
1. `git clone https://github.com/virginiakm1988/Simple-reddit-clone.git` 
2. go to `./backend` , open `server.js` and paste your own MongoDB url to connect to database. 
(Local hosted database is recommended, make sure you start your MongoDB by typing `mongod` in one terminal)
3. In one terminal, `cd backend` and type `npm install` to install server node module
4. In another terminal,  type `npm install` to install client node module directly.
5. type `npm run dev` to start both server and client side. 
6. Start sharing your thoughts and opinions on different posts!
### How it works
* localhost:3000/
![](https://i.imgur.com/YeHvkwc.png)
* inside a post
![](https://i.imgur.com/PABZ35S.png)
* comment down below to share your thoughts about this post! Remember to be nice!
![](https://i.imgur.com/jp7v5YC.png)
The comment is added.
![](https://imgur.com/ZugXuJh.png)
* You can also create your own post
![](https://imgur.com/wJ1m05n.png)


#
## 其他說明
#####done
- [x] Submit you post to your sub
- [x] Comment
- [x] Upvote and downvote a post, show the ratings
- [x] Upvote and downvote a comment, show the ratings
#####undone
- [ ] login/register
- [ ] Classification
- [ ] sort the posts and comments by its ratings
- [ ] comment below a comment



#
## 使用與參考之框架/模組/原始碼

###Module Used
##### client side
* axios
* ReactJS
##### backend
* express 
* node.js
* body-parser
* mongoose
#####參考框架
* [A basic MERN stack todo list](https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/): 參考前後端的連結
* [Login/Auth app with the MERN stack](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82):登入用戶的，不過最後還沒有做完連結(Using react-redux, redux and redux-think)
##
## 我的貢獻
自己手刻前後端
* build a website whose client-side is in React, server side is in Express, use mongoose to store  to communicate 
* 調了很久的css 讓這個 reddit site 看起來稍微美觀一點，因為原本的reddit 電腦版看起來實在是太宅了，在滑的時候會被當成是肥宅。
* remove the features of editing post, also enable the users to vote the posts.
* connect the project to database to store all the data. 
## 心得
- 這次的Project使我對於backend 和client 的連結、以及如何使用Database來存儲資料變得更加熟悉。
- 在做Project時，我一開始對於route與後端的連結感到很陌生，而且看了不同的code與不同做法、tutorial後還是一知半解，只知道他們這樣寫會動，而不知其所以然。後來決定破釜沉舟去了解每一個功能以後才能夠自己應用、自己加東西。
- 其實有寫一個Auth/Login的功能，但是因為對redux使用上還不夠熟悉，所以沒有實作與Post/comment結合。開始覺得好像有點了解在做什麼的時候已經死線在即了，所以放在github的版本是沒有登入功能的。

- 想清楚前後端彼此之間的互動關係真的很重要。
- CSS 選擇自己刻真的需要極大的勇氣與時間，當初對自己太有自信了。不過網路上論壇形式的template也不多。
