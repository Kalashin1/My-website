<script>
 export let button 


// in parent.sevelte
//  let button = {
//      type: 'round' OR 'normal' 
//      background: 'bg-white',
//      shadow: 'shadow-0',
//      borderWidth: 'border-2',
//      borderRadius: 'rounded-lg',
//      borderColor: 'border-teal-500',
//      text: 'login',
//      textColor: 'text-teal-500',
// 	}

 let {type, background, shadow, borderWidth, borderRadius, borderColor, text, textColor} = button

</script>

    {#if type === 'normal'}
      <div class="{`${background} ${shadow} ${borderWidth} ${borderRadius} ${borderColor} ${textColor}`} font-semibold px-16 cursor-pointer py-6 m-2 inline-flex justify-center items-center text-center capitalize">
        <span class="mx-2">
            {text}
        </span>
        
        <slot></slot>
        <!-- Hello -->
      </div>
    {/if}

    {#if type === 'round'}
      <div class="{`${background} ${shadow} ${borderWidth} ${borderRadius} ${borderColor} ${textColor}`} w-10 h-10 rounded-full font-semibold px-4 cursor-pointer py-2 m-2 inline-flex justify-center items-center text-center capitalize">
        <slot></slot>
        <!-- Hello -->
      </div>
    {/if}

<style>

</style>