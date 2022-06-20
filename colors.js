var Links = {
  setColor: function (color) {
    /*var link = document.querySelectorAll("a");
  var i = 0;
  while (i < link.length) {
    link[i].style.color = color;
    i++;
  }
  */
    $("a").css("color", color);
  },
};

var Body = {
  setColor: function (color) {
    //document.querySelector("body").style.color = color;
    $("body").css("Color", color);
  },

  setBgColor: function (color) {
    //document.querySelector("body").style.backgroundColor = color;
    $("body").css("backgroundColor", color);
  },

  setOlColor: function (color) {
    document.querySelector("ol").style.color = color;
  },

  setH2Color: function (color) {
    document.querySelector("h2").style.color = color;
  },

  setPColor: function (color) {
    document.querySelector("p").style.color = color;
  },
};

function nightDayHandle(self) {
  var target = document.querySelector("body");
  if (self.value === "Night") {
    Body.setBgColor("black");
    Body.setColor("white");
    Body.setOlColor("white");
    Body.setH2Color("white");
    Body.setPColor("white");
    Links.setColor("white");
    self.value = "Day";
  } else {
    Body.setBgColor("white");
    Body.setColor("black");
    Body.setOlColor("black");
    Body.setH2Color("black");
    Body.setPColor("black");
    Links.setColor("blue");
    self.value = "Night";
  }
}
