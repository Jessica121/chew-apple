// glucose meter draw by canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
// ctx.fillRect(0,150,100,500);//potatoe 3
// ctx.fillRect(0,0,100,500);//cupcake 4
// ctx.fillRect(0,250,100,500);//apple 2
ctx.fillRect(0,350,100,500);//chicken 1


function changeGlucoseApple(){
  // glucose meter draw by canvas
ctx.fillStyle = "green";
ctx.fillRect(0,250,100,500);//apple 2

}

// animation

var addEvent = (function () {
  if (document.addEventListener) {
    return function (el, type, fn) {
      if (el && el.nodeName || el === window) {
        el.addEventListener(type, fn, false);
      } else if (el && el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      }
    };
  } else {
    return function (el, type, fn) {
      if (el && el.nodeName || el === window) {
        el.attachEvent('on' + type, function () { return fn.call(el, window.event); });
      } else if (el && el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      }
    };
  }
})();

(function () {

var pre = document.createElement('pre');
pre.id = "view-source"

// private scope to avoid conflicts with demos
addEvent(window, 'click', function (event) {
  if (event.target.hash == '#view-source') {
    // event.preventDefault();
    if (!document.getElementById('view-source')) {
      pre.innerHTML = ('<!DOCTYPE html>\n<html>\n' + document.documentElement.innerHTML + '\n</html>').replace(/[<>]/g, function (m) { return {'<':'&lt;','>':'&gt;'}[m]});
      document.body.appendChild(pre);      
    }
    document.body.className = 'view-source';
    
    var sourceTimer = setInterval(function () {
      if (window.location.hash != '#view-source') {
        clearInterval(sourceTimer);
        document.body.className = '';
      }
    }, 200);
  }
});
  
})();


  var eat = ['yum!', 'gulp', 'burp!', 'nom'];
  var yum = document.createElement('p');
  var msie = /*@cc_on!@*/0;
  yum.style.opacity = 1;

  var links = document.querySelectorAll('li > a'), el = null;
  for (var i = 0; i < links.length; i++) {
    el = links[i];
  
    el.setAttribute('draggable', 'true');
  
    addEvent(el, 'dragstart', function (e) {
      e.dataTransfer.effectAllowed = 'copy'; // only dropEffect='copy' will be dropable
      e.dataTransfer.setData('Text', this.id); // required otherwise doesn't work
    });
  }

  var bin = document.querySelector('#bin');

  addEvent(bin, 'dragover', function (e) {
    if (e.preventDefault) e.preventDefault(); // allows us to drop
    this.className = 'over';
    e.dataTransfer.dropEffect = 'copy';
    return false;
  });

  // to get IE to work
  addEvent(bin, 'dragenter', function (e) {
    this.className = 'over';
    return false;
  });

  addEvent(bin, 'dragleave', function () {
    this.className = '';
  });

  addEvent(bin, 'drop', function (e) {
    if (e.stopPropagation) e.stopPropagation(); 

    var el = document.getElementById(e.dataTransfer.getData('Text'));
    
    el.parentNode.removeChild(el);

    bin.className = '';
    yum.innerHTML = eat[parseInt(Math.random() * eat.length)];

    var y = yum.cloneNode(true);
    bin.appendChild(y);

    setTimeout(function () {
      var showNxtInstru = document.getElementById("showNextInstr");
    
      var t = setInterval(function () {
        if (y.style.opacity <= 0) {
          if (msie) { 
            y.style.display = 'none';
          }
          clearInterval(t); 
        } else {
          y.style.opacity -= 0.1;
        }
       showNextInstr.innerHTML = "(Now observe how glucose measurement changes)";
       changeGlucoseApple();
      }, 050);
    }, 250);
    chew();

    return false;
  });

function swallow(){

var open = document.getElementById("bigHead");
    open.src = "https://trello-attachments.s3.amazonaws.com/5966eb322660feab79862599/5988919f881ac604b5b81dbe/84ee803fd5b485632d9125f262544a9c/p33_Kara_head.png";                              
}
function chew()
{ 

    var chew = document.getElementById("bigHead");
    var cancelInstru = document.getElementById("chewInstru");

    cancelInstru.innerHTML = "";
    chew.src = "https://trello-attachments.s3.amazonaws.com/5966eb322660feab79862599/5988919f881ac604b5b81dbe/69191af6439ec23bd744ff2d40fecd87/p56_Kara_head_eating.png";                              
}
/*@cc_on'abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video'.replace(/\w+/g,function(n){document.createElement(n)})@*/