//ÚVOD DO PROGRAMOVÁNÍ: JS - 1. lekce
/*
https://www.youtube.com/watch?v=m3ArLlCYeLk&list=PLoXsS4T_EePl9r3504vwZDRwsHJfQZvTf&index=11
*/

//pojmy:
/*
Number - číslo
String - text (vždy v uvozovkách)
Boolean - pravdivostní hodnota (true/false)
proměnná - definovaná hodnota - let
operátory - znamínka (<; >; =; <=; >=;) / porovnávací operátory (rovná se ===; nerovná se !==), logické operátory (platnost dvou podmínek && současně)
break - vyskočení z cyklu
*/

/*
let vaha = 33.3
let pocetFenu = 10
let cisloPopisne = 331
let jmeno = "Martin"

let vekPetr = 1
let vekPavel = 20

//výpis textu:
//alert("Hello " + jmeno); //do konzole
//console.log("Hello " + jmeno); //do okna ve stránce

let soucetVeku = vekPetr + vekPavel
console.log(vekPetr + " + " + vekPavel + " = " + soucetVeku);
*/




// MATEMATICKÉ - POUŽÍT EXISTUJÍCÍ KNIHOVNY
// Math.round() - zaokrouhlení
// Math.random() - náhodné od 0 do 1
/*
let zaokrouhlene = Math.round(); - jak zaokrouhluje?? Nahoru/dolu/nebo matematicky??
let nahodneCislo = Math.random();

console.log(zaokrouhlene (nahodneCislo * 100));
*/




//UŽIVATELSKÝ VSTUP - MOŽNOST ZADAT HODNOTU
// prompt = ("")
// Zadaná hodnota se bere jako text( tedy i číslo). Nebere to jako aritmatickou hodnotu a nelze s tím počítat
// Pokud s tím chci nadále počítat, musím nadefinovat, že se jedná o číslo pomicí fce Number: Number(prompt(""))

//Výpočet mzdy a výpis k různým zaměstnancům
/*
let jmeno = prompt("Zadej své uživatelské jméno");
let hodiny = Number(prompt("Zadej pocet odpracovaných hodin"));
let hodinovaMzda = 150;

console.log(jmeno + " má výplatu " (hodiny * hodinovaMzda) + "KČ");
*/




//ÚKOL JMÉNO
//Zeptejte se uživatele zvlášť na křestní jméno a zvlášť na příjmení. Obě hodnoty mějte uložené v proměnných.
//Vypiště je společně na jeden řádek do konzole oddělené mezerou.
/*
let jmeno = prompt("jaké je tvé křestní jméno");
let prijmeni = prompt("jaké je tvé příjmení");

console.log(jmeno + " " + prijmeni);
*/




//ÚKOL TABULE
//Ve třídě na VŠ je 100 studentů. Každý sedí na židli označené číslem postupně od jedné do sta. Vyučující má na
//své židli číslo nula. Napiště kód, který náhodně vylosuje číslo od nuly do sta a tím rozhodne, kdo na konci lekce
// umyje tabuli. Vybrané číslo židel vypište do konzole
/*
let zidle = Math.round(Math.random () * 100);

console.log(zidle) // může někdy padnout 0 a 100, když random bere mezi 0 - 0,99 a pak zaokrouhíme??
*/




//ÚKOL NÁSOBENÍ
//Napište kód, který načte číslo od uživatele, vynásobí ho dvěma a vypíše ho do konzole
/*
let cisloOdUzivatele = prompt("Napiš libovolné číslo");

console.log(cisloOdUzivatele * 2)
*/




//ÚKOL KOSTKA
//Vytvořte program, který vypíše text podle vzoru "Hozeno na kostce: 5", s tím, že hozené číslo se bude generovat
//náhodně. Musíte vyřešit, jak z náhodného čísla v rozsahu 0 až 0,99999999 dostanete číslo 1 až 6.
/*
let hodNaKostce = Math.round(Math.random() * 6 + 0.5);
console.log("Hozeno na kostce: " + hodNaKostce)
//jak omezit, aby nepadla 0, když zaokrouhlujeme - matematicky?? přičítat 0,5
*/




