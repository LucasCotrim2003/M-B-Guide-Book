const seenImg = document.querySelector("img");
const seenText = document.querySelector("#faction_title")
//"const seenImg" Cria uma constante "seenImg".
//"document" todo o arquivo html
//"querySelector" retorna o primeiro elemento "img" no documento que encontrar.
seenImg.addEventListener("click", () => {
//Adiciona um comando para esperar um tipo de evento acontecer, no caso, seria o evento "click", que é acionado quando o usuário clica em algo.
//após a seta, tem o código que será executado assim que o "click" acontecer.
    const imgAdress = seenImg.getAttribute("src");
// cria-se a constante "imgAdress" que é igual ao atributo "src" da constante seenImg
    if (imgAdress === "styles/images/Vaegir_Banner.png") {
        seenImg.setAttribute("src", "styles/images/Swadia_banner.png");
        seenImg.setAttribute("alt", "Banner from the Swadian faction, from Mount & Blade");
        seenText.setAttribute("style", "color:#ee7744");
        seenText.innerHTML = "Kingdom of Swadia";
    } else if (imgAdress === "styles/images/Swadia_banner.png") {
        seenImg.setAttribute("src", "styles/images/Sarranid_Banner.png");
        seenImg.setAttribute("alt", "Banner from the Sarranid Sultanate Faction, from Mount & Blade");
        seenText.setAttribute("style", "color:#dddd33");
        seenText.innerHTML = "Sarranid Sultanate";	
    } else if (imgAdress === "styles/images/Sarranid_Banner.png") {
        seenImg.setAttribute("src", "styles/images/Rhodoks_Banner.png");
        seenImg.setAttribute("alt", "Banner from the Rhodoks faction, from Mount & Blade");
        seenText.setAttribute("style", "color:#33dd33");
        seenText.innerHTML = "Kingdom of Rhodoks";
    } else if (imgAdress === "styles/images/Rhodoks_Banner.png") {
        seenImg.setAttribute("src", "styles/images/Nords_Banner.png");
        seenImg.setAttribute("alt", "Banner from the Nords faction, from Mount & Blade");
        seenText.setAttribute("style", "color:#33dddd");
        seenText.innerHTML = "Kingdom of Nords";
    } else if (imgAdress === "styles/images/Nords_banner.png") {
        seenImg.setAttribute("src", "styles/images/Khergit_Banner.png");
        seenImg.setAttribute("alt", "Banner from the Khergit Klanate faction, from Mount & Blade");
        seenText.setAttribute("style", "color:#cc99ff");
        seenText.innerHTML = "Khergit Klanate"; 
    } else {
        seenImg.setAttribute("src", "styles/images/Vaegir_Banner.png");
        seenImg.setAttribute("alt", "Banner from the Vaegirs factions, from Mount & Blade");
        seenText.setAttribute("style", "color:#ccbb99");
        seenText.innerHTML = "Kingdom of Vaegirs";
    }
    //Olha qual é a imagem atual, usando o imgAdress e depois troca para a próxima, assim como o atributo "alt"
    //Alterna a cor do texto para fica igual ao da facção

});