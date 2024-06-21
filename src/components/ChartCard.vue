<template>
  <a-card>
    <div class='title-box'>
      <slot name="title"></slot>
<!--      <slot name='select'></slot>-->
    </div>
    <div class='account'>
      <slot name='num'></slot>
    </div>
    <slot name="chart"></slot>
    <a-divider />
    <div class='online'>
      <slot name="footer"></slot>
    </div>
  </a-card>
</template>

<script>
export default {
  name: 'ChartCard',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  color: #0000006D;
  font-size: 14px;
}
.account {
  display: flex;
  justify-content: left;
  align-items: center;
  .account-count {
    color: #0000008D;
    font-size: 30px;
    margin-left: 50px;
  }
  .main-count {
    margin-left: 0px;
  }
}

.online {
  .offline {
    margin-left: 30px;
  }
}

/* by zyy */
.title-box{
  position:relative;
}
</style>