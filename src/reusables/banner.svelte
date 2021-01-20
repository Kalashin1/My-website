<script>
 export let bannerText
</script>

<div class="banner flex justify-center items-center text-6xl bg-gray-200 text-red-500 font-bold">
    {bannerText}
</div>

<style>
  div.banner{
    min-height: 400px;
    background: url(/assets/images/engineers-in-workshop-3862618.jpg);
    background-position: center;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
  }
  div.banner::after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
    z-index: 2;
    background: rgba(0,0,0, .2);
  }
</style>