//Extra Feature - Sliding Animation

$(document).ready(function () {
shuffle();       
 
function shuffle() {
var last;
 
for (i = 0; i < 200; i++) {                                      
var randVal = parseInt(1 + (Math.random() * (7)));           
var itop = parseInt($('#' + randVal).css('top'));             
var ileft = parseInt($('#' + randVal).css('left'));           
var iemptytop = parseInt($('#empty').css('top'));            
var iemptyleft = parseInt($('#empty').css('left'));           
 
var irow = checkRow(itop);                         
var icolumn = checkColumn(ileft);
var iemptyrow = checkRow(iemptytop);               
var iemptycolumn = checkColumn(iemptyleft);
 
if (irow == iemptyrow && last != randVal) {        
var diff = icolumn - iemptycolumn;
if (diff == 1 || diff == -1) {                
$('#empty').css('left', ileft);
$('#' + randVal).css('left', iemptyleft);
}
}
 
else if (icolumn == iemptycolumn && last != randVal) {   
var diff = irow - iemptyrow;
if (diff == 1 || diff == -1) {                       
$('#empty').css('top', itop);
$('#' + randVal).css('top', iemptytop);
}
}
last = randVal;
}
}
 
$('.puzzlepiece').click(function () {                                          
var btop = parseInt($(this).css('top'));               
var bleft = parseInt($(this).css('left'));
var emptytop = parseInt($('#empty').css('top'));
var emptyleft = parseInt($('#empty').css('left'));
 
var row = checkRow(btop);
var column = checkColumn(bleft);
var emptyrow = checkRow(emptytop);
var emptycolumn = checkColumn(emptyleft);
if (row == emptyrow) {
var diff = column - emptycolumn;
if (diff == 1 || diff == -1) {
$('#empty').animate({ left: bleft }, "slow");
$(this).animate({ left: emptyleft }, "slow");      
}
}
 
else if (column == emptycolumn) {
var diff = row - emptyrow;
if (diff == 1 || diff == -1) {
$('#empty').animate({ top: btop }, "slow");
$(this).animate({ top: emptytop }, "slow");
}
}
 
function checkRow(top) {          
var row = top / 100;
return row;
}
 
function checkColumn(left) {       
var column = left / 150;
return column;
}
 
$('#shuffle').click(function () {  
shuffle();
});
});
</script>
