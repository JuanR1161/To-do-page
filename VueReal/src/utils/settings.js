export function getEnablewarning () {

const enableWarning=localStorage.getItem("enableWarning");
if (enableWarning){

    return enableWarning == "true"
    
}else{

    return true
}


}