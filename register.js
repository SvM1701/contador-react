// if("serviceWorker" in navigator){
//     console.log("Sí existe");
// }

if(navigator.serviceWorker){
    navigator.serviceWorker.register("./sw.js")
}