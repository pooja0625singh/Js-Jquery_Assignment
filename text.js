
let text = "";
let speech = "Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure.\
My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!";

let subString = speech.split('.').join('|').split('?').join('|');

let arr = subString.split('|');

hide_number = arr[7].split(" ");
hide_number[3] = "XXXXXXXXXX";
let a = ""
for(k = 0; k < hide_number.length; k++){
  hidden_number = hide_number.join(" ");
}
arr[7] = hidden_number;

let num = 0;
for(i = 0; i < arr.length; i++) {
  if(arr[i].split(" ").length > 4) {
  	num++;
    text += String(num) + ". " + arr[i] + "\n" ;
  }

}

