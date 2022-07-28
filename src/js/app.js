import * as flsFunctions from "./modules/functions.js";
import "./modules/slick.js";

flsFunctions.isWebp();

flsFunctions.ibg();

let header__burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    menu.classList.toggle('active');
}
