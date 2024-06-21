<template>
  <div :id="id" style='overflow:hidden'></div>
</template>

<script>
import { Pie, G2 } from '@antv/g2plot'
const G = G2.getEngine('canvas'); 
// let piePlot;
export default {
  name: 'Pie',
  props:{
    id:{
      type:String,
      required:true
    },
    data:{
      type:Array,
      required:true
    },
    statisticText:{
      type:String,
      required:true
    },
    color:{
      type:Array,
      required:true
    }
  },
  data(){
    return {
      piePlot: '',
    }
  },
  // watch:{
  //   data(val){
  //     if(val.length > 0){   
  //       piePlot.destroy()
  //       this.initRadarPlot() 
  //     }
  //   }
  // },
  watch: {
    data: {
      deep: true,
      handler: function (val, oldValue) {
        console.log(val)
        // piePlot.destroy()
        // this.initRadarPlot()
        this.options.data = val;
        this.piePlot.update(this.options);
      }
    },
    color(v){
      this.options.color = v;
      this.piePlot.update(this.options);
    }
  },
  methods: {
    init(){
      this.options = {
        width: 200,
        height: 200,
        autoFit:true, //是否自适应容器宽高，为true时width 和 height 的设置将失效
        padding: [16, 8, 16, 8],
        innerRadius: 0.6,
        angleField: 'value',
        colorField: 'name',
        radius: 0.8,
        label: {
          // type: 'outer',  //inner outer spider
          // offset: '10%',
          // labelHeight: 40,
          // content: '{name}\n{percentage}',
          // style: {
          //   textAlign: 'center',
          //   fontSize: 8,
          // },
          //content: '{value}',
          //formatter: ({ percent }) => `${(percent * 100).toFixed(0)}%`
          
          type: 'spider',
          labelHeight: 40,
          style: {
            textAlign: 'center',
            fontSize: 10,
          },
          formatter: (data, mappingData) => {
            const group = new G.Group({});
            group.addShape({
              type: 'circle',
              attrs: {
                x: 0,
                y: 0,
                width: 40,
                height: 50,
                r: 5,
                fill: mappingData.color
              },
            });
            group.addShape({
              type: 'text',
              attrs: {
                x: 10,
                y: 8,
                text: `${data.value}`,
                fill: 'rgba(0, 0, 0, 0.65)',
                fontWeight: 700,
              },
            });
            // group.addShape({
            //   type: 'text',
            //   attrs: {
            //      x: 0,
            //      y: 25,
            //     text: `${data.name}`,
            //     fill: mappingData.color,
            //   },
            // });
            return group;
          }
        },
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontSize:10
            },
            content:this.statisticText,
          },
        },
        legend: {
          position:'bottom',
        },
        color:this.color,
        data:this.data
      }
      this.piePlot = new Pie(this.id, this.options);

      this.piePlot.render();
    },
  },
  mounted () {
    this.init();
  }
  // watch:{
  //   data:{    
  //     handler(val){
  //       if(val.length > 0){
  //         //方式一 有新数据从新渲染图表
  //         //piePlot.changeData(val)

  //         //方式二 先销毁图表 在创建图表
  //         piePlot.destroy()
  //         this.initRadarPlot() 
  //       }
  //     },
  //     deep: true,  //深度监听
  //   }
  // },
  // mounted() {
  //   this.initRadarPlot()
  // },
  // methods: {
  //   initRadarPlot() { 
  //     piePlot = new Pie(this.id, {
  //       width: 240,
  //       height: 240,
  //       autoFit:true, //是否自适应容器宽高，为true时width 和 height 的设置将失效
  //       padding: [16, 8, 16, 8],
  //       innerRadius: 0.6,
  //       angleField: 'value',
  //       colorField: 'name',
  //       radius: 0.8,
  //       label: {
  //         // type: 'outer',  //inner outer spider
  //         // offset: '10%',
  //         // labelHeight: 40,
  //         // content: '{name}\n{percentage}',
  //         // style: {
  //         //   textAlign: 'center',
  //         //   fontSize: 8,
  //         // },
  //         //content: '{value}',
  //         //formatter: ({ percent }) => `${(percent * 100).toFixed(0)}%`
          
  //         type: 'spider',
  //         labelHeight: 40,
  //         style: {
  //           textAlign: 'center',
  //           fontSize: 10,
  //         },
  //         formatter: (data, mappingData) => {
  //           const group = new G.Group({});
  //           group.addShape({
  //             type: 'circle',
  //             attrs: {
  //               x: 0,
  //               y: 0,
  //               width: 40,
  //               height: 50,
  //               r: 5,
  //               fill: mappingData.color
  //             },
  //           });
  //           group.addShape({
  //             type: 'text',
  //             attrs: {
  //               x: 10,
  //               y: 8,
  //               text: `${data.value}`,
  //               fill: 'rgba(0, 0, 0, 0.65)',
  //               fontWeight: 700,
  //             },
  //           });
  //           // group.addShape({
  //           //   type: 'text',
  //           //   attrs: {
  //           //      x: 0,
  //           //      y: 25,
  //           //     text: `${data.name}`,
  //           //     fill: mappingData.color,
  //           //   },
  //           // });
  //           return group;
  //         }
  //       },
  //       statistic: {
  //         title: false,
  //         content: {
  //           style: {
  //             whiteSpace: 'pre-wrap',
  //             overflow: 'hidden',
  //             textOverflow: 'ellipsis',
  //             fontSize:10
  //           },
  //           content:this.statisticText,
  //         },
  //       },
  //       // legend: {
  //       //   position: 'bottom',
  //       // },
  //       color:this.color,
  //       data:this.data
  //     });

  //     piePlot.render();
      
  //   }
  // }
}
</script>

<style lang="scss" scoped>

</style>