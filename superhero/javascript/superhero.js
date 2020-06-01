let data=JSON.parse(localStorage.getItem('superheroPageData'));
if(data==null){//if no data nothing to do go back
	window.location="index.html";
}
//now simply one by ine adding element using i can make it more better by storing all properties in array nd iterate over it
let imgDiv=$(document.createElement('img'));
let url=data['image']['url'];

imgDiv.attr({
	'height':'250px',
	'width':'50%',
	'src':url,
	'object-position':'center'
});
imgDiv.text('i am added');
imgDiv.addClass('superheroDiv');
imgDiv.addClass('backgroundProperty');
imgDiv.appendTo('#main-container');


let  biography=$(document.createElement('div'));
var html="<table class='table table-dark superherotable'>"+
			"<thead><tr><th class='text-center' scope='col' colspan='2'>BIOGRAPHY</th></thead>"+
			"<tr> <th scope='col'> Name</th><td scope='col'>"+data['biography']['full-name']+"</td></tr>"+
		  	"<tr> <th scope='col'> Place Of Birth</th><td scope='col'>"+data['biography']['place-of-birth']+"</td></tr>"+
			"<tr> <th scope='col'> Alter Egos</th><td scope='col'>"+data['biography']['alter-egos']+"</td></tr>"+
		  	"<tr> <th scope='col'> Publisher</th><td scope='col'>"+data['biography']['publisher']+"</td></tr>"+
		  	"</table>";
biography.addClass('superheroDiv');
biography.html(html);
biography.appendTo('#main-container');

let  powerstats=$(document.createElement('div'));
var html="<table class='table table-dark superherotable'>"+
			"<thead><tr><th class='text-center' scope='col' colspan='2'>POWERSTATS</th></thead>"+
			"<tr> <th scope='col'> Intelligence</th><td scope='col'>"+data['powerstats']['intelligence']+"</td></tr>"+
		  	"<tr> <th scope='col'> Power</th><td scope='col'>"+data['powerstats']['power']+"</td></tr>"+
			"<tr> <th scope='col'> Speed</th><td scope='col'>"+data['powerstats']['speed']+"</td></tr>"+
		  	"<tr> <th scope='col'> Strength</th><td scope='col'>"+data['powerstats']['strength']+"</td></tr>"+
		  	"<tr> <th scope='col'> Combat</th><td scope='col'>"+data['powerstats']['combat']+"</td></tr>"+
		  	"</table>";
powerstats.addClass('superheroDiv');
powerstats.html(html);
powerstats.appendTo('#main-container');
let appearanceObj=data['appearance'];
let appearance =$(document.createElement('div'));
var html="<table class='table table-dark superherotable'>"+
			"<thead><tr><th class='text-center' scope='col' colspan='2'>APPEARANCE</th></thead>"+
			"<tr> <th scope='col'> Gender</th><td scope='col'>"+appearanceObj['gender']+"</td></tr>"+
		  	"<tr> <th scope='col'> Weight</th><td scope='col'>"+appearanceObj['weight']['1']+"</td></tr>"+
			"<tr> <th scope='col'> hair-color</th><td scope='col'>"+appearanceObj['hair-color']+"</td></tr>"+
		  	"<tr> <th scope='col'> eye-color</th><td scope='col'>"+appearanceObj['eye-color']+"</td></tr>"+
		  	"<tr> <th scope='col'> heigth</th><td scope='col'>"+appearanceObj['height']['1']+"</td></tr>"+
		  	"</table>";
appearance.addClass('superheroDiv');
appearance.html(html);
appearance.appendTo('#main-container');


