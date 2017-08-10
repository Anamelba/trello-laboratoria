var s = document.getElementById("spansito");
var c = document.getElementById("contenedor");
var contador=1;
s.onclick = function()
{
	while(contador==1)
	{
		s.className=s.className.replace( /(?:^|\s)span1(?!\S)/g ,'span2' )
		s.textContent="";
		s.setAttribute("contenteditable","true");

		var btnSave = document.createElement("button");
		btnSave.textContent="Save";
		c.appendChild(btnSave);
		btnSave.setAttribute("class", "btnSave")

		var btnClose = document.createElement("button");
		btnClose.textContent="X";
		c.appendChild(btnClose);
		btnClose.setAttribute("class", "btnClose")

		contador++;
	}
	
}