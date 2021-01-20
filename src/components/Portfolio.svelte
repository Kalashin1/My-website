<script>
import Grid from '../reusables/grid.svelte'

let projects = [{photo: 'assets/images/engineers-in-workshop-3862618.jpg', title: 'Some Crappy Work', link: "url"},{photo: 'assets/images/engineers-in-workshop-3862618.jpg', title: 'Some Crappy Work', link: "url"},{photo: 'assets/images/engineers-in-workshop-3862618.jpg', title: 'Some Crappy Work', link: "url"},{photo: 'assets/images/engineers-in-workshop-3862618.jpg', title: 'Some Crappy Work', link: "url"}]

let GridSettings = {
  medCols: 3,
  smCols: '1'
}


</script>

<section>
  <div class="px-16 py-8 my-8">
    <h3 class="text-gray-900 font-bold text-4xl text-center">Portfilio</h3>
  </div>
  <Grid {GridSettings}>
    {#each projects as project}
      <div class="my-2 cursor-pointer shadow-md overflow-x-hidden">
        <div>
          <img src={project.photo} class="w-full h-52 object-cover" />
        </div>
        <h3 class="text-gray-900 my-4 font-bold cursor-pointer text-2xl text-center">{project.title}</h3>
      </div>
    {/each}
  </Grid>
</section>

<style>

</style>