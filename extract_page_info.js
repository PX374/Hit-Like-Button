var noise = document.getElementsByClassName("rq0escxv l9j0dhe7 du4w35lb hpfvmrgz buofh1pr g5gj957u aov4n071 oi9244e8 bi6gxh9e h676nmdw aghb5jc5 gile2uim qmfd67dx")
for (var i = 0; i < noise.length ; i++) {
  noise[i].remove();
}

var mail_ = document.getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gpro0wi8 py34i1dx")
var MAIL = ""
var Website = []
var Phone = []
var Info = []
var fonction = []
for (var i = 0; i < mail_.length ; i++) {
  if (mail_[i].tag = "a" &&  mail_[i].innerText.includes("@") ) {  console.log(mail_[i].innerText); MAIL = mail_[i].innerText;}
  if (mail_[i].tag = "a" &&  mail_[i].innerText.includes("http") ) {  console.log(mail_[i].innerText); Website.push(mail_[i].innerText);}
  if (mail_[i].tag = "a" &&  mail_[i].innerText.includes("+") ) {  console.log(mail_[i].innerText); Phone.push(mail_[i].innerText);}
}
var info = document.getElementsByClassName("kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql");
for (var i = 0; i < info.length ; i++) {
  console.log(info[i].innerText);
  Info.push(info[i].innerText);
}

var fonctions = document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j keod5gw0 nxhoafnm aigsh9s9 fe6kdd0r mau55g9w c8b282yb d3f4x2em mdeji52x a5q79mjw g1cxx5fr b1v8xokw m9osqain hzawbc8m");
for (var i = 0; i < fonctions.length ; i++) {
  if (fonctions[i].tag = "span" ) {  console.log(fonctions[i].innerText); 
                                     fonction.push(fonctions[i].innerText);
                                  }
}

var Title = document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j keod5gw0 nxhoafnm aigsh9s9 fe6kdd0r mau55g9w c8b282yb embtmqzv hrzyx87i m6dqt4wy h7mekvxk hnhda86s oo9gr5id hzawbc8m")[0].innerText; 
console.log(Title);
var Fiche = [
  ["mail","website","phone","info","fonction"]

];
Fiche.push([MAIL,Website.join(','),Phone.join(','),Info.join(','),fonction.join(',')]);
let csvContent = "data:text/csv;charset=utf-8,";
Fiche.forEach(function(rowArray) {
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
});
var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", Title+".csv");
document.body.appendChild(link); 
link.click();
