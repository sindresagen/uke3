
let dragindex=0;

let dropindex=0;
let clone="";

function drag(e)
{
e.dataTransfer.setData("text",e.target.id);
}

function drop(e)
{
e.preventDefault();
clone=e.target.cloneNode(true);
let data=e.dataTransfer.getData("text"); 
let nodelist=document.getElementById("grid2").childNodes;
for(let i=0;i<nodelist.length;i++)
{
if(nodelist[i].id==data)
{
dragindex=i;
}

}

document.getElementById("grid2").replaceChild(document.getElementById(data),e.target);

document.getElementById("grid2").insertBefore(clone,document.getElementById("grid2").childNodes[dragindex]);

}

function allowDrop(e)
{
    e.preventDefault();
}
