/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
 	"name":"Pei-Hsuan Hsieh",
 	"role":"Student",
 	"contacts":{
 		"email":"peihsuanhs@gmail.com",
 		"github":"https://github.com/peihsuan",
 		"location":"Tainan"
 	},
 	"welcomeMessage":"Hello, Glad to see you here.",
 	"skills":["programming","laughing","eating"],
 	"bioPic":"https://avatars2.githubusercontent.com/u/4489946?v=3&s=460"
 };
/*
var work = [] ;
work.position = "master student";
work.city_of_bussiness = "Tainan";
 */
var education={
	"schools": [{
		"name": "NCKU",
		"city": "Tainan",
		"degree": "BA",
		"major": ["CompSci"]
	}, {
		"name": "NCKU",
		"city": "Tainan",
		"degree": "Masters",
		"major": ["CompSci"]
	}]
};
var work = {
	"jobs":[
		{
			"title": "collage student",
			"employer":"NCKU",
			"duration":"2010-2014",
			"location": "Tainan",
			"description":"collage student"
		},
		{
			"title": "master student",
			"employer":"NCKU Netdb",
			"duration":"2014-2016",
			"location": "Tainan",
			"description":"master student"
		}
	 ]
};
var projects = {
	"project":[
		{
			"title":"sample project",
			"dates":"2016",
			"img":"URL1",
			"description":"smaple project des"
		},
		{
			"title":"sample project 2",
			"dates":"2016",
			"img":"URL2",
			"description":"smaple project des"
		}
	]
};
function displayWork(works){
		if(work.jobs.length!=0){
			$("#workExperience").append(HTMLworkStart);	
			for(item in work.jobs){
				var append_text = "".concat(
					HTMLworkEmployer.replace("%data%",work.jobs[item].employer),
					HTMLworkTitle.replace("%data%",work.jobs[item]['title']),
					HTMLworkDates.replace("%data%",work.jobs[item].duration),
					HTMLworkLocation.replace("%data%",work.jobs[item].location),
					HTMLworkDescription.replace("%data%",work.jobs[item].description)
					);
				$(".work-entry").append(append_text);
			}
		}
}
function locationizer(work_obj){
	 var loc_array = [];
    for(job in work.jobs){
        loc_array.push(work.jobs[job].location);
    }
    return loc_array;
};

function inName(name){
	var split_name = bio.name.split(" ");
	split_name = "".concat(split_name[0][0].toUpperCase(),split_name[0].slice(1).toLowerCase()," ",split_name[1].toUpperCase());
	
	return split_name;
};

projects.display = function(){
	if(projects.project.length!==0){
		$("#projects").append(HTMLprojectStart);
		for (item in projects.project){
			var append_text = "".concat(
				HTMLprojectTitle.replace("%data%",projects.project[item].title),
				HTMLprojectDates.replace("%data%",projects.project[item].dates),
				HTMLprojectDescription.replace("%data%",projects.project[item].description)
	//			HTMLprojectImage.replace("%data%",projects.project[item].
			);
			$(".project-entry").append(append_text);
		}
	}
};

$(document).click(function(loc){
	logClicks(loc.pageX,loc.pageY);
});

$("#header_name").append(HTMLheaderName.replace("%data%",bio['name']));
$("#header_name").append(HTMLheaderRole.replace("%data%",bio.role));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts['email']));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts['github']));
$("#bio_content").append(HTMLbioPic.replace("%data%",bio.bioPic));
$("#bio_content").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
$("#main").append(internationalizeButton);

if(bio.skills.length!==0){
	$("#header").append(HTMLskillsStart);
	for(i=0;i<bio.skills.length;i++){
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
	}
}

displayWork(work);
projects.display();
$("#mapDiv").append(googleMap);
