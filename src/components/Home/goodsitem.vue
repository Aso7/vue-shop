<template>
    <dl @click="golistDetail">
        <dt>
            <img v-lazy="data.imageurl" alt="">
        </dt>
        <dd>
            <p>{{data.wname}}</p>
            <p>
                <span>
                    <i>￥</i>{{data.jdPrice}}</span>
                <span @click.stop="addCart" class="iconfont icon-gouwuche"></span>
            </p>
        </dd>
    </dl>
</template>
<script>
import { getCookie } from "../../utils/utils.js"
export default {
    props: {
        data: {
            required: true,
            type: Object
        },
        instance:{

        }
    },
    methods: {
        addCart() {
            if (!getCookie('token')) {
                this.$router.push({
                    name: "login"
                })
                return;
            }
            console.log(this.data)
            this.$http.post('/api/addcart', {
                token: getCookie("token"),
                data: this.data
            }).then(res => {
                console.log(res)
                if (res.code === 1) {
                    console.log('添加成功')
                    this.instance.active('添加成功')
                } else {
                    this.$router.push({
                        name: "login",
                        query: {
                            from: "cart"
                        }
                    })
                }
            })
        },
        golistDetail() {
            this.$router.push({
                name: "listDetail",
                query: {
                    url: encodeURIComponent(this.data.clickUrl)
                }
            })
        }
    }
}
</script>
<style>

</style>