//ÚKOL SČÍTAČKA 
//Vytvořte program na sčítání:
//1. Požádat uživatele o první číslo: "Zadej první číslo" - to uložit do proměnné.
//2. Ttejně to udělejte i s druhým číslem.
//3. Vypište uživateli ve formátu "první číslo + druhé číslo = xx" - čísla oddělit mezerou
/*
let prvniCislo = Number(prompt("Zadej první číslo."));
let druheCislo = Number(prompt("Zadej druhé číslo."));
let soucet = prvniCislo + druheCislo

//Jak to zapsal jako číslo + číslo = číslo?? když zadám proměné, tak to sčítá
//alert(soucet)
//alert(prvniCislo + druheCislo)
//alert(prvniCislo + "+" + druheCislo = soucet)
//console.log(prvniCislo + " " + "+" + " " + druheCislo + " " = " " + soucet)
*/

  


// ÚVOD DO PROGRAMOVÁNÍ: JS - 2. lekce
/*
https://www.youtube.com/watch?v=qqxUwTmcLsM&list=PLoXsS4T_EePl9r3504vwZDRwsHJfQZvTf&index=12
*/

//PODMÍNKY
// if/else
// switch - možná alternativa if/else

//jednoduché podmínky
/*
let uzivatelskeHeslo = prompt("Zadej své heslo");
let hesloVDatabazi = "Simsalabim";
let vek = prompt("Zadej svůj věk");


if(vek >= 18) { //shluk znamínek >= značí větší, nebo rovno
    //když pravda, stane se to, co je zde v závorkách
    console.log("Jsi plnoletý");
} else {
    //když nepravda, stane se to, co je v těchto závorkách
    console.log("Nejsi plnoletý");
}


if(uzivatelskeHeslo === hesloVDatabazi) { //shluk znamínek === znamená rovná se. Také se používá !== což znamená nerovná se
    console.log("Přihlášen");
} else {
    console.log("Špatně zadané heslo")
}
*/

//složené podmínky
/*
//let znamka = 3
!!!!!! let znamka = prompt("Napiš svoji známku"); //když to vypíši do konzole, funguje to. POdmínky s danou proměnnou také. Ale promt a podmínky společně ne. Prooooooooč!!!!!!??????

if(znamka === 1) {
    console.log("Výborný");
} else if(znamka === 2) {
    console.log("Chvalitebný");
} else if(znamka === 3) {
    console.log("Dobrý");
} else if(znamka === 4) {
    console.log("Dostatečný");
} else {
    console.log("Nedostatečný");
}
*/

//vnořené podmínky
/*
let vino = prompt("Máš rád víno?");

if(vino === "ano") {
    let typVina = prompt("Máš rád červené, nebo bílé??");
    if(typVina === "červené") {
        console.log ("Tady je výběr červených vín.");
    } else {
        console.log ("Tady je výběr bílých vín.");
    }
} else {
  console.log("To je škoda :(");
}
*/




//ÚKOL VĚTŠÍ NEŽ
//1. Vytvořte proměnnou, do které vložíte výsledek z generátoru náhodných čísel.
//2. Vypište hodnotu této proměnné
//3. Pokud její hodnota bude větší než 0.5, vypište text: "Číslo je větší než 0.5."
//4. Program zkuste několikrát pustit a koukejte, jestli se přibližně v polovině případů text vypíše.
/*
let nahodneCislo = Math.random();

console.log(nahodneCislo);

if(nahodneCislo > 0.5) {
    console.log("Číslo je větší než 0.5.");
}
*/




//ÚKOL VĚTŠÍ NEŽ NEBO ZÁPORNÉ
//1. Vytvořte proměnnou, do které načtete číslo od uživatele z klávesnice
//2. Zadané číslo vypište do konzole ve formátu: "Uživatel zadal číslo XY"
//3. Pokud je hodnot této proměnné větší než 100, vypište: "Číslo je větší než 100"
//4. Pokud je hodnot této proměnné menší než 0, vypište: "Číslo je záporné"
//5. Program vyzkoušejte na různých hodnotách
/*
let cisloOdUzivatele = Number(prompt("Zadej libovolné číslo"));

console.log("Uživatel zadal číslo " + cisloOdUzivatele);

if(cisloOdUzivatele > 100) {
    console.log("Číslo je větší než 100");
} else if(cisloOdUzivatele < 0) {
    console.log("Číslo je záporné");
} else {
    console.log("Číslo je v rozmezí od 0 do 100 včetně.")
}
*/




