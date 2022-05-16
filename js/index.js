window.onload = function () {
  let section = document.querySelector('.section')
  let section2 = document.querySelector('.section2')
  let section3 = document.querySelector('.section3')
  let section4 = document.querySelector('.section4')
  let section5 = document.querySelector('.section5')
  let zhezhao = document.querySelector('.zhezhao')
  let span = document.querySelector('.zhezhao').querySelector('span')
  let father = document.querySelector('.father')
  let son = document.querySelector('.son')
  // 实现进度条  和百分比的变化
  let fatherWidth = parseFloat(getComputedStyle(father).width)
  let timer = null
  timer = setInterval(function () {
    let sonWidth = parseFloat(getComputedStyle(son).width)
    // console.log(sonWidth);
    let value = parseInt((sonWidth / fatherWidth) * 100) + '%'
    if (sonWidth >= fatherWidth) {
      clearInterval(timer)
      zhezhao.style.display = 'none'
    }
    span.innerHTML = value
  }, 100)

  // 实现音乐点击播放
  let audio = document.querySelector('audio')
  let music = document.querySelector('.music')
  music.onclick = function () {
    if (audio.paused) {
      audio.play()
      music.classList.add('zhuan')
    } else {
      audio.pause()
      music.classList.remove('zhuan')
    }
    console.log(1);
  }
  // 点击实现第一个页面的跳转
  let guanyu = document.querySelector('.guanyu')
  guanyu.onclick = function () {
    section.style.display = 'none'
    section2.style.display = 'block'
  }
  // 实现返回跳转
  let backall = document.querySelectorAll('.back')
  backall[0].onclick = function () {
    section.style.display = 'block'
    section2.style.display = 'none'
  }
  backall[1].onclick = function () {
    section2.style.display = 'block'
    section3.style.display = 'none'
  }
  backall[2].onclick = function () {
    section3.style.display = 'block'
    section4.style.display = 'none'
  }
  // 实现第二个页面的跳转
  let test = document.querySelector('.test')
  test.onclick = function () {
    section3.style.display = 'block'
    section2.style.display = 'none'
  }
  // 实现选项卡的切换
  let lis = document.querySelector('.and').querySelectorAll('li')
  let arr = []
  let tijiao = document.querySelector('.tijiao')
  let and2 = document.querySelector('.and2')
  let score = document.querySelector('.span')
  for (let i = 0; i < lis.length; i++) {
    lis[i].onclick = function () {
      if (this.children[0].className == '') {
        this.children[0].src = './img/img.png'
        this.className = 'selected'
      } else {
        this.children[0].src = './img/img2.png'
        this.className = ''
      }
    }
  }
  let starScore = null
  tijiao.onclick = function () {
    let selectedLis = document.querySelectorAll('.selected')
    for (let i = 0; i < selectedLis.length; i++) {
      // console.log(selectedLis[i].children[2].innerHTML);
      arr.push(selectedLis[i].children[2].innerHTML)
    }
    console.log(arr);
    // 循环创建节点和添加节点
    for (let i = 0; i < arr.length; i++) {
      let li = document.createElement('li')
      li.innerHTML = arr[i]
      // 添加节点
      and2.appendChild(li)
    }
    // 判断分数 实现星星的动作
    starScore = arr.length / 2
    let ols = document.querySelector('.ol').querySelectorAll('li')
    // console.log(ols);
    // console.log(ols[4].children[0]);
    score.innerHTML = starScore
    switch (starScore) {
      case 0:
        break;
      case 0.5:
        ols[4].children[0].className = 'move';
        break;
      case 1:
        ols[0].children[0].className = 'move';
        break;
      case 1.5:
        ols[0].children[0].className = 'move';
        ols[4].children[0].className = 'move2';
        break;
      case 2:
        ols[0].children[0].className = 'move';
        ols[1].children[0].className = 'move2';
        break;
      case 2.5:
        ols[0].children[0].className = 'move';
        ols[1].children[0].className = 'move2';
        ols[4].children[0].className = 'move3';
        break;
      case 3:
        ols[0].children[0].className = 'move';
        ols[1].children[0].className = 'move2';
        ols[2].children[0].className = 'move3';
        break;
      case 3.5:
        ols[0].children[0].className = 'move';
        ols[1].children[0].className = 'move2';
        ols[2].children[0].className = 'move3';
        ols[4].children[0].className = 'move4';
        break;
      case 4:
        ols[0].children[0].className = 'move';
        ols[1].children[0].className = 'move2';
        ols[2].children[0].className = 'move3';
        ols[3].children[0].className = 'move4';
        break;
      case 4.5:
        ols[0].children[0].className = 'move';
        ols[1].children[0].className = 'move2';
        ols[2].children[0].className = 'move3';
        ols[3].children[0].className = 'move4';
        ols[4].children[0].className = 'move5';
        break;
      case 5:
        ols[0].children[0].className = 'move';
        ols[1].children[0].className = 'move2';
        ols[2].children[0].className = 'move3';
        ols[3].children[0].className = 'move4';
        ols[5].children[0].className = 'move5';
        break;
    }
    section4.style.display = 'block'
    section3.style.display = 'none'
  }
  //实现最后一个页面的跳转
  let more = document.querySelectorAll('.more')
  let sun = document.querySelector('.sun')
  let xins = document.querySelector('.ol').querySelectorAll('li')
  console.log(more);
  more[0].onclick = function () {
    let lisn = document.querySelector('.and2').querySelectorAll('li')
    section4.style.display = 'none'
    sun.style.display = 'none'
    section5.style.display = 'block'
    arr = []
    console.log(starScore);
    starScore = ''
    for (let i = 0; i < lisn.length; i++) {
      and2.removeChild(lisn[i])
    }
    // 循环清除星星
    console.log(lisn)
    for (let i = 0; i < xins.length; i++) {
      xins[i].children[0].className = ''
    }
    // console.log(xins);
  }
  // 实现返回首页的跳转
  more[1].onclick = function () {
    section5.style.display = 'none'
    section.style.display = 'block'
  }
}