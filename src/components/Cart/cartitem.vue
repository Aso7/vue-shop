<template>
    <div class="shoplist">
        <span class="iconfont" :class="checkClass" @click="flag=!flag"></span>
        <dl>
            <dt><img :src="list.imageurl" alt=""></dt>
            <dd>
                <p>{{list.wname}}</p>
                <p>
                    <b>${{list.jdPrice}}</b>
                    <a>
                        <button @click="del">-</button>
                        <i class="num">{{list.count}}</i>
                        <button @click="add">+</button>
                    </a>
                </p>
            </dd>
        </dl>
    </div>
</template>
<script>
import { getCookie, bus } from "../../utils/utils.js"
export default {
    name: '',
    props: {
        list: {
            required: true,
            type: Object
        }
    },
    data() {
        return {
            // count:1
            flag: false
        }
    },
    mounted(){
            bus.$on("check-all",(check)=>{
            
                    this.flag = check
            })
    },
    computed: {
        checkClass() {
            return this.flag ? "icon-duoxuan" : "icon-check"
        }
    },
    watch: {
        flag(n, o) {
            bus.$emit("checkItem",
                {
                    name: this.list.wname,
                    price: n ? this.list.count * this.list.jdPrice : 0
                })
            //console.log(this.list.count * this.list.jdPrice)
        },
        list(n, o) {
            bus.$emit("checkItem",
                {
                    name: this.list.wname,
                    price: this.flag ? this.list.count * this.list.jdPrice : 0
                })
        }
    },
    methods: {
        del() {
            let count = this.list.count
            if (count - 1 <= 0) {
                return
            }
            this.$http.post("/api/cart/count", {
                token: getCookie('token'),
                count: count - 1,
                itemname: this.list.wname
            }).then(res => {
                if (res.code == 1) {
                    //bus.$emit("updates")
                    this.$store.dispatch("fetchCartList")
                }
            })
        },
        add() {
            let count = this.list.count
            if(count+1 >10){
                return
            }
            this.$http.post("/api/cart/count", {
                token: getCookie('token'),
                count: count + 1,
                itemname: this.list.wname
            }).then(res => {
                if (res.code == 1) {
                    //bus.$emit("updates")
                    this.$store.dispatch("fetchCartList")
                }
            })
        }
    }
}
</script>
<style>

</style>
