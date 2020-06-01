//fetching superhero result
let array=JSON.parse(localStorage.getItem('allFavouriteHeroes'));
if(array.length==0){
	//if no super hero
	window.alert('no super hero  go back and add here');
	window.location='index.html';
}else{
	
	for(let i=0;i<array.length;i++){//itrearting each obj and all other are simply design use of table and add to list
		let obj=array[i];
		let html="<tr id='row"+obj['id']+"'>"+"<td scope='col'>"+obj['id']+"</td>"+
				  "<td scope='col'>"+obj['name']+"</td>"+
				  "<td scope='col'><img class='favouriteImage' src='"+obj['imageUrl']+"'"+"></td>"+
				  "<td scope='col'> <button type='button' id='delete"+obj['id']+"' "+"class='btn btn-danger'>DELETE</button></td>"+
				  "<td scope='col'> <button type='button' id='go"+obj['id']+"' "+"class='btn btn-info'>ViewThis</button></td></tr>";
					$('table tbody').append(html);
			let delBtn=$("#delete"+obj['id']).click(()=>{
			array.splice(i,1);
			let tr=$("#row"+obj['id']);
			tr.remove();
			localStorage.setItem('allFavouriteHeroes',JSON.stringify(array));
		});
		let goBtn=$("#go"+obj['id']);
		$(goBtn).click(()=>{//same as behind like going to page volecting dta before
						(async function goSuperheroPage(){
							let response=await fetch('https://www.superheroapi.com/api.php/844581629284738/'+obj['id']);
							let data=await response.json();
							return data;


						})().then((data)=>{
							var a=$('#super');//going to uperhero page
							localStorage.setItem('superheroPageData',JSON.stringify(data));
							window.location="superheroPage.html";
						});
					});

		

	}
	
}