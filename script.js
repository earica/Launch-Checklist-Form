


         
window.addEventListener("load", function() {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){

         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML= "<h2>Mission Destination</h2>";

         
         let i = Math.floor(Math.random() * Math.floor(5));

         let ol  = document.createElement('ol');
   
         let li = document.createElement('li');
         li.textContent= `Name: ${json[i].name}`;
         ol.appendChild(li);

         li = document.createElement('li');
         li.textContent= `Diameter: ${json[i].diameter}`;
         ol.appendChild(li);

        li = document.createElement('li');
         li.textContent= `Star: ${json[i].star}`;
         ol.appendChild(li);
         missionTarget.appendChild(ol);

         li = document.createElement('li');
         li.textContent= `Distance from Earth: ${json[i].distance}`;
         ol.appendChild(li);

         li = document.createElement('li');
         li.textContent= `Number of Moons: ${json[i].moons}`;
         ol.appendChild(li);

         let img = document.createElement('img');
         img.src=`${json[i].image}`;
         ol.appendChild(img);

         });
      });
   
   
   
   let form = document.querySelector("form");
   
     
  form.addEventListener("submit", function(event) {

        

         let pilotNameInput = document.querySelector("input[name=pilotName]");
         let copilotNameInput = document.querySelector("input[name=copilotName]");
         let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
         let cargoMassInput = document.querySelector("input[name=cargoMass");
      
         event.preventDefault();

      if(pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
         alert("All fields required!");
      }
      else if(!isNaN(pilotNameInput.value)){
         alert("Pilot name must include letters only!");
      }
      else if(!isNaN(copilotNameInput.value)){
         alert("Co-pilot name must include letters only!");
      }
      else if(isNaN(fuelLevelInput.value)){
         alert("Fuel level must be a number!");
      }
      else if(fuelLevelInput.value<10000){
         alert
      }
      else if(isNaN(cargoMassInput.value)){
         alert("Cargo Mass must be a number!");
      }
   
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");

   pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} ready for launch`;
   copilotStatus.innerHTML = `Co-Pilot ${copilotNameInput.value} ready for launch`; 

      

      if(fuelLevelInput.value < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel Level too low for launch";
         launchStatus.innerHTML = "Shuttle not ready for launch!";
         launchStatus.style.color = "red";
      }
      else if(cargoMassInput.value > 10000) {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Cargo mass too high for shuttle to launch";
         launchStatus.innerHTML = "Shuttle not ready for launch!";
         launchStatus.style.color = "red";
      }
      else {
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle is ready for launch!";
         launchStatus.style.color = "green";
      }
  });
});

