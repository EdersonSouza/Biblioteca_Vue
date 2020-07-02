<template>
    <div>
        <list/>
        <v-dialog
          v-model="dialog"
          width="500"
        >
         <create @sdialog="sdialog"/>
        </v-dialog>
        <v-btn
            bottom
            color="#009688"
            dark
            fab
            fixed
            right
            @click="dialog = !dialog"
            >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </div>
</template>
<script>
import create from './createEditora'
import list from './listEditoras'
export default {
    components:{
        create,
        list
    },
    data: () =>({
    dialog: false,
    }),
    methods: {
        sdialog(){
            this.dialog = false
        }
        
        
    },
}
</script>