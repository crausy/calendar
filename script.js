var myCal = document.getElementById("adventCal");
var currentDate = new Date();
var messages = [
	["Ne a hóban, csillagokban, ne ünnepi foszlós kalácson, ne díszített fákon, hanem a szívekben legyen karácsony!", "Szilágyi Domokos"],
	["Szép Tündérország támad föl szívemben, ilyenkor decemberben. A szeretetnek csillagára nézek, megszáll egy titkos, gyönyörű igézet, ilyenkor decemberben.", "Juhász Gyula"],
	["Ha az ünnep elérkezik az életedben, akkor ünnepelj egészen. (…) Tisztálkodjál belülről és kívülről. Felejts el mindent, ami a köznapok szertartása és feladata. Az ünnepet nemcsak a naptárban írják piros betűkkel. Nézd a régieket, milyen áhítatosan, milyen feltétlenül, milyen körülményesen, mennyi vad örömmel ünnepeltek! Az ünnep a különbözés. Az ünnep a mély és varázsos rendhagyás.", "Márai Sándor"],
	["Ahelyett, hogy vennék Neked valamit, amit szeretnél, valami olyat adok Neked, ami az enyém, ami tényleg az enyém. Egy ajándékot. Valamit, ami jelzi, hogy tisztelem azt az embert, aki itt ül velem szemben, és arra kérem, hogy értse meg, mennyire fontos, hogy vele lehetek. Most már van valamije, ami egy kicsit én vagyok, van belőlem egy darabkája.", "Paulo Coelho"],
	["Leszállt egy angyalka, s azt súgta nékem: gondolj ma azokra, akik a szívedbe férnek! Eszembe jutottál te és a családod, ezúton kívánok békés karácsonyt!", "Ismeretlen"],
	["Háztól házig, szívtől szívig, az egyik helytől a másikig – a karácsony melege és élvezete mindannyiunkat közelebb hoz egymáshoz.", "Emily Matthews"],
	["Ne feledd, ha a karácsony hiányzik a szívedből, akkor a fa alatt sem találsz rá!", "Charlotte Carpenter"],
	["Karácsony közeleg...Ünneplőbe öltözött utcákkal, szépen díszített fával, sok-sok finomsággal, talán szeretettel, békességgel, töltődéssel. És ajándékokkal. Sok-sok ajándékkal...de nekem csak egy kell. Egy ajándék. Az igazi. Aki nem ünneptől függ, nem karácsonytól, húsvéttól, születésnaptól. Mert amikor megkapom, az a nap karácsony, húsvét, születésnap. Ünnep. A legcsodásabb ünnep. Az Ajándéktól. Az Igazitól. Tőled.", "Csitáry-Hock Tamás"],
	["A karácsony meglengeti a varázspálcáját, és onnantól minden puhább és gyönyörűbb.", "Norman Vincent Peale"],
	["Karácsony nem az ész, hanem a szív ünnepe. És a szív érzi, hogy azok is ott állnak veled a karácsonyfa körül, akiket a szemeddel nem látsz, és az eszeddel nem hiszel.", "Müller Péter"],
	["Amikor az embernek igazi karácsonyfa áll az otthonában, alatta az ajándékokkal, semmi se tűnik túl szomorúnak vagy túl keménynek. Valahogy azt sugallja, hogy a világban mindig marad fény és remény. Szerencsés, akinek van valakije, akivel megoszthatja ezt az élményt.", "Nora Roberts"],
	["Régi karácsonyok bukkannak fel emlékeim villanásaiból, és megvilágítják az elmúlt időt és embereket, akik élnek újra és örökké a kis karácsonyi gyertyák puha, libegő fényében.", "Fekete István"],
	["Az ádventi várakozás lényege szerint: várakozás arra, aki van; ahogy a szeretet misztériuma sem egyéb, mint vágyakozás az után, aki van, aki a miénk.", "Pilinszky János"],
	["Küszöbön áll a nap, az az egyetlen egy nap az évben, mely hivatalosan is a szereteté. Háromszázhatvanöt nap közül háromszázhatvannégy a gondjaidé, a céljaidé, munkádé, és a szereteté csupán egyetlen egy, s annak is az estéje egyedül. Pedig hidd el, Ismeretlen Olvasó, fordítva kellene legyen. Háromszázhatvannégy nap a szereteté, s egyetlen csak a többi dolgoké, s még annak is elég az estéje.", "Wass Albert"],
	["Egy pillanatnyi igazság megszépítheti, és meg is fogja szépíteni a világot. Egy pillanatnyi béke megmentheti, és meg is fogja menteni a világot. Egy pillanatnyi szeretet tökéletessé teheti, és tökéletessé is fogja tenni a világot.", "Sri Chinmoy"],
	["Karácsony előtt bizony kukucskáló angyalkák szállnak le a Földre, bekukucskálnak minden ház ablakán. Azt lesik, hol laknak a jó kisgyerekek, akik megérdemlik a karácsonyi ajándékokat.", "Antal Imre"],
	["Karácsonykor az ember mindig hisz egy kissé a csodában, nemcsak te és én, hanem az egész világ, az emberiség, amint mondják, hiszen ezért van az ünnep, mert nem lehet a csoda nélkül élni.", "Márai Sándor"],
	["A szenteste! Karácsony! Micsoda édes zengésű szavak! Hogy megtelik a szív a rájuk való visszaemlékezésben! Gyermekkoromra gondolok s arra a sok szép karácsonyestre, amit családom körében eltöltöttem, a viaszgyertyák fényére, a kis csilingelő csengőre, a fenyő pompás illatára, boldog, gyermeki örömömre. De más karácsonyesték emléke sem mosódhatik el emlékeimben, olyanoké, melyekből hiányzott minden vígság, boldogság, de amelyek mégis - mindennek dacára is, megtartották varázslatos szépségüket.", "Karl May"],
	["Minden szívből szóló karácsonyi énekben, a kandalló ropogásában és melegében, az ünnepi ebéd közben, a beszélgetésben és nevetésben, minden képeslapban, amit egy barát vagy a család küldött, minden, amit ebből meghallunk, és ami elgondolkodtat bennünket, az maga a szeretet.", "Noreen Barman"],
  ["Kicsiny kunyhóban szeretet, Szeressétek a gyermeket, E szent karácsony ünnepén Önöknek ezt kivánom én.", "Karinthy Frigyes"],
  ["Soha ne aggódj a karácsonyfád mérete miatt! A gyermekeid szemében legalább 10 méteresnek tűnnek.", "Larry Wilde"],
	["Az ajándékot mindenki a saját örömére adja, nem annak az érdemeiért, aki kapja.", "Carlos Ruiz Zafón"],
	["Érdekes, hogy milyen varázsa van a karácsonynak. Egyetlen ünnepnek sincs olyan varázsa, és mennyire tartja magát. Az embert ugyanúgy elbűvöli, mint, mondjuk, nyolcszáz évvel ezelőtt.", "Ladislav Fuks"],
  ["KELLEMES ÜNNEPEKET", "-"]
];

