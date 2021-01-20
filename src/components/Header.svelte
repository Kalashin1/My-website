<script>
  import Navbar from '../components/navbar.svelte'
</script>

<div>
  <Navbar />
  <div class="header mb-16">
    <div class="card p-4 py-8">
      <h3 class="text-4xl text-white font-bold capitalize my-6">
        i believe that dreams do exist, We need to chase them
      </h3>
      <a href="/" class="px-16 hover:bg-white hover:text-gray-800 cursor-pointer py-6 text-xl font-bold text-white rounded-md shadow-sm bg-gray-800 m-6">Contact Me</a>
    </div>
  </div></div>

<style>
  .header{
    background: url(/assets/images/man.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    position: relative;
    
  }

  @media screen and (min-width: 670px){
    .card{
      position: absolute;
      top: 30%;
      width: 50vw;
      left: 40%
    }
  }

  @media screen and (max-width: 670px){
    .card{
      position: absolute;
      top: 60%;
      z-index: 80;
      transform: translateY(-60%);
    }
  }

  .card{
    border-radius: .7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>