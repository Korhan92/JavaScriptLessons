let firstName= "Javascript";

console.log(firstName.length) // 10
console.log(firstName[9]) // t

let metin= "Millî egemenliğimizin sembolü olan Ankara; bugün de sahip olduğu tarihî ve kültürel zenginlikleri, sanayi ve teknolojideki gelişimi ile hepimizi gururlandıran önemli bir merkezdir"

console.log(metin[metin.length-1])

let nam="Korhan TOKGÖZ"

console.log(nam.toLowerCase())// hepsi küçük harf
console.log(nam.toUpperCase())//hepsi büyük harf
console.log(nam.substring(4)) //an Tokgöz
console.log(nam.substring(2,5))//rha
console.log(nam.substr(2,5))//rhan
console.log(nam.split("")) // ['K', 'o', 'r', 'h', 'a', 'n', ' ', 'T', 'O', 'K', 'G', 'Ö', 'Z']
console.log(nam.split(" "))// ['Korhan', 'TOKGÖZ']
console.log(nam.split("."))//['Korhan TOKGÖZ']

let sonKelimeBulma = metin.split(" ")
console.log(sonKelimeBulma[sonKelimeBulma.length-1]) //merkezdir

nam="JavaScript Lesson"
console.log(nam)
console.log(nam.trim())
console.log(nam.includes("a")) //true

console.log(nam.charAt(4))//"S"
console.log("S" .toLowerCase())//"s"
console.log(nam.charAt(4).toLowerCase())//"s"

//string concetination

let yeni = "başkent" + "ankara" + 6//başkentankara6

console.log(yeni)

let isim = "merhaba"
let ilkKarakter = isim.charAt(2).toUpperCase();
console.log(ilkKarakter)//R

let sonrakiler = isim.substring(2);
console.log(sonrakiler)//rhaba

let büyükMerhaba = ilkKarakter + sonrakiler;
console.log(büyükMerhaba)//Rrhaba

isim = ilkKarakter + sonrakiler;
console.log(isim)//Rrhaba

isim = "korhan"
console.log(isim)
console.log(isim.charAt(3))//h
console.log(ilkKarakter.concat(sonrakiler, "oradakiler")) //Rrhabaoradakiler

console.log(typeof 'korhan')//string
console.log(typeof 5)//number
console.log(typeof true)//boolean
console.log(typeof null)//object type
console.log(typeof undefined) // undefined

console.log(typeof isim.charAt(-1))//string

let a = "5.5";
let b =6;
console.log(a+b);  // 5.56  string
console.log(Number(a) + b); // 11.5
console.log(parseFloat(a) + b); // 11.5
console.log(parseInt(a) + b);//11
console.log(+a +b + typeof (+a+b));//11.5number

console.log( a + String(b));//5.56 string
console.log( a + b.toString()); ////5.56 string
console.log( a  + ""+b);  // 5.56  string
let piNumber = Math.PI
console.log(piNumber)
console.log(Math.round(piNumber)) // en yakına
console.log(Math.floor(piNumber))  // zemine
console.log(Math.ceil(piNumber))  // yukarı

let randumNumber = Math.random();  // 0 - 0.9999
console.log(randumNumber * 100) // 0 - 99.99999
console.log(Math.floor(randumNumber * 100)) // 0 - 99
console.log(Math.floor(randumNumber * 100) +1) // 1 - 100
console.log(Math.floor(randumNumber * 47) +1) // 1 - 47
console.log(Math.ceil(randumNumber * 47)) // 1 - 47
console.log(Math.floor(randumNumber * 20) +30) // 30 - 49

//OPERATORS
let x = 18;
let w = 20;
let y = 6 ;

console.log(x+y)  //24
console.log(x-y)  //12
console.log(x/y)  //3
console.log(x*y) // 108
console.log(x+x*y) //126
console.log((x+x)*y) // 216
console.log(++x)  // 19
console.log(--x)  // 18 normalde 17

console.log(x%y) // 0
console.log(w%y) // 2



w += 5;
console.log(w);

let net = 15;
console.log(net)
net = net + 4;
console.log(net);
net += 4    /// yukarıdaki ile aynı
net -=10
console.log(net) //13


let c = 15
let d = "15"
console.log(c == d) // true 
console.log(c != d) // false 
console.log(c === d) // false 
console.log(c !== d) // true 

let m = "ali"
let n = "ali"
console.log(m == n) // true 
console.log(m === n) // true 
console.log(m !== n) //  false

let num1 = 9;
let num2 = 11;
let num3 = 11;

console.log(num1 > num2); //false
console.log(num1 < num2); //true
console.log(num1 >= num2); //false
console.log(num1 <= num2); //true
console.log(num2 <= num3); //true


console.log(true && true) // true
console.log(true && false) // false
console.log(false && false) // false
console.log((num2 <= num3) && (num1 <= num2)) // true
console.log((num2 < 15) && (num1 === 11)) // false
console.log((num2 < 15) || (num1 === 11)) // true
console.log((num2 < 15) || (num1 === 9)) // true

let isBig = num1 > 18;
console.log(isBig)
let isBiggest = num1 > 18 ? true : false;
console.log(isBiggest)

let isBigger = num1 > 18 ? "evet büyük" : "hayır küçük";
console.log(isBigger)

let newd=null;
num1 > 18 ? newd=15 : newd=25;
console.log(newd)  // 25
