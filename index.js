for(let i=0;i<localStorage.length;i++){
 var key=localStorage.key(i);
 
 var value=localStorage.getItem(key);
 if(value=='true'){
 c++;
 
 }
}




 

function pie(){
  let val=c;
    var xValues = ["solved", "unsolved"];
var yValues = [`${val}`,5-`${val}`];
var barColors = [
  "#b91d47",
  "#2b5797"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "user's performance in amazon asked questions "
    }
  }
});

}
