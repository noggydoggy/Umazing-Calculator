


function calculate() {
  

  //initial stats   
  const speed = parseFloat(document.getElementById('speed').value);
  const power = parseFloat(document.getElementById('power').value);
  const stamina = parseFloat(document.getElementById('stamina').value);
  const guts = parseFloat(document.getElementById('guts').value);
  const wit = parseFloat(document.getElementById('wit').value);
  
 //strategy modifier
  const strategyModifier = parseFloat(document.getElementById('strategyMod').value);
  
  //course distance
  const courseDistance = parseFloat(document.getElementById('courseDistance').value);
 

  //horse length
  const bashin = 2.5;

  //Speed calculations

        //Force-in modifier (this applies in the early-race when an uma is more than 0.12 course width away from the inner fence and inside is open.)
        const forceInMod =  strategyModifier + Math.random();
  
        //Slope Modifier

        //Dependent on maps, changes depending on course events.


        //Base Speed
        
            //Determined by course distance

            const baseSpeed = 20 - ((courseDistance - 2000)/1000);



        // A race is divided into 4 phases. Phases affect a uma’s behavior and target speed. Some skills only activate in a certain phase.
//Early-race (0): Section 1 to 4.
//Mid-race (1): Section 5 to 16.
//Late-race (2): Section 17 to 20.
//Last Spurt (3): Section 21 to 24. Not to be confused with the concept of last spurt.

  
 

//Calculate how fast you get through the early phase. (Sections 1-4)

  const speedEarly = baseSpeed;
  const timeEarly = courseDistance/speedEarly;

  document.getElementById('speedEarly').textContent = `Average Speed: ${speedEarly.toFixed(2)} m/s`;
  document.getElementById('timeEarly').textContent = `Time: ${timeEarly.toFixed(2)} seconds`;


 //Calculate how fast you get through the mid race. (Sections 5-16)

 const speedMid = baseSpeed; 
 const timeMid =  timeEarly + (courseDistance/speedMid);
  
  document.getElementById('speedMid').textContent = `Average Speed: ${speedMid.toFixed(2)} m/s`;
  document.getElementById('timeMid').textContent = `Time: ${timeMid.toFixed(2)} seconds`;

  //Calculate how fast you get through the late race. (Sections 17-20)
  
  const speedLate = baseSpeed;
  const timeLate = timeMid + (courseDistance/speedLate);
  
  document.getElementById('speedLate').textContent = `Average Speed: ${speedLate.toFixed(2)} m/s`;
  document.getElementById('timeLate').textContent = `Time: ${timeLate.toFixed(2)} seconds`;

  //Calculate how fast you get through the last spurt. (Sections 21-24)
  
  const speedLast = baseSpeed;
  const timeLast =  timeLate + (courseDistance/speedLast);
  
  document.getElementById('speedLast').textContent = `Average Speed: ${speedLast.toFixed(2)} m/s`;
  document.getElementById('timeLast').textContent = `Time: ${timeLast.toFixed(2)} seconds`;

}