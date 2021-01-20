<script>
  import Grid from '../reusables/grid.svelte'
  let skills = ['fab fa-html5', 'fab fa-css3', 'fab fa-node-js', 'fab fa-angular', 'fab fa-vuejs',  'fab fa-react', 'fab fa-sass', 'fas fa-database']
  let GridSettings = {
    medCols: skills.length,
    smCols: skills.length
  }
</script>

<section class="bg-gray-900 text-white py-8 px-4">
  <div class="px-16 py-8">
    <h3 class="text-white font-bold text-4xl text-center">Skills</h3>
  </div>
  <div>
    <Grid {GridSettings }>
      {#each skills as skill}
        <div class="mx-2 w-full shadow-md">
          <i class={`${skill} text-center text-4xl`}></i>
        </div>
      {/each}
    </Grid>
  </div>
</section>

<style>

</style>