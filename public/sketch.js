const bg = 50;
let layer;
let mode = "pen";
let last = null;
let erSize;
let penSize;
let txtSize;
let penC;
let socket;
let poiC;
let poiLayer;
let poiSize;
let cnv;
let controlZone;
let isInside = false;
let myaud;
let txtLayer;
let currTxt = "";
let txtPos = null;
let texts = [];
let bannedKeys = [
  "Shift",
  "Control",
  "CapsLock",
  "Tab",
  "Escape",
  "Alt",
  "ContextMenu",
  "Home",
  "Insert",
  "End",
  "PageUp",
  "PageDown",
  "Delete",
  "NumLock",
  "ArrowUp",
  "ArrowDown",
  "ArrowRight",
  "ArrowLeft",
  "ScrollLock",
  "Clear",
  "F1",
  "F2",
  "F3",
  "f4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
  " ",
];
let emojis = "🙂🙁😐😉😕🤪👿";
let otherTxt = [];
let poiPos = [];
let lazy = null;
let otherPos = [];
let lastKeys = [];
let willUpdate = false;
let idHeader;
let myId = "";
let isActive = false;
let wasActive = false;
let keysPressed = [];
let newUserName = "";
// let isDev = true;
let isDev = false;
let prod_url = "https://pwhiteboard.herokuapp.com/";
let dev_url = "http://localhost:8080";
let url = isDev ? dev_url : prod_url;
let userName = null;
let penHolded = false;
let userLeft = null;
let defColor = "white";

// temp variables
let focusStealer;

function setup() {
  console.log(`Currently available Emojis: ${emojis}`);
  window.lazyBrush = LazyBrush;
  socket = io.connect(url);
  userName = window.prompt("Enter Name");
  socket.emit("newName", userName);
  colorMode(HSB);
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  focusStealer = document.getElementById("fs");

  idHeader = createElement("h3", "ID: ");
  poiC = color(random(255), 100, 100, 150);

  cnv = createCanvas(window.innerWidth, window.innerHeight - 120);
  background(bg);
  colorMode(RGB);

  idHeader.position(10, height + 50);
  controlZone = document.getElementById("defaultCanvas0");
  layer = createGraphics(width, height);
  txtLayer = createGraphics(width, height);
  poiLayer = createGraphics(width, height);
  txtLayer = createGraphics(width, height);
  erSize = width / 20;
  penSize = width / 500;
  poiSize = width / 20;
  txtSize = parseInt(36000 / width);
  if (poiSize > 30) poiSize = 30;
  socket.on("connection", (data) => {
    let showImg = createImg(data.prevData.img, "");
    myCls();
    otherTxt = data.prevData.txt;
    showImg.hide();
    layer.clear();
    setTimeout(() => {
      layer.image(showImg, 0, 0, width, height);
    }, 5);
    myId = data.id;
    idHeader.elt.innerText =
      "Name: " + (userName && userName !== "" ? userName : myId);
  });
  socket.on("userDisconnect", (userName) => {
    userLeft = userName;
    setTimeout(() => {
      userLeft = null;
    }, 2000);
  });
  socket.on("newUser", (data) => {
    newUserName = data;
    setTimeout(() => {
      newUserName = null;
    }, 2000);
  });

  socket.on("undo", (data) => {
    let prevImg = createImg(data.img, "");
    myCls();
    texts = [...data.txt];
    otherTxt = texts;
    if (data.txt.length > 0) {
      currTxt = data.txt[data.txt.length - 1].txt;
    }
    prevImg.hide();
    setTimeout(() => {
      layer.clear();
      layer.image(prevImg, 0, 0, width, height);
    }, 10);
  });

  socket.on("redo", (data) => {
    let prevImg = createImg(data.img, "");
    myCls();
    otherTxt = data.txt;
    prevImg.hide();
    setTimeout(() => {
      layer.clear();
      layer.image(prevImg, 0, 0, width, height);
    }, 10);
  });

  socket.on("newTxt", (data) => {
    otherTxt.push(data);
    console.log(data);
  });

  socket.on("txtData", (data) => {
    otherTxt[otherTxt.length - 1] = {
      ...otherTxt[otherTxt.length - 1],
      txt: data,
    };
  });
  socket.on("newClient", (clientId) => {
    console.log("New Client :", clientId);
  });
  socket.on("pen", (data) => {
    let pcol = color(data.color[0], data.color[1], data.color[2]);
    layer.stroke(pcol);
    layer.strokeWeight(data.size * height);
    layer.line(
      data.last.x * width,
      data.last.y * height,
      data.curr.x * width,
      data.curr.y * height
    );
  });
  socket.on("userData", (data) => {
    poiLayer.clear();
    poiLayer.fill(
      data.poiC.levels[0],
      data.poiC.levels[1],
      data.poiC.levels[2],
      125
    );
    poiLayer.stroke(0);
    poiLayer.circle(data.curr.x * width, data.curr.y * height, 10);
    poiLayer.stroke("#fff");
    poiLayer.strokeWeight(1);
    poiLayer.fill("#000");
    poiLayer.textSize(16);
    poiLayer.text(
      data.id,
      data.curr.x * width - 75,
      data.curr.y * height - 35,
      width,
      height
    );
  });
  socket.on("cls", () => {
    myCls();
  });
  socket.on("erase", (data) => {
    layer.stroke(bg);
    layer.strokeWeight(data.size);
    layer.line(
      data.last.x * width,
      data.last.y * height,
      data.curr.x * width,
      data.curr.y * height
    );
  });

  socket.on("poi", (data) => {
    poiLayer.stroke(
      data.color.levels[0],
      data.color.levels[1],
      data.color.levels[2],
      150
    );
    poiLayer.clear();
    poiLayer.strokeWeight(4);
    poiLayer.beginShape();
    for (pos of data.arr) {
      poiLayer.vertex(pos.x * width, pos.y * height);
    }
    poiLayer.endShape();
    poiLayer.noStroke();
    poiLayer.fill(
      data.color.levels[0],
      data.color.levels[1],
      data.color.levels[2],
      150
    );
    poiLayer.ellipse(data.x * width, data.y * height, data.size * width);
  });
  socket.on("poicls", () => {
    poiLayer.clear();
  });

  sizeSlider = createSlider(2, 100, penSize, 2);
  let penbtn = createButton("Pen");
  penbtn.mousePressed(() => {
    if (mode === "poi") {
      socket.emit("poicls");
    }
    poiLayer.clear();
    if (mode !== "pen") {
      mode = "pen";
      print("Pen Mode!");
    }
    sizeSlider.value(penSize);
  });
  let poibtn = createButton("Pointer");
  poibtn.mousePressed(() => {
    if (mode !== "poi") {
      mode = "poi";
      print("Pointer Mode!");
    }
  });
  let erbtn = createButton("Eraser");
  erbtn.mousePressed(() => {
    if (mode === "poi") {
      socket.emit("poicls");
    }
    poiLayer.clear();
    if (mode !== "er") {
      mode = "er";
      console.log("Eraser mode!");
      sizeSlider.value(erSize);
    }
  });
  let clsbtn = createButton("Clear");
  clsbtn.mousePressed(() => {
    sendCls();
    console.log("Cleared the screen \n:D");
  });
  let txtBtn = createButton("Text");
  txtBtn.mousePressed(() => {
    if (mode === "poi") {
      socket.emit("poicls");
    }
    poiLayer.clear();
    if (mode !== "txt") {
      mode = "txt";
      console.log("Text mode!");
      sizeSlider.value(txtSize);
    }
  });
  createElement("h3", "<b>Size</b>").position(
    penbtn.width +
      txtBtn.width +
      erbtn.width +
      poibtn.width +
      clsbtn.width +
      10,
    height - 10
  );
  sizeSlider.position(
    penbtn.width +
      txtBtn.width +
      erbtn.width +
      poibtn.width +
      clsbtn.width +
      45,
    height + 5
  );
  sizeSlider.changed(() => {
    if (mode === "pen") {
      penSize = sizeSlider.value();
      console.log("pen size :", penSize);
    } else if (mode === "er") {
      erSize = sizeSlider.value();
      console.log("eraser size :", erSize);
    } else if (mode === "txt") {
      txtSize = sizeSlider.value();
      console.log("text size :", txtSize);
    }
  });
  createElement("h3", "<b>Color</b>").position(
    penbtn.width +
      txtBtn.width +
      erbtn.width +
      poibtn.width +
      clsbtn.width +
      sizeSlider.width +
      50,
    height - 10
  );
  colorPicker = createColorPicker("white");
  penC = colorPicker.color();
  colorPicker.position(
    penbtn.width +
      txtBtn.width +
      erbtn.width +
      poibtn.width +
      clsbtn.width +
      sizeSlider.width +
      100,
    height
  );
  colorPicker.changed(() => {
    penC = colorPicker.color();
  });
}

