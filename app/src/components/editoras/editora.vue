<template>
    <div>
        <list/>
        <create/>
    </div>
</template>
<script>
import create from './createEditora'
import list from './listEditoras'
export default {
    components:{
        create,
        list
    }
}
</script>