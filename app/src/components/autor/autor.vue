<template>
    <div>
        <list></list>
        <create></create>
    </div>
</template>
<script>

import create from './createAutores'
import list from './listAutores'

export default {
  components: {
    create,
    list
}
    
}
</script>