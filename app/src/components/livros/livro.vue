<template>
  <div>
    <list></list>
    <create></create>
  </div>
</template>
<script>

import create from './createLivros'
import list from './listLivros'

export default {
  components: {
    create,
    list
}
    
}
</script>