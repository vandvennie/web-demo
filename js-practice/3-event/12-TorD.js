const qzs = [
  "What's your relationship dealbreaker?",
  "What's a secret you've never told anyone?",
  "Do you have a hidden talent?",
  "Who was your first celebrity crush?",
  "Have you ever cheated in an exam?",
  "If you were going to be on a reality TV show, which would it be?",
  "What's your biggest insecurity?",
  "What's the biggest mistake you've ever made?",
  "What's one thing you hate people knowing about you?",
  "What's the worst thing anyone's ever done to you?",
  "What's the best thing anyone's ever done for you?",
  "What's your worst habit?",
  "What's the biggest misconception about you?",
  "What's one thing you wish people knew about you?",
  "Why did your last relationship break down?",
  "What's the best piece of advice you've been given?",
  "What's the most you've spent on a night out?",
  "Have you ever returned or re-gifted a present?",
  "Do you have a favourite sibling?",
  "What have you purchased that's been the biggest waste of money?",
  "How would you rate your looks on a scale of 1 to 10?",
  "What celebrity do you look up to?",
  "If you could be one celebrity for a day, who would it be?",
  "If you could do any job in the world, what would it be?",
  "What's your dream life?",
  "What do you value the most - money, fame, success, friends, family, etc?",
  "What’s your biggest red flag?",
  "If you had to marry someone in this room, who would it be and why?",
  "What’s one movie you’re embarrassed to admit you enjoy?",
  "What music artist do you secretly think is overrated?",
  "What’s your most controversial political opinion?",
  "Name something you can’t live without",
  "Where do you think you’ll be in five years time?",
  "What's on your 'On Repeat' Spotify playlist right now?",
  "How well do you think you’d do in a horror movie?",
  "How many stuffed animals do you own?",
  "Did you ever get in trouble at school? And if so what for?",
  "Do you have any phobias?",
  "Who was the last person you kissed?",
  "If you could marry any celebrity, who would it be and why?",
  "What is your love language?",
  "Who in your phone book would you least like to call right now?",
  "Who is your 'The One That Got Away'?",
  "Do you have a celebrity lookalike?",
  "What are your five most-watched films?"
];

const qz = document.querySelector('.card .quiz')
const str = document.querySelector('.card .start')
const stp = document.querySelector('.card .stop')
let i = 0
let n//这里需要声明一个全局变量
str.addEventListener('click', function(){
  n = setInterval(function(){
    if (qzs.length === 0) {
      qz.innerHTML = 'We ran out of questions.'
      clearInterval(n)  // 停止定时器
      str.disabled = stp.disabled = true 
      return  // 结束函数
    }

    // if (qzs.length === 1) {
    //   str.disabled = true
    //   stp.disabled = true  
    // }

    if (i >= qzs.length) {
      i = 0}
  
    qz.innerHTML = `${qzs[i]}`
    i++
  },200)
  str.disabled = true
  stp.disabled = false
})

stp.addEventListener('click', function(){
    clearInterval(n)
    qzs.splice(i - 1, 1)
    stp.disabled = true
    str.disabled = false
    console.log(i)
    console.log(qzs)
})

