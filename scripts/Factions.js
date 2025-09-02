const seenImg = document.querySelector("img");
//"const seenImg" Cria uma constante "seenImg".
//"document" todo o arquivo html
//"querySelector" retorna o primeiro elemento "img" no documento que encontrar.
const seenTitle = document.querySelector("#faction-title-text")
//controla o nome das facções
const seenText1 = document.querySelector("#faction-description-1")
//controla a primera parte da descrição da facção
const seenText2 = document.querySelector("#faction-description-2")
//controla a segunda parte da descrição da facção

seenImg.addEventListener("click", () => {
//Adiciona um comando para esperar um tipo de evento acontecer, no caso, seria o evento "click", que é acionado quando o usuário clica em algo.
//após a seta, tem o código que será executado assim que o "click" acontecer.
    const imgAdress = seenImg.getAttribute("src");
// cria-se a constante "imgAdress" que é igual ao atributo "src" da constante seenImg
    if (imgAdress === "styles/images/Vaegir_Banner.png") {
        seenImg.setAttribute("src", "styles/images/Swadia_banner.png");
        seenImg.setAttribute("alt", "Banner from the Swadian faction, from Mount & Blade");
        seenTitle.setAttribute("style", "color:#ee7744");
        seenTitle.innerHTML = "Kingdom of Swadia";
        seenText1.innerHTML = "The Kingdom of Swadia is ruled by King Harlaus, and the claimant to the throne is Lady Isolla of Suno.Their national animal is the lion, which is depicted on their emblem and on the banner of their king, Harlaus. Unlike in the original Mount&Blade, Swadian lords in Mount&Blade: Warband are called Counts.";
        seenText2.innerHTML = "As a starting point, the Kingdom of Swadia is profitable as it is close to all of the other factions. This means that you can easily venture into any other nation and buy goods, then return and sell them in any Swadian town. Swadian lands are relatively safe for trade routes, with the only bandit infested area being between Suno and Uxkhal. The downside of starting in Swadia is that it has no specially priced goods of its own and Forest Bandits can be difficult to face at the start of the game.";
    } else if (imgAdress === "styles/images/Swadia_banner.png") {
        seenImg.setAttribute("src", "styles/images/Sarranid_Banner.png");
        seenImg.setAttribute("alt", "Banner from the Sarranid Sultanate Faction, from Mount & Blade");
        seenTitle.setAttribute("style", "color:#dddd33");
        seenTitle.innerHTML = "Sarranid Sultanate";
        seenText1.innerHTML = "The Sarranid Sultanate is a new faction introduced in Mount&Blade: Warband, located in the southern deserts of Calradia. It is led by Sultan Hakim, while the claimant to the throne is Arwa the Pearled One. Sarranid lords are called Emirs, an Arab title for a ruler.";
        seenText2 = "Their national animal appears to be the desert eagle, as it is depicted on their emblem. However, Hakim's banner is one of the two monarch banners that does not match up with the emblem, and the only one that does does not contain a heraldic eagle. Interestingly, Arwa has an eagle's head on her banner (and so does one of the most powerful lords of the Sultanate, Emir Uqais, initial lord of Durquba, for that matter), which could be related to her claim hinging on Sultan Ayzar's, while Hakim's hinges on Baybak's."	;
    } else if (imgAdress === "styles/images/Sarranid_Banner.png") {
        seenImg.setAttribute("src", "styles/images/Rhodoks_Banner.png");
        seenImg.setAttribute("alt", "Banner from the Rhodoks faction, from Mount & Blade");
        seenTitle.setAttribute("style", "color:#33dd33");
        seenTitle.innerHTML = "Kingdom of Rhodoks";
        seenText1.innerHTML = "The Kingdom of Rhodoks is ruled by King Graveth, while the claimant to the throne is Lord Kastor of Veluca. In Mount&Blade: Warband, unlike in the original Mount&Blade, the Rhodok lords are called Counts.";
        seenText2.innerHTML = "The Kingdom of Rhodoks is unique in that it is an elective monarchy. Their national animal is the bear, which is depicted on their emblem and on the banner of their king, Graveth.";
    } else if (imgAdress === "styles/images/Rhodoks_Banner.png") {
        seenImg.setAttribute("src", "styles/images/Nords_Banner.png");
        seenImg.setAttribute("alt", "Banner from the Nords faction, from Mount & Blade");
        seenTitle.setAttribute("style", "color:#33dddd");
        seenTitle.innerHTML = "Kingdom of Nords";
        seenText1.innerHTML = "The Kingdom of Nords is one of the factions within the Mount&Blade series. Their national animal is the raven, which is depicted on their emblem and on the banner of their king, Ragnar.";
        seenText2.innerHTML = "In Mount&Blade: Warband, unlike in the original Mount&Blade, the Nord lords are called Jarls.";
    } else if (imgAdress === "styles/images/Nords_Banner.png") {
        seenImg.setAttribute("src", "styles/images/Khergit_Banner.png");
        seenImg.setAttribute("alt", "Banner from the Khergit Klanate faction, from Mount & Blade");
        seenTitle.setAttribute("style", "color:#cc99ff");
        seenTitle.innerHTML = "Khergit Klanate";
        seenText1.innerHTML = "The Khergit Khanate is a faction of Calradia ruled by Sanjar Khan, while the claimant to the throne is Dustum Khan. In contrast to the lush heartlands of Calradia, the great steppes to the south are a vast region of dry grassland. With harsh weather and little resources, the one thing found in abundance here are the herds of horses that live both in the wild and domestically. It is in this arid waste that one can find the Khergits, a semi-nomadic group of hunters and horsemen who, much like their Steppe Horses, are lean, hardy, swift, and temperamental.";
        seenText2.innerHTML = "Starting in Khergit territory is not advised, as Steppe Bandits are numerous and dangerous foes for new players. It is better to begin in a more peaceful area and gather a secure, experienced party before moving into the steppes. The Khergit national animal is either the grey wolf, depicted on the faction's emblem, or the horse, depicted on Sanjar Khan's banner. Sanjar Khan is one of the two monarchs whose banner does not match with the emblem, and one of the only two banners in the game that depicts a person (the other being that of Akadan Noyan, both depicting a horse archer). In Mount&Blade: Warband, unlike in the original Mount&Blade, the Khergit lords are called Noyans."; 
    } else {
        seenImg.setAttribute("src", "styles/images/Vaegir_Banner.png");
        seenImg.setAttribute("alt", "Banner from the Vaegirs factions, from Mount & Blade");
        seenTitle.setAttribute("style", "color:#ccbb99");
        seenTitle.innerHTML = "Kingdom of Vaegirs";
        seenText1.innerHTML = "The Kingdom of Vaegirs is a faction ruled by King Yaroglek in the Mount&Blade series. The Vaegirs possess arguably the finest foot archers in the game, and also have several tiers of reasonably good infantry and heavy cavalry. Vaegir troops prefer using two-handed weapons for an offensive advantage against their foes, and live in the mountainous and snowy north-eastern boundaries of the map. The claimant to the throne is Prince Valdym the Bastard. Their national animal is the snow leopard, which is depicted on their emblem and on the banner of their king, Yaroglek.";
        seenText2.innerHTML = "Unlike in the original Mount&Blade, Vaegir lords in Warband are called Boyars, a title for lord in several Slavic languages.";
    }
    //Olha qual é a imagem atual, usando o imgAdress e depois troca para a próxima, assim como o atributo "alt"
    //seenTitle.setAttribute("styles"... Alterna a cor do texto para fica igual ao da facção/
    //seenTitle.innerHTML = ... Altera o nome da facção para corresponder com o da imagem
    //seenText1 e 2 alteram a descrição de cada facção
});