function draw() {
  isInside = Boolean(mouseX <= width && mouseY <= height);
  background(bg);
  showTxt();
  poiLayer.image(txtLayer, 0, 0);
  image(layer, 0, 0);
  image(poiLayer, 0, 0);
  if (isInside) {
    if (mode === "poiwait") {
      mode = "poi";
    }
    if (mode === "pen") {
      cursor("./pen_cursor.png", -10, -10);
      pen();
    } else if (mode === "poi" || mode === "poiwait") {
      cursor("pointer");
      pointer();
    } else if (mode === "er") {
      eraser();
      cursor("./er_cursor.png");
    } else if (mode === "txt") {
      txtFun();
    }
  } else {
    cursor();
    last = null;
    if (mode === "poi") {
      socket.emit("poicls");
      mode = "poiwait";
      console.log("cls");
    }
  }
  if (newUserName) {
    textSize(26);
    let offset = newUserName.length * 16 + 140;
    fill(poiC.levels[0], poiC.levels[1], poiC.levels[2], 100);
    rect(width - (offset + 20), height - 50, offset + 20, 40);
    stroke(255);
    fill(0);
    strokeWeight(2);
    text(newUserName + " has joined.", width - offset, height - 20);
    noStroke();
    text(newUserName + " has joined.", width - offset, height - 20);
  }
  if (userLeft) {
    textSize(26);
    let offset = userLeft.length * 16 + 140;
    fill(poiC.levels[0], poiC.levels[1], poiC.levels[2], 100);
    rect(width - (offset + 20), height - 50, offset + 20, 40);
    stroke(255);
    fill(0);
    strokeWeight(2);
    text(userLeft + " has left.", width - offset, height - 20);
    noStroke();
    text(userLeft + " has left.", width - offset, height - 20);
  }
}

function mouseReleased() {
  if (!(mode == "poi" || mode == "txt") && isInside) {
    sendNewData();
  }
}

let sendUserData = () => {
  let userData;
  if (lazy) {
    cords = lazy.getBrushCoordinates();
    userData = {
      curr: {
        x: cords.x / width,
        y: cords.y / height,
      },
      poiC: poiC,
      id: userName && userName !== "" ? userName : myId,
    };
  } else if (last) {
    cords = last;
    userData = {
      curr: {
        x: cords.x / width,
        y: cords.y / height,
      },
      poiC: poiC,
      id: userName && userName !== "" ? userName : myId,
    };
  }
  if (userData) {
    socket.emit("userData", userData);
  }
};
