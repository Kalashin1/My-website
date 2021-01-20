<script>
    export let card;
    // in parent.card.svelte
    // Card options
  	// let card = {
    // shadow: 'shadow-md', --CONTROLS THE SHADOW
    // background: 'bg-gray-300', --CONTROLS THE BACKGROUND
    // textColor: 'text-gray-900', --CONTROLS THE TEXT COLOR
		// gridCol: '1', --DETERMINES THE GRID SYSTEM OF THE CARD 1 FOR IT TO STACK, TWO TO FLOAT IT
		// imagePosition: 'bottom' --POSITION OF THE IMAGE CAN BE 'TOP', 'BOTTOM', 'LEFT', 'RIGHT'
    // }
    
    const {shadow, background, textColor, gridCol, imagePosition} = card
</script>



{#if imagePosition === 'top' || imagePosition === 'left'}
  <div class="{`${background} ${textColor} w-32 md:grid-cols-${gridCol} ${shadow}`} rounded-md my-2 grid grid-cols-1">
      <div>
          <slot name="image"></slot>
      </div>
      <div class="p-4">
          <slot name="text"></slot>
      </div>
  </div>
  {:else if imagePosition === 'bottom' || imagePosition === 'right'}
  <div class="{`${background} ${textColor} md:grid-cols-${gridCol} ${shadow}`} rounded-md my-2 grid grid-cols-1 w-2/4">
    <div class="p-6 text-md">
        <slot name="text"></slot>
    </div>
    <div>
      <slot name="image"></slot>
  </div>
</div>

{/if}


