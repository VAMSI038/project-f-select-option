function runList(){
    var select=document.getElementById("list");
    var txtbox=document.getElementById("txtbox").value;
   const option = new Option(txtbox,txtbox);
   select.add(option,undefined);
//    document.getElementById("txtbox").value='';
//    select.value=select[0].value;
//    select.focus();

}