var likes = [3, 5, 8];
var spans = [
    document.querySelector("#count3"),
    document.querySelector("#count2"),
    document.querySelector("#count1")
];


function like(idPet) {
    likes[idPet]++;
    spans[idPet].innerText = likes[idPet] + 'like(s)';
    



}