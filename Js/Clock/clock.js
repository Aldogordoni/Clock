function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  let dtFormat = new Intl.DateTimeFormat('default',{
    hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
  });
  let date = new Date();
  
  let timeString = dtFormat.format(date);

  background(5, 41, 53);
  translate(250,250);
  
  rotate(-90);
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(8);
  noFill();
  
  stroke(239, 71, 111);
  let secondsArc = map(sc,0,60,0,360);
  arc(0,0,300,300,0,secondsArc);
  
  push();
  rotate(secondsArc);
  strokeWeight(4);
  line(0,0,100,0);
  pop();
  
  stroke(255, 209, 102);
  let minutesArc = map(mn,0,60,0,360);
  arc(0,0,280,280,0,minutesArc);
  
  push();
  rotate(minutesArc);
  strokeWeight(6);
  line(0,0,70,0);
  pop();
  
  stroke(6, 214, 160);
  let hoursArc= map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,hoursArc);
  
  push();
  rotate(hoursArc);
  strokeWeight(8);
  line(0,0,50,0);
  pop();
  
  stroke(255);
  point(0,0);
  
  rotate(90);
  strokeWeight(0.1);
  fill(255);
  textSize(50);
  textFont('Fake Hope Regular');
  text(timeString, -85,220);
}
