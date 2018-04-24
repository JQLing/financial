<template lang="pug">
  .pwd-control(@click='focusin')
    .box
      .hidden-input
        input(ref='password', :maxlength='6', type='tel', @keydown='keydown', value='1')
      .flex-1.item.item1(:class='{"circle" : options.index > 0}')
        input(ref='password1', readonly)
      .flex-1.item(:class='{"circle" : options.index > 1}')
        input(ref='password2', readonly)
      .flex-1.item(:class='{"circle" : options.index > 2}')
        input(ref='password3', readonly)
      .flex-1.item(:class='{"circle" : options.index > 3}')
        input(ref='password4', readonly)
      .flex-1.item(:class='{"circle" : options.index > 4}')
        input(ref='password5', readonly)
      .flex-1.item.item6(:class='{"circle" : options.index > 5}')
        input(ref='password6', readonly)
</template>

<script>
  export default {
    name: 'Password',
    props: {
    },
    data() {
      return {
        keyCode: {
          //数字键键值
          48: "0",
          49: "1",
          50: "2",
          51: "3",
          52: "4",
          53: "5",
          54: "6",
          55: "7",
          56: "8",
          57: "9",
          //小键盘数字键键值
          96: "0",
          97: "1",
          98: "2",
          99: "3",
          100:"4",
          101:"5",
          102:"6",
          103:"7",
          104:"8",
          105:"9",
        },
        options: {
          //索引
          index: 0,
          //input个数
          max: 6,
          //密码数组
          pwdArr: [],
          //input type
          type: "password"
        }
      };
    },
    beforeMount() {
    },
    mounted() {
      this.$refs.password1.style.lineHeight = (this.$refs.password1.clientWidth - 100) +  'px';
      this.$refs.password2.style.lineHeight = (this.$refs.password2.clientWidth - 100) +  'px';
      this.$refs.password3.style.lineHeight = (this.$refs.password3.clientWidth - 100) +  'px';
      this.$refs.password4.style.lineHeight = (this.$refs.password4.clientWidth - 100) +  'px';
      this.$refs.password5.style.lineHeight = (this.$refs.password5.clientWidth - 100) +  'px';
      this.$refs.password6.style.lineHeight = (this.$refs.password6.clientWidth - 100) +  'px';
      this.$refs.password.focus();
    },
    methods: {
      clear() {
        this.options.index = 0;
        this.options.pwdArr = [];
        this.$refs.password.focus();
      },
      focusin() {
        this.$refs.password.focus();
      },
      keydown(e) {
        var key = e.keyCode;

        if (this.options.index >= this.options.max) {
          return;
        }

        //数字键盘，功能区键盘数字
        if (key >= 96 && 105 >= key || key >= 48 && 57 >= key) {

          if (this.options.index >= this.options.max - 1) {
            this.options.index = this.options.max - 1;
          }

          var num = this.keyCode[key];
          this.options.pwdArr[this.options.index] = num;
          this.options.index++;

          if (this.options.index === this.options.max) {
            var pStr = this.options.pwdArr.join('');
            var _self = this;
            setTimeout(function() {
              _self.options.index = 0;
              _self.options.pwdArr = [];
              _self.$emit('finish', pStr);
            }, 500);
          }
        } else if (key == 8 || key == 46) {
          //删除
          this.options.index--;
          if (0 >= this.options.index) {
            this.options.index = 0;
          }
          this.options.pwdArr.splice(this.options.index, 1)
        }
      }
    }
  };
</script>

<style lang="stylus">
  .pwd-control
    text-align: center
    width: 100%
    position relative
    left: -1px
    .hidden-input
      position: absolute
      z-index: 0
      left: -100%
      bottom 250%
    .box
      width: 100%
      display: flex
      flex-wrap: wrap
      .flex-1
        display: block
        flex: 1
        width: 0
        flex-basis: 0
      .item
        margin: 0
        position: relative
      .item1
        input
          border-top-left-radius: 4px
          border-bottom-left-radius: 4px
      .item6
        input
          border-top-right-radius: 4px
          border-bottom-right-radius: 4px
      .circle
        &:after
          content: ""
          width: 8px
          height: 8px
          background: #000
          border-radius: 50%
          position: absolute
          top: 50%
          left: 50%
          margin-top: -4px
          margin-left: -4px
      input
        display: block
        width: inherit
        text-align: center
        border: 1px solid #d5d5d5
        width: 100%
        color: #fff
        line-height: 53px
        &:focus
          color: #fff
</style>