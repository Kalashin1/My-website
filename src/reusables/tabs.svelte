<script>
  export let tabHeadings
  export let tabStyles
  //  TAB HEADINGS
  // let tabHeadings =  [
  //   {
  //     heading: 'Welcome',
  //     active: 'active'
  //   },
  //   {
  //     heading: 'Iterated',
  //     active: 'notActive'
  //   },
  //   {
  //     heading: 'Joy',
  //     active: 'notActive'
  //   }
  // ]

  //export let  tabStyles = {
  //   textColor: 'text-gray-800'
  //   background: 'bg-red-500',
  //   bodrderRadius: 'rounded-md',
  //   shadow: 'shadow-md',
  //   borderWidth: 'border-2',
  //   borderColor: 'border-red-200' 
  // }

  const {textColor, background, borderRadius, shadow, borderWidth, borderColor} = tabStyles

  let showTabItem = function(e){
    if(e.target.classList.contains('active')){
      console.log('already active')
      return
    }
    if(e.target.classList.contains('notActive')){
      let myArr = Array.from(e.target.parentNode.children)
      myArr.forEach(element => {

        if(element.classList.contains('active')){
          element.classList.remove('active')
          element.classList.add('notActive')
          e.target.classList.remove('notActive')
          e.target.classList.add('active')
        }
      })
      let currentDiv = myArr.indexOf(e.target)
      let myDiv = Array.from(document.querySelectorAll('.item'))
      myDiv.forEach( div => div.classList.add('hidden'))
      myDiv[currentDiv].classList.remove('hidden')
    }
    
  }

  
  
</script>

<div class="grid grid-cols-1 justify-center items-center {`${textColor} ${background} ${borderRadius} ${shadow} ${borderWidth} ${borderColor}`}">
  <!-- Tab List Template number of colums if equal to the number of tab heading items-->
  <div class="grid grid-cols-{`${tabHeadings.length}`} py-2 px-4 w-2/4 ml-auto mr-auto">
    <!-- for each tabheading show a tab item -->
    {#each tabHeadings as tabHeading}
    <!-- tab item -->
      <div on:click={(e)=> { showTabItem(e, tabHeading)}} class="text-lg font-bold capitalize cursor-pointer border-b-red-800 pb-3 text-center px-4 py-2 text-gray-800 {tabHeading.active}">
        {tabHeading.heading}
      </div>
    {/each}
  </div>

  <div class="flex flex-col justify-center items-center p-4 mx-4">

    <div class="item 0 px-6 py-4">
      <slot name="item-1"></slot>
    </div>
    <div class="item 1 hidden px-6 py-4">
      <slot name="item-2"></slot>
    </div>
    <div class="item 2 hidden px-6 py-4">
      <slot name="item-3"></slot>
    </div>
    <div class="item 3 hidden px-6 py-4">
      <slot name="item-4"></slot>
    </div>
  </div>

</div>

<style>
.active{
  border-bottom: 2px solid
}
</style>