//ÚKOL KOUPÁNÍ
//Napište kód, kt. bude podle počasí doporučovat aktivity na víkend.
//1. Vytvořte proměnnou "minimalniTeplotaKoupani" a uložte do ní hodnotu "38".
//2. Zjistěte předpověď na víkend. Vytvořte proměnnou "predpoved" a do ní uložte náhodně generované celé číslo mezi 0 a 40
//3. Do konzole vypiště kolik bude o víkendu stupňů "O víkendu bude xx °C"
//4. Pokud bude předpověď >/= minimalniTeplotaKOupani, vypiště: "Ideální příležitost jít se vykoupat"
//5. Kód zkuste několikrát pustit
/*
let minimalniTeplotaKoupani = 38;
let predpoved = Math.random() * 40;

console.log("O víkendu bude " + minimalniTeplotaKoupani + " °C");

if(predpoved >= minimalniTeplotaKoupani) {
    console.log("Ideální příležitost jít se vykoupat.");
}
*/




//ÚKOL ZANOŘENÉ PODMÍNKY
//Do úkolu Koupání doplníme další doporučení
//1. Přidejte proměnnou "minimalniTeplotaNaKolo" s hodnotou "15"
//2. Když nebude telo na koupání, ale teplota dosáhne minimalniTeplotaNaKolo, vypište "Čas na projížďku na kole"
//3.Vytvořte proměnnou "bodMrazu" a uložte hodnotu "0"
//4. Upravte generování předpovědi tak, aby byla v rozmězí -10 až 40
//5. Pokud bude mrznout, vypiště "Jdi postavit sněhuláka"
//6. POkud nebude platit žádná podmínka, vypiště "Zůstaň doma a zahrej si deskovky"
//7. Kód zkuste pustit několikrát
/*VYPRACOVAT
*/





//ÚKOL CENA VSTUPENKY
//Pokusme se o základ jednoduchého rezervačního sestému pro vstupenky do divadla. 
//1. Nechte uživatele zadat jeho věk. 
//2. Vytvořte si proměnnou plnaCena, do které uložte hodnotu 12.
//3. Vytvořte podmínku, která do proměnné cena uloží cenu spočítanou podle věku uživatele dle následujících pravidel:
//a) 0 euro pro návštěvníky mladší 6 let,
//b) 65 % ze základní ceny pro návštěvníky 6 až 26 let (žák, student),
//c) 100 % ze základní ceny pro návštěvníky 27 až 64 let (dospělý),
//d) 50 % ze základní ceny pro ostatní (senior).
//4. Nezapomeňte na zaokrouhlování, ať nám cena vyjde v celých centech.
//5. Nakonec spočtenou cenu vypište s nějakou hezkou zprávou na výstup.
/*VYPRACOVAT
*/




//CYKLY
//opakování kusu kódu dle jesného parametru
//např while
/*//zápis bez použití funkce cyklu:
console.log("Knock");
console.log("Knock");
console.log("Knock");
console.log("Penny!");

console.log("Knock");
console.log("Knock");
console.log("Knock");
console.log("Penny!");

console.log("Knock");
console.log("Knock");
console.log("Knock");
console.log("Penny!");
*/

