//fetching all name
//now for auto suggestion i need name in advance so  i use localstorage which staring null so forst time when someone open it take around
//5 min to store data 
//then my all start function start
if(localStorage.getItem("suggestionArray")==null){
var arr=new Array();
var accessToken=844581629284738;
async function getName(id){//fetchng name
	try{var response= await fetch('https://www.superheroapi.com/api.php/'+accessToken+'/'+id);
	var data=await response.json();
	
	if(data!=null){
	arr.push(data.name);
	
}
	}catch(error){
		console.log("error",id,error);
	}
	

}
(async function loop(){//i need that when i=1 succes the i=2 happen
	for(let i=1;i<=700;i++){
		var a=await getName(i);
	}

})().then(()=>{
	localStorage.setItem('suggestionArray',JSON.stringify(arr));//storing all value on succes
	start();//callong start after i am ready with data
});
}else{
	//calling start if i have already data
	start();
}

function start(){
	var input=JSON.parse(localStorage.getItem("suggestionArray"));
	var search=document.getElementById('searchByName');
	search.addEventListener('keyup',autocomplete);
	function autocomplete(){
	 	var match =this.value;//taking input text value;
	 	if(match.length>=1){//for empty no go ahead
	 		var suggest=findAllSuggestion(match.toLowerCase());
	 		var maxLength=5;//maximum suggestion list value is 5
	 		$("#listSuggestion").empty();
	 		for(let i =0;i<suggest.length&&i<=maxLength;i++){
	 			let li=$(document.createElement('li'));//creating li
	 			li.addClass('list-item');
	 			li.text(suggest[i]);
	 			li.appendTo('#listSuggestion');
	 			li.click(()=>{
	 				$(this).val(li.text());
	 			})
	 		}
	 	
	 	}else{
	 		//when nothing i need to empty this
	 		$("#listSuggestion").empty();
	 	} 
	}
	function findAllSuggestion(match){
	var ret=new Array();
	for(let a of input){
		var compare=a.toLowerCase();
		if(compare.startsWith(match)===true){//comparing to find all string start with match
			ret.push(a);
		}
		
	}
	return ret;

}
	{//on search button press
		let submitButton=document.getElementById('submitButton');
		submitButton.addEventListener('click',moveToSuperhero);
		function moveToSuperhero(){
				let searchBox=$('#searchByName');
				let name=searchBox.val();
				//console.log(name);
				
	
			(async function searchResult(){
				let response =await fetch('https://www.superheroapi.com/api.php/844581629284738/search/'+name);
				let data=await response.json();
				return data;
			})().then((searchArray)=>{
				let array=searchArray.results;
				$('#goToSuperhero').empty();
				for(let i of array){
					//putting input field
					let text="<strong>Name</strong>&nbsp"+i.name+" "+"<strong>Id</strong>&nbsp:"+i.id;
					var button1="<button  id='li"+i.id +"'"+" "+"type='button'"+" "+" class='d-inline-block btn btn-outline-success'>ADD FAVOURITE LIST</button>";
					var button2="<button  id='liGo"+i.id +"'"+" "+"type='button'"+" "+" class='d-inline-block btn btn-outline-success'>View This</button>";
					let html=text+"&nbsp"+button1+button2;
					let li=$(document.createElement('li'));
					li.addClass('searchArrayList');
					li.html(html);
					li.appendTo(goToSuperhero);
					let b1=$(button1);
					let b2=$(button2);
					let id1=b1.attr('id');
					let id2=b2.attr('id');
					$("#"+id2).click(()=>{//now befre goingsuprhero page extracting data
						(async function goSuperheroPage(){
							let response=await fetch('https://www.superheroapi.com/api.php/844581629284738/'+i.id);
							let data=await response.json();
							return data;


						})().then((data)=>{//now we are ready we have data going to superhero page
							var a=$('#super');
							localStorage.setItem('superheroPageData',JSON.stringify(data));
							window.location="superheroPage.html";
						});
					});
					$('#'+id1).click(()=>{//clciking on add favourite
						let favouriteHeroes=JSON.parse(localStorage.getItem('allFavouriteHeroes'));
						if(favouriteHeroes==null){//strating favourties heros is null
							favouriteHeroes=new Array();
						}
						let add=true;//this add will be false if item is already added
						
						{
						let array=JSON.parse(localStorage.getItem('allFavouriteHeroes'));
						if(array!=null&&array.length>0){
							for(let j of array){
							if(j.id===i.id){
								add=false;
								break;
							}
						      }
						}

					}
						
							if(add==true){
							let obj=new Object();
							obj['id']=i.id;
							obj['name']=i.name;
							obj['imageUrl']=i['image']['url'];
							favouriteHeroes.push(obj);
							localStorage.setItem('allFavouriteHeroes',JSON.stringify(favouriteHeroes));

						}else{
							//if already added
							window.alert('already added');
						}
					});
				}
				
			});
		}
	}
	{
		let btn=$('#favouriteHeroesBtn');
		btn.click(()=>{
			window.location='favouriteSuperHeroPage.html';
		})
	}
}
