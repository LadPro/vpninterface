<script>
    import { onMount } from 'svelte';
	import Vpn from "../components/vpn.svelte";
	import Acciones from "../components/acciones.svelte";
    import { Json } from "../variables.js";
    import { progress } from "../variables.js";

    async function actualizar () {
        $progress = true
        const url = `http://127.0.0.1:5000/actualizar`; 
        
        const data = { input: "Actualizar" }; // Datos a enviar

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Respuesta del servidor:', responseData);
                responseData
                $Json = responseData

            } else {
                console.error('Error en la solicitud:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }finally{
          $progress = false
        }
    }
    onMount(() => {
        actualizar();
  });

</script>


<div class="flex flex-col items-center m-6">

    <div class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 my-6 ">
        <Vpn texto=Suecia inputData=suecia/><Vpn texto="India" inputData=india/><Vpn texto=Francia inputData=francia/>
        <Vpn texto= Inglaterra inputData=inglaterra/><Vpn texto=Irlanda inputData=irlanda/><Vpn texto=Corea inputData=corea/>
        <Vpn texto=Japon inputData=japon/><Vpn texto=Canada inputData=canada/><Vpn texto=Brasil inputData=brasil/>
        <Vpn texto=Singapur inputData=singapur/><Vpn texto=Australia inputData=australia/><Vpn texto=Alemania inputData=alemania/>
        <Vpn texto=EEUU inputData=us/>
    </div>
    <hr class="w-full border-t-4 border-rosa rounded-xl ">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        <Acciones tipoRequest="actualizar" texto="Actualizar Regiones"/>
        <Acciones tipoRequest="apagar_todas" texto="Apagar todo"/>
        <Acciones tipoRequest="encender_todas" texto="Encender todas"/>
    </div>
    <!-- <div>{$Json.india}</div> -->
    <div class="m-10">
</div>
</div>