//zápis za použití cyklu
/*příklad 1 - ukončení pomocí řídící proměnné, která se mění
let i = 1 //řídící proměnná. Obecně se používá "i!

while(i <= 3 ) { //píše se podobně jako u podmínek, ale zde se opakuje to co je v závorkách a nevětví se za pomoci else ani ničeho jiného. V podstatě to znamená: Dokud platí to, co je v závorce, opakuji to, co je v závorkách
    console.log ("Knock");
    console.log ("Knock");
    console.log ("Knock");
    console.log ("Penny!"); // pokud bych se zadáním i <= 3 pustila, dostala bych se do nekonečného cyklu, jelikož i=1, tedy bude podmínka plněna vždy. Musím tedy po každém cyklu hodnotu navýšit o 1

    i = i + 1 //toto definuje, že po dokončení cyklu k i přičtu 1 - pozor, zde už se neuvádí let(proměnná), jelikož již je vytvořena
    // (i=i+1) = (i++) přičítání hodnoty 1 k jakékoli hodnotě se používá běžně. Jde ji tedy zkráceně zapsat jako i++ což značí inkrement
}
*/

/*příklad 2 - ukončení pomocí splnění podmínky opakování
let uzivatelskeHeslo = prompt("Zadej heslo");
let heslo = "Simsalabim";

while(uzivatelskeHeslo !== heslo) {
    uzivatelskeHeslo = prompt("Zadal jsi chybně heslo, zadej jej znovu!")
}
*/

/*příklad 3 - více cyklů a podmínky v sobě - DOPRACOVAT
let uzivatelskeHeslo = prompt("Zadej heslo");
let heslo = "Simsalabim";
let pocetPokusu = 2;

while(uzivatelskeHeslo !== heslo) {
    while(pocetPokusu > 0) {
        uzivatelskeHeslo = prompt("Zadal jsi chybně heslo, zadej jej znovu! Zbyva ti pokusů: " + pocetPokusu)

        if(uzivatelskeHeslo === heslo) {
            break
        }

        pocetPokusu-- // pocetPokusu = pocetPokusu - 1
       !!!!!!!! //NEMÁM ZDE UKONČENÍ CYKLU, JELIKOŽ KDYŽ ZADÁM 3X ŠPATNĚ HESLO, UKONČÍ SE VNITŘNÍ CYKLUS, TEDY NEMÁM MOŽNOST HESLO ZADÁVAT, ALE NEMÁM TU DANÉ, JAK UKONČÍM CYKLENÍ.
    
    }
}
*/




//ÚKOL ODPOČET
//Vypište do konzole všechna čísla od 20 do 1
/*VYPRACOVAT
*/




//ÚKOL HÁZENÍ KOSTKOU
//1. Vytvořte program, který bude virtuálně házet kostkou, dokud mu nepadne šestka.
//2. Výsledek každého hodu vypište do konzole s textem "Padlo číslo xx"
//OPRAVIT - zacyklení - když v konzoli zobrazím hody kostkou, je to ok. Jakmile to dám do cyklu, nikdy 6 nepadne

let hodKostky = Math.round((Math.random() * 6) + 0.5)

if (hodKostky === 6) {
    console.log("Padlo číslo 6")
}   
while(hodKostky !== 6) {
    console.log("Padlo číslo " + hodKostky);
    hodKostky = Math.round((Math.random() * 6) + 0.5)

    if (hodKostky === 6) {
        console.log("Padlo číslo 6")
    }

}

// console.log("Padlo číslo " + hodKostky);







//FUNKCE
//alert()
//prompt()
//Number()
//console.log(
//všechny tyto podbarvené věci jsou názvy funkcí
//funkce si můžeme tvořit o samostatně
 



































































//ÚVOD DO JS - LEKCE 1
/*
https://www.youtube.com/watch?v=u6cSNuMdV6A&list=PLoXsS4T_EePl9r3504vwZDRwsHJfQZvTf&index=1
*/



//ZÁKLADY
/*
//LET = proměnná
//let vek = 84;

//let jmeno
//jmeno = "Panoramix";


//ALERT = zobrazení na webové stránce
//CONSOLE.LOG = zobrazení v konzoli

//alert("Jmenuji se " + jmeno + " a je mi " + vek + " let. ");

//let asterixuvVek = prompt("Zadej Asterixův věk");
//console.log(asterixuvVek);
*/




