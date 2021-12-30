b_l = document.getElementsByClassName("nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gpro0wi8 oo9gr5id lrazzd5p dkezsu63");
var rows = [
    ["Name", "Link"]
];
for (var i = 0; i < b_l.length ; i++) {
  if (b_l[i].tag = "a") {  rows.push([b_l[i].getAttribute("aria-label"),b_l[i].href]) ;}
  console.log(b_l[i].getAttribute("aria-label"),b_l[i].href);
}
let csvContent = "data:text/csv;charset=utf-8,";

rows.forEach(function(rowArray) {
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
});
var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "Burkina_Facebook.csv");
document.body.appendChild(link); 
link.click();
