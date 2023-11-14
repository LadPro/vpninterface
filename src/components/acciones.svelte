<script>
  let click = false
  let hover = true;
  // let click = true
  export let texto = 'Inglaterra';
  let estadoa = 1;
  let estadob = 1;

function cambiarEstadoa() {
  // Cambiar el estado del botón
  estadoa = (estadoa % 2) + 1;
  console.log(estadoa)
  console.log(click)
}
function cambiarEstadob() {
  // Cambiar el estado del botón
  estadob = (estadob % 2) + 1;
  console.log(estadob)
  console.log(click)
}
</script>

<button
on:mouseenter={() => (hover = false)}
on:mouseleave={() => (hover = true)}
on:click={() => (click = true)}
class:hidden={click}
aria-label="Click para acceder al correo"
class={`relative overflow-hidden lg:rounded-lg rounded-3xl w-96 h-14 ${estadoa === 1 ? 'apagado' : estadoa === 2 ? 'estado-2' : 'estado-3'}`}
>
<div
class="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500"
class:translate-y-0={hover}
class:-translate-y-full={!hover}
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
<p style="color: #000;" class="font-semibold text-3xl">
    Crear Vpn en {texto}
  </p>
</div>
</button>



<button
on:mouseenter={() => (hover = false)}
on:mouseleave={() => (hover = true)}
on:click={() => (click = false)}
class:hidden={!click}
aria-label="Click para acceder al correo"
class={`relative overflow-hidden lg:rounded-lg rounded-3xl w-96 h-14 ${estadob === 1 ? 'encendido' : 'estado-2'}`}
>
<div
  class="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500"
  class:translate-y-0={hover}
  class:-translate-y-full={!hover}
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
  <p style="color: #000;" class="font-semibold text-3xl">
    Detener en {texto}
  </p>
</div>
</button>

<style>
.apagado {
  @apply bg-sky-500;
}

.estado-2 {
  @apply bg-gradient-to-r from-green-400 to-blue-500; /* Colores cambiantes */
}

.encendido {
  @apply bg-green-500;
}
</style>