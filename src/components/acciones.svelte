<script>
  import { Json } from "../variables.js";
  import { progress } from "../variables.js";
  export let tipoRequest = ""
  let isLoading = false
  let inputData = ''
  let respuesta = ''
  let click = false
  let hover = true;
  
  // let click = true
  export let texto = 'Inglaterra';

  let json;
  Json.subscribe(value => {
    json = value;
  });
  // let progres;
  // progress.subscribe(value => {
  //   progres = value;
  // });

  async function postdata () {
        isLoading = true
        $progress = true
        const url = `http://127.0.0.1:5000/${tipoRequest}`; 
        
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
                json = responseData
                
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
<div>

  <button

    on:click={() => (click = true)}
    on:click={postdata}
    class:cargando={isLoading || $progress}
    disabled={isLoading || $progress}
    aria-label="Click para acceder al correo"
    class='relative overflow-hidden lg:rounded-lg rounded-3xl w-96 h-14 bg-blue-400'>
    <div
    class="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 "
    >
    <p style="color: #000;" class="font-semibold text-3xl">
      {texto}
    </p>
    </div>
    <div
    class="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500"
    class:translate-y-0={!hover}
    class:translate-y-full={hover}
    >
    {#if isLoading || $progress}
    <progress class="progres h-full absolute rounded-none "></progress>
    {/if}
    <p style="color: #000;" class="font-semibold text-3xl">
      Crear Vpn en {texto}
    </p>
    </div>
  </button>

  <!-- <div>
    <input bind:value={inputData} />
    <h1>{respuesta}</h1> 
  </div> -->
</div>
<style>
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
</style>