<script>
    export let links = [{ text: 'home', icon: 'fas fa-home'}, {text: 'services', icon: 'fas fa-concierge-bell'}, {text: 'contact', icon: 'fas fa-phone'}]
    let showMobileMenu = false
    export let title = 'awi'
    let showMenu = () => {
        showMobileMenu = !showMobileMenu
    }
</script>

<div class="md:my-0 bg-gray-800 shadow-md navbar">
  <nav class="w-100 flex flex-col md:flex-row md:justify-between">
    <div class="flex justify-between items-center">
        <a href="!#" class="mx-4 sm:p-0 px-2 py-4 uppercase font-bold text-xl text-white text-center">
            {title}
        </a>
        
        <a href="#!" class="mx-4 uppercase font-bold cursor-pointer md:hidden block text-xl text-white text-center" on:click|preventDefault ={showMenu}>
            <i class="fas fa-bars"></i>
        </a>

        
    </div>
    <ul class="flex flex-col md:flex-row md:justify-end" class:hidden={showMobileMenu}>
      {#each links as link}
      <li>
        <a href="!#" class="flex justify-between px-8 py-8 text-grey-700 capitalize text-gray-200 font-bold md:text-center hover:bg-white hover:text-gray-700">
            {link.text}

            <span class="md:ml-4"><i class="{link.icon}"></i></span>
        </a>
      </li>
      {/each}
    </ul>
  </nav>
</div>

<style>
 
</style>