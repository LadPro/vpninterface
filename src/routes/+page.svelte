<script>
	import Vpn from "../components/vpn.svelte";
	import Acciones from "../components/acciones.svelte";
</script>
<div class="m-6">

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 my-6 ">
        <Vpn texto=Suecia/><Vpn texto="India"/><Vpn texto=Francia/>
        <Vpn texto= Inglaterra/><Vpn texto=Irlanda/><Vpn texto=Corea/>
        <Vpn texto=Japon/><Vpn texto=Canada/><Vpn texto=Brasil/>
        <Vpn texto=Singapur/><Vpn texto=Australia/><Vpn texto=Alemania/>
        <Vpn texto=Murica/>
    </div>
    <hr class="w-full border-t-4 border-rosa rounded-xl ">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 my-6">
        <Acciones texto="Actualizar Regiones"/>
        <Acciones texto="Apagar todo"/>
        <Acciones texto="Encender todas"/>
    </div>
    <div class="m-10">
</div>
</div>