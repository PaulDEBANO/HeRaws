//Add actual date to the graph "world production"

export default function InputSlider() {
    let date = new Date();
    var annee = date.getFullYear();
    //document.getElementById("actual-date").innerHTML = "Year: " + annee;
    return("Now (" + annee + ")");
}