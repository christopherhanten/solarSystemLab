const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

//console.log(solarSystem[0].ringSystem);


//1.console.log(solarSystem[0].ringSystem)
//2.console.log(solarSystem[7].moons[1])
//3.solarSystem[1].moons.push("Endor");
//4.solarSystem.push({name: "Pluto", ringSystem: false, moons: ["Charon"]})
solarSystem.name = "Earth".push({diameter: "7,917.5 miles"});
