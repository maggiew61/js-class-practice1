import TODOSystemView from './model/TODOSystemView.js'

let $value = document.getElementById("value").value //input value
if($value){
    let p = new TODOSystemView($value);
}