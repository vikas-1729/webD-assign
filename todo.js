	var totalItem=0;
	var totalComplete=0;
	function addItem(){
	var elem=document.getElementById('input-value');
	var content=elem.value;
	content=content.trim();
	if(content.length==0){
		alert('Please fill some work before add');

	}else{
		
		addElement("all-list","li","list-item",content);
		elem.value="";
		totalItem++;
	}
	function addElement(parentId,elementTag,elementClass,html){
		var parent=document.getElementById(parentId);
		var newElement=document.createElement(elementTag);
		newElement.setAttribute('class',elementClass);
		newElement.setAttribute('id',totalItem);
		var remove="onclick=removeItem("+totalItem+")";
		var status1="onclick=status("+totalItem+")";
		var count=totalItem+1;
		newElement.innerHTML="<div>"+' &nbsp'+content+"</div>"+"<div><span class='text-center work-status'>"
		+"<button class='btn-status' id='status"+totalItem+"'"+status1+">UNCOMPLETE</button></span></div> <div><span class='fl-right'>"+
		"<button class='btn-remove'"+remove+">Remove</button></span></div>";
		parent.append(newElement);
		

	}
}
var a1;
    function removeItem(id) {
        var element = document.getElementById(id);
       a1=element;
       	var  button=document.getElementById("status"+id);
    	var element = document.getElementById(id);
    	var goAhead=false;
    	//console.log(button.innerText);
    	if(button.innerText=="COMPLETED"){
    		goAhead=true;
    	}
    	if(button.innerText=="UNCOMPLETE"){
    	goAhead=	window.confirm("this task is uncomplete are you sure you want to delete it");
    	}
    	if(goAhead==true){
    	addElement1('complete-list',"li","list-item",element.innerHTML);	
       element.parentNode.removeChild(element);
        totalItem--;
    }
    	function addElement1(parentId,elementTag,elementClass,html){
		var parent=document.getElementById(parentId);
		var newElement=document.createElement(elementTag);
		newElement.setAttribute('class',elementClass);
		newElement.innerHTML=html;
		parent.append(newElement);
		

	}

    }
    function status(id){
    	var  button=document.getElementById("status"+id);
    	 var element = document.getElementById(id);
    	button.innerText="COMPLETED";
    	button.disabled=true;
    	totalComplete++;

    }
    
    