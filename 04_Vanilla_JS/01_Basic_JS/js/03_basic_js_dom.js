// DOM: Document of Module

// #: id로 찾기
const title = document.getElementById("title");

// .: class로 찾기
const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = 'red';
document.title = "I own you now"