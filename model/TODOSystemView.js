
class TODOSystemView {  //equialent to 構造函數on the right
    constructor(x) {   //constructor()不設邏輯的東西 比較複雜的可放init() 類似像vue的reutnr data
      console.log('x is',x)
      this.test = 5
      //test
      this.$value = document.getElementById("value").value //input value
      //tset
      this.init()
    }
    init() {  //created 
        var btn = document.querySelector('button')
        let vm = this
        btn.addEventListener("click", 
        function() {
            vm.getInput()
        }
      );
    }
    get latest() {
      return this.$value
    }
    set latest(name) {  //change property value
      console.log('laterst')
      let x 
      if (this.$value === '睡覺') this.$value = '不可以這麼懶喔' 
   }
    /*拿input並且放到底下, 格式為
    <ul><li><div>input</div><div>x</div></li></ul>*/
    getInput() {
      console.log('this.test is',this.test)
      let $value = document.getElementById("value").value //input value
      const $li = document.createElement('li')
      $li.appendChild(this.newElement('div', $value));
      $li.appendChild(this.newElement('div', 'x'));
      $li.classList.add("div-style");
      let $ul = document.getElementById("ul-block")
      $ul.appendChild($li)
      this.addUniqueId()
      document.getElementById("value").value = '' //清空input
    }
    //產生新的tag並且加上delete的監聽事件
    newElement(element, value) {
      const $element = document.createElement(element)
      if (element === 'div') $element.addEventListener("click", this.removeList);
      $element.innerHTML = value
      return $element
    }
    removeList() {
      const $target = event.target.parentNode
      let $block = document.getElementsByClassName('div-style')
    }
    // //每個div加上unique id
    addUniqueId() {
      let $block = document.getElementsByClassName('div-style')
      // for (let i in $block){
      //   $block[i].setAttribute("id", i);
      //   console.log('$block[i] is',$block[i])
  
      // }
      // test
      // let b = list.getElementsByTagName("LI");  //每一個item
      let i, l = $block.length;
      for (i = 0; i < l; i++) {
        $block[i].setAttribute("id", i);
      }
    }
  }
  
export default TODOSystemView  //只有一個所以要寫default
