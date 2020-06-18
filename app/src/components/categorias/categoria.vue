<template>
    <div>
        <create/>
        <list/>
    </div>
    
</template>
<script>
import create from './createCategoria'
import list from './listCategorias'
export default {
    components:{
        create,
        list
    }
}
</script>