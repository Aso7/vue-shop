<template>
  <div class="box">
    <h5 class="f">分类食品</h5>
    <div class="xuanran">
      <ul class="fleft">
        <li v-for="(item,index) in list" :key="index" @click="rightData(index,item.id,item.item_type)">
          {{item.tit}}
        </li>
      </ul>
      <div class="fright">
        <dl v-for="(ite,ind) in data" :key="ind">
          <dt><img :src="ite.imgs" alt=""></dt>
          <dd>{{ite.name}}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import list from "../../../static/server/item.json"

console.log(list)
export default {
  name: 'iconDetail',
  data() {
    return {
      list: list.itemList,
      data: []
    }
  },
  methods: {
    rightData(index, id, dat) {
      if (index + 1 == id) {
        this.data.push(dat)
        console.log(this.data)
      }
    }
  }
}    
</script>
<style>
.box .f {
  width: 100%;
  line-height: .4rem;
  background: #fff;
  border-bottom: .01px solid #ccc;
  text-align: center
}
.xuanran{
  width: 100%;
  height: 100%;
}
.fleft {
  width: 29%;
  height: 100%;
  float: left;
  background: #fff
}

.fleft li {
  line-height: .35rem;
  text-align: center;
  border-bottom: .01px solid #eee;
}

.fright {
  width: 69%;
  height: 100%;
  float: right;
  background: #fff;
}
</style>
