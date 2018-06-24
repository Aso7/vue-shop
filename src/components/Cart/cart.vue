<template>
    <div class="cart">
        <h3>
            购物车
            <span @click="delItem">{{btn}}</span>
            <b class="iconfont icon-xiaoxi"></b>
        </h3>
        <div class="carlist">
            <div class="list" v-show="$store.state.cartList.length==0">您还未添加</div>
            <cartItem v-on:update="fetchList" v-for="(val,i) in $store.state.cartList" :key="i" v-bind:list="val"></cartItem>
        </div>
        <div class="foot">
            <label>
                <i class="iconfont" :class="checkClass" @click="checkAll"></i> 全选</label>
            <p>合计：￥{{total}}</p>
            <button @click="change">{{type}}</button>
        </div>
    </div>
</template>
<script>
import { getCookie, bus } from "../../utils/utils.js"
import cartItem from "./cartitem"
export default {
    name: "cart",
    data() {
        return {
            data: [],
            count: 1,
            list: [],
            total: 0,
            flag: false,
            type: '结算',
            btn: "编辑"
        }
    },
    created() {
        //请求购物车列表
        //this.fetchList()
        this.$store.dispatch("fetchCartList")
    },
    computed: {
        checkClass() {
            return this.flag ? "icon-duoxuan" : "icon-check"
        }
    },
    mounted() {
        // bus.$on("updates",()=>{
        //     console.log("update")
        //     this.fetchList()
        // })
        bus.$on("checkItem", (data) => {
            console.log(data)
            this.list[data.name] = data.price
            this.sum()
        })
    },
    methods: {
        fetchList() {
            this.$http.post('/api/goodslist', {
                token: getCookie('token')
            }).then(res => {
                console.log(res)
                if (res.code == 0) {
                    if (confirm("登录超时，请重新登录")) {
                        this.$router.push({
                            name: "login",
                            query: {
                                from: "cart"
                            }
                        })
                    } else {

                    }
                } else {
                    this.data = res.data
                }
            })
        },
        sum() {
            this.total = Object.values(this.list).reduce((init, item) => {
                //console.log(init,item)
                return init + item
            }, 0).toFixed(2)
        },
        checkAll() {
            this.flag = !this.flag
            bus.$emit('check-all', this.flag)

        },
        delItem() {
            if (this.btn == "编辑") {
                this.type = '删除'
                this.btn = '完成'
            } else {
                this.type = '结算'
                this.btn = '编辑'
            }
        },
        change() {
            if (this.type == '结算') {
                //跳转支付
            } else {
                if (confirm("小主，请三思啊！！！")) {
                    this.$http.post('/api/cart/dele', {
                        token: getCookie('token'),
                        itemname:Object.keys(this.list)
                    }).then((res) => {
                        console.log(res)
                    })
                }
            }
        }
    },
    components: {
        cartItem
    }
}
</script>
<style>
.carlist {
    margin-top: .4rem;
    width: 100%;
    height: 100%;
}

.shoplist {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .1rem;
    background: #fff;
    margin-bottom: .05rem;
}

.shoplist dl {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.shoplist dl dt {
    width: 25%;
}

.shoplist dl dt img {
    width: 100%;
}

.shoplist dl dd {
    width: 70%;
    margin-left: 5%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.shoplist dl dd p {
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: .12rem!important;
    line-height: .2rem
    /**/
}

.shoplist dl dd p b {
    line-height: .4rem;
    color: red;
}

.shoplist dl dd p button {
    width: .2rem;
}

.shoplist dl dd p:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.shoplist:last-child {
    margin-bottom: .39rem;
}

.num {
    display: inline-block;
    width: .2rem;
    text-align: center
}

.cart {
    width: 100%;
    height: 100%;
}

.cart h3 {
    width: 100%;
    height: .4rem;
    background: #fff;
    border-bottom: .01px solid #ccc;
    text-align: center;
    position: relative;
    line-height: .4rem;
    font-size: .15rem;
    font-weight: normal;
    position: fixed;
    top: 0;
    left: 0;
}

.cart h3 span {
    position: absolute;
    right: 17%
}

.cart h3 b {
    position: absolute;
    right: 8%
}

.foot {
    width: 100%;
    height: .4rem;
    background: #fff;
    position: absolute;
    bottom: .38rem;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.foot label {
    padding-left: .1rem;
}

.foot button {
    width: 33%;
    height: .4rem;
    border: 0;
    outline: 0;
    background: red;
    color: #fff;
}
</style>
