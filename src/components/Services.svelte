<script>
  import Grid from '../reusables/grid.svelte'

  let GridSettings = {
    medCols: 3,
    smCols: '1'
  }

  let services = [
    {
      title: 'Frontend Web Development',
      text: 'Ex do Lorem sunt duis irure. Ea eu duis minim commodo quis ex id ut nostrud amet exercitation excepteur.',
      id: 1
    },
    {
      title: 'UI/UX Design',
      text: 'Deserunt sit sit sunt eu.Non ullamco aliqua esse dolor exercitation id mollit ullamco ut laborum.',
      id: 2
    },
    {
      title: 'Content Writing',
      text: 'Duis enim magna adipisicing officia. Aute deserunt nisi ipsum in adipisicing eiusmod voluptate mollit excepteur.',
      id: 3
    }
  ]
</script>

<div class="my-8">
  <div class="px-16">
    <h3 class="text-gray-900 font-bold text-4xl text-center">Services</h3>
  </div>
  <div>
    <Grid {GridSettings}>
      {#each services as service}
        <div class="grid grid-cols-1 py-4 text-gray-900 hover:bg-gray-400 transition-all duration-200 service shadow-md rounded-md">
          <div class="grid grid-cols-4 px-4">
            <div class="grid col-span-1"><i class="text-4xl fas fa-truck"></i></div>
            <h3 class="grid col-span-3 font-bold text-xl">{ service.title }</h3>
          </div>
          <div class="p-4 text-md font-bold ">
            {service.text}
          </div>
        </div>
      {/each}
    </Grid>
  </div>
</div>

<style>

</style>