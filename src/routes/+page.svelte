<script>
	import Vpn from "../components/vpn.svelte";
	import Acciones from "../components/acciones.svelte";
</script>
<div class="m-6">

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 my-6 ">
        <Vpn texto=Suecia inputData=suecia/><Vpn texto="India" inputData=india/><Vpn texto=Francia inputData=francia/>
        <Vpn texto= Inglaterra inputData=inglaterra/><Vpn texto=Irlanda inputData=irlanda/><Vpn texto=Corea inputData=corea/>
        <Vpn texto=Japon inputData=japon/><Vpn texto=Canada inputData=canada/><Vpn texto=Brasil inputData=brasil/>
        <Vpn texto=Singapur inputData=singapur/><Vpn texto=Australia inputData=australia/><Vpn texto=Alemania inputData=alemania/>
        <Vpn texto=EEUU inputData=us/>
    </div>
    <hr class="w-full border-t-4 border-rosa rounded-xl ">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 my-6">
        <Acciones tipoRequest="actualizar" texto="Actualizar Regiones"/>
        <Acciones tipoRequest="apagar_todas" texto="Apagar todo"/>
        <Acciones tipoRequest="encender_todas" texto="Encender todas"/>
    </div>
    <div class="m-10">
</div>
</div>