function Door(calendar, day) {

	this.width = ((calendar.width - 0.1 * calendar.width) / 4) * 0.95;
	this.height = ((calendar.height - 0.1 * calendar.height) / 6) * 0.95;
	this.adventMessage = 'Advent ' + day + '. napja\n\n' + '"' + messages[day - 1][0] + '"\n\n' + messages[day - 1][1] + '\n\n';
	this.x = ( 0.04 * calendar.width + ((day- 1) % 4) * (1.1 * this.width) );
	this.y = - ( 0.96 * calendar.height - Math.floor((day - 1) / 4) * (1.1 * this.height) );
	this.content = function() { 
		
		var node = document.getElementById("gomb");
		document.getElementById("adventDoors").appendChild(node);
		node.id = "door" + day;
		node.style.cssText = "width: " + this.width + "px; height: " + this.height + "px; top: " + this.y + "px; left: " + this.x + "px;";

		var innerNode = document.createElement("a");
		document.getElementById("door" + day).appendChild(innerNode);
		innerNode.innerHTML = day;
		innerNode.href = "#";

		if( ( currentDate.getMonth() + 1 ) < 12 || currentDate.getDate() < day ) {
			innerNode.className = "disabled";
			innerNode.onclick = function() {
				return false;
			}
		} else {
			var adventMessage = this.adventMessage;
			innerNode.onclick = function() {
				alert(adventMessage);
				return false;
			}
		}	
	};

}

(function() {
	var doors = [];

	for(var i = 0; i < 24; i++) {

		doors[i] = new Door(myCal, i + 1);
		doors[i].content();

	}

	return doors;
})();

var countDownDate = new Date("Dec 24 2020 18:00:00").getTime();
var x = setInterval(function() {
var distance = countDownDate - currentDate;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("szamlalo").innerHTML = days + " nap " + hours + " óra " + minutes + " perc " + seconds + " mp karácsonyig";
if (distance < 0) {
    clearInterval(x);
    document.getElementById("szamlalo").innerHTML = "KARÁCSONY";
  }
}, 1000);