//PODMÍNKY - 12:54
/*
//IF + ZNAKY =;<;> - VYDEFINOVÁNÍ PODMÍNKY
// když bude podmínka splněna, definuji co se stane do špičaté závorky hned za tím
// ELSE - když nebude podmínka splněna

/*
let asterixVaha = 55;
let obelixVaha = 55;

if (asterixVaha > obelixVaha) {
    console.log("Asterix je těžší než Obelix");
} else if (obelixVaha > asterixVaha) {
    console.log("Obelix je těžší než Asterix");
} else {
    console.log("Oba dva váží stejně.");
}
*/




//ÚKOL PODMÍNKY
//1. Vytvořit proměnné s věkem Asterixe a Obelixe
//2. sečíst je (případně uložit do další proměnné)a porovnat, jestli josu starší než Panoramix, jehož věk je 84 let


/*SPOLEČNÉ PROMĚNNÉ K ÚKOLU

let vekAsterix = 38;
let vekObelix = 43;
*/

//varianta1
/*
let vekPanoramix = 84;

if (vekAsterix + vekObelix > vekPanoramix) {
    console.log("Panoramix je mladší než Asterix a Obelix dohromady");
} else if (vekAsterix + vekObelix < vekPanoramix) {
    console.log("Panoramix je starší než Asterix a Obelix dohromady");
} else {
    console.log("Panoramix je stejně starý jako Asterix a Obelix");
}
*/

//varianta2
/*
let vekPanoramix = prompt("Zadej věk Panoramixe");
let vekObouDruidu = vekAsterix + vekObelix;

console.log("Věk obu druidů = " + vekObouDruidu);
console.log("Věk Panoramixe = " + vekPanoramix);

if (vekPanoramix > vekObouDruidu) {
    console.log("Panoramix je starší než oba druidi.");
} else if (vekPanoramix < vekObouDruidu) {
    console.log("Panoramix je mladší než oba druidi.");
} else {
    console.log("Panoremix je stejně starý, jako oba druidi dohromady");
}
*/




//CYKLY FOR a WHILE 18:13

//FOR 18:33 
/*
for (let i = 1; i < 5; i++) {
    console.log(i + ". říman" );
}
*/

//WHILE 21:07
/*
let opakuj = true;
while (opakuj) {
    let hod = Math.ceil(Math.random() * 6);

    if (hod == 6) {
        opakuj = false
    }
}
*/

//ÚKOL CYKLUS LEHČÍ
//Napiš cyklus (for nebo while), který vypíše čísla od 10 do 1
/*VYPRACOVAT
*/


//ÚKOL CYKLUS TĚŽŠÍ
//1. Vytvoř si dvě proměnné a do každé ulož číslo. Tyto čísla budou značit začátek nebo konec nějakého intervalu čísel (např.: interval od 8 do 12 je 8; 9; 10; 11, 12)
//2. Napiš cyklus (for nebo while) který vypíše sudá čísal v tomto zvoleném intervalu
/*VYPRACOVAT
*/




//ÚVOD DO JS - LEKCE 2
/*SEM vložit LINK
*/




//ÚVOD DO JS - LEKCE 3
/*SEM vložit LINK
*/




//ÚVOD DO JS - LEKCE 4
/*SEM vložit LINK
*/




//ÚVOD DO JS - LEKCE 5
/*SEM vložit LINK
*/




//ÚVOD DO JS - LEKCE 6
/*SEM vložit LINK
*/




//ÚVOD DO JS - LEKCE 7
/*SEM vložit LINK
*/




//ÚVOD DO JS - LEKCE 8
/*SEM vložit LINK
*/




//ÚVOD DO JS - LEKCE 9
/*SEM vložit LINK
*/




//ÚVOD DO JS - LEKCE 10
/*SEM vložit LINK
*/




//SOS
//dotaz řádek 27
// výpočet řádek 30
//výpočet mzdy a výpis k různým zaměstnancům - řádek 41
// ÚKOL TABULE - řádek 66
//ÚKOL KOSTKA - řádek 90
//ÚKOL SČÍTAČKA - řádek 102
// Složené podmínky 154 - nefunguje mi prompt
//ÚKOL PODMÍNKY - řádek 48 prvně výpis konzole jasných hodnot, pak zadání věku Panoramixe a pak propočet v konzoli??
// ÚKOL HÁZENÍ KOSTKOU CYKLY - řádek 373