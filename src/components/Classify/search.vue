<template>
    <div class="search">
        <header>
            <button @click="back">取消</button>
            <input @input="search" type="text" v-model="keywords" placeholder="搜索" @blur="getVal" ref="ipt">
        </header>
        <ul v-html="htmls">     
        </ul>
        <p>
            <b class="iconfont icon-shijian"></b>
            <i>搜索历史</i>
            <ol>
                <li v-for="(item,i) in historyArr" :key="i">
                    {{item}}                 
                </li>
                <li><button @click="clearBtn">清除历史记录</button></li>
            </ol>
        </p>
    </div>
</template>
<script>
export default {
    name: 'search',
    data() {
        return {
            keywords: '',
            htmls: '',
            historyArr:[]
        }
    },
    methods: {
        search() {
            this.$http.get(`https://m.gome.com.cn/index.php?ctl=index&act=keywordsPromptNew&keystr=${this.keywords}&dotime=1528960286000`).then(res => {
                console.log(res)
                this.htmls = res
            })
        },
        getVal(){
            this.htmls="";
            let val = this.$refs.ipt.value;
            if(this.historyArr.indexOf(val)==-1){
                this.historyArr.push(val);
            }else{
                return
            }
        },
        clearBtn(){
            this.historyArr = []
        },
        back(){
            this.$router.back({
                name:'home'
            })
        }
    }
}
</script>
<style scoped>
.search {
    width: 100%;
    height: 100%;
    background: #fff
}

header {
    width: 100%;
    height: .4rem;
    line-height: .4rem;
    border-bottom: .1px solid #eee;
}

header button {
    width: 15%;
    height: .2rem;
    background: 0;
    border: 0;
    outline: 0;
}

header input {
    width: 70%;
    line-height: .25rem;
    padding-left: .2rem;
    border-radius: .1rem;
    background: #eee;
    border: 0;
    outline: 0
}

.search ul {
    width: 90%;
    margin-left: 5%;
    color: red;
}

.search p {
    width: 100%;
    height: .5rem;
    position: relative;
}

.search p b {
    color: hotpink;
    font-size: .22rem;
    line-height: .5rem;
    padding-left: .1rem;
    padding-top: .1rem;
}

.search p i {
    position: absolute;
    top: 30%;
    line-height: .2rem;
    padding-left: .05rem;
}
.search p ol{
    width: 90%;
    margin-left: 5%;
}
.search p ol button{
    margin-top: .15rem;
    width: 60%;
    line-height: .25rem;
    margin-left: 20%;
    background:0;
    border: .01rem solid #ccc;
    outline: none
}
</style>
