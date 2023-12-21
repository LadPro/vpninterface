<script>
  import { Json } from "../variables.js";
  import { progress } from "../variables.js";
  let isLoading = false
  let click = false
  let hover = true;
  let respuesta = ''
  export let texto = '';
  export let inputData = '';

  //// FUNCION DE ENVIO DE DATOS AL SERVIDOR
  async function postdata () {
      isLoading = true
      $progress = true
      let url = ""
      if ($Json[inputData] === "noNone"){
        url = `http://127.0.0.1:5000/apagar_una`; // Reemplaza esto con tu URL de servidor
      } else {
        url = `http://127.0.0.1:5000/encender_una`; // Reemplaza esto con tu URL de servidor
      }
      
      const data = { input: inputData }; // Datos a enviar

      try {
          const response = await fetch(url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
          });

          if (response.ok) {
              // La solicitud fue exitosa, puedes manejar la respuesta aquí
              const responseData = await response.json();
              console.log('Respuesta del servidor:', responseData);
              responseData
              
              let string = JSON.stringify(responseData)
              $Json = responseData
              respuesta = string

          } else {
              // La solicitud falló
              console.error('Error en la solicitud:', response.status);
          }
      } catch (error) {
          console.error('Error:', error);
      }finally{
        isLoading = false
        $progress = false
      }
  }
  
</script>


<button
  on:mouseenter={() => (hover = false)}
  on:mouseleave={() => (hover = true)}
  on:click={() => (click = true)}
  on:click={postdata}
  class:cargando={isLoading || $progress}
  disabled={isLoading}
  class:encendido={$Json[inputData] === 'noNone' }
  aria-label="Activar/desactivar VPN"
  class="relative overflow-hidden lg:rounded-lg rounded-3xl w-96 h-14 bg-orange-500">
  <div
  class="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 movimiento"

  
  class:-translate-y-full={!hover && !isLoading}

  >

  {#if isLoading || $progress}
  <progress class="progres h-full absolute rounded-none "></progress>
  {/if}

  <p style="color: #000;" class="font-semibold text-3xl">
    {#if $Json[inputData] === 'noNone' && isLoading}
      Apagando en {texto}
      
      {:else if $Json[inputData] === null && isLoading}
      Encendiendo en {texto}
    {:else}
      {texto}
    {/if}  
    </p>
  </div>
  
  <div
  class="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 "
  class:translate-y-0={!hover}
  class:translate-y-full={hover}
  class:hidden={isLoading}
  >
  <p style="color: #000;" class="font-semibold text-3xl">
    {#if $Json[inputData] === 'noNone'}
      Apagar Vpn en {texto}
    {:else}
      Encender Vpn en {texto}
    {/if}
    
  </p>
</div>
</button>
<!-- <div>{$Json.india}</div> -->

<style>

  /* .movimiento{
    @apply
  } */
  @keyframes coloresCambiantes {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 100%;
  }
}
  .cargando {
    @apply bg-red-500;
    
    animation-name: coloresCambiantes; /* Nombre del keyframe */
    animation-duration: 3s; /* Duración de la animación en segundos */
    animation-timing-function: ease-in-out; /* Función de temporización de la animación */
    animation-iteration-count: infinite; /* Número de repeticiones (en este caso, infinito) */
  }
  

  .encendido {
    @apply bg-green-500;
  }

.progres {
  position: absolute;
  width: 100%;
  appearance: none;
  overflow: hidden;
  height: 0.5rem/* 8px */;
  height: 100%;
}
.progres::-moz-progress-bar {
    border-radius: var(--rounded-box, 1rem/* 16px */);
    --tw-bg-opacity: 1;
    background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));
}
.progres:indeterminate {
    --progress-color: var(--fallback-bc,oklch(var(--bc)/1));
    background-image: repeating-linear-gradient(
    90deg,
    var(--progress-color) -1%,
    var(--progress-color) 10%,
    transparent 10%,
    transparent 90%
  );
    background-size: 200%;
    background-position-x: 15%;
    animation: progress-loading 5s ease-in-out infinite;
}
.progres::-webkit-progress-bar {
    border-radius: var(--rounded-box, 1rem/* 16px */);
    background-color: transparent;
}
.progres::-webkit-progress-value {
    border-radius: var(--rounded-box, 1rem/* 16px */);
    --tw-bg-opacity: 1;
    background-color: var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));
}
.progres:indeterminate::-moz-progress-bar {
    background-color: transparent;
    background-image: repeating-linear-gradient(
    90deg,
    var(--progress-color) -1%,
    var(--progress-color) 10%,
    transparent 10%,
    transparent 90%
  );
    background-size: 200%;
    background-position-x: 15%;
    animation: progress-loading 5s ease-in-out infinite;
}
</style>