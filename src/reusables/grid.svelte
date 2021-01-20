<script>
  export let GridSettings

  const {medCols, smCols} = GridSettings
</script>

<div>
  <div class={`grid px-2 sm:grid-cols-${medCols} gap-x-2 grid-cols-${smCols} my-8`}>
    <slot></slot>
  </div>

</div>

<style>

</style>