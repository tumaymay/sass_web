<template>
    <div id="ccc">
        <button class="read-all" @click="showEditor()" >
                阅读全文
        </button>
        <div id="backdrop">

        </div>
        <div class="editor" v-show="isShow">
            <quill-editor 
                v-model="addContent" 
                :options="editorOption" 
                >
            </quill-editor>
            <button class="cancel-btn" @click="cancleShow()">
                取消
            </button>
        </div>
    </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
export default {
    name:"Community",
    data(){
        return{
            isShow:false,
            editorOption: {
                modules: {
                    toolbar: [
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'header': 1 }, { 'header': 2 }],
                    [{ 'align': [] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }]
                    ]
                }
            },
        }
    },
    components: { quillEditor },
    
    methods:{
         showEditor(){
            var back=document.getElementById("backdrop")
                this.isShow=true;
                back.style.display="block"
            
        },
        cancleShow(){
            var back=document.getElementById("backdrop")
            var show=document.getElementsByClassName("editor")[0];
            this.isShow=false;
            back.style.display="none"
        }
    }
}

</script>

<style scoped>
   .dep-heading{
    text-align: center;
}

.editor{
    width: 400px;
    height:400px;
    background:#fff;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
#backdrop{
    display: none;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.8;

}
.cancel-btn{
    color: black;
}
</style> 
</style>
