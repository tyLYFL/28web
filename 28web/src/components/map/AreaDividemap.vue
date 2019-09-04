<template>
<div class="AreaDividemapBox">
    <input ref="tipinput" id="tipinput"/>
 <div id="AreaDividemap">


 </div>
</div>
</template>
<script>
import { loadJs } from '@/utils/'
var map={}
export default {
      props:{
      formAll:{
        type:[Object,String,Array,Number],
      },
    },
    data(){
        return{
        marker:null,
        contextMenuPositon:[]
        }
    },
    methods:{
        loadMap:function(){
            this.$nextTick(()=>{
                 loadJs('https://webapi.amap.com/maps?v=1.4.10&key=e61aa7ddc6349acdb3b57c062080f730&plugin=AMap.CitySearch,AMap.Autocomplete,AMap.DistrictSearch,AMap.Geocoder,AMap.OverView,AMap.TruckDriving,AMap.Scale').then(() => {
                this.init();
                })
        })},
        init:function(){
        var _this = this
        var contextMenu = new AMap.ContextMenu()
		map = new AMap.Map('AreaDividemap', {
			resizeEnable: true,
			zoom:12
        })
        // map.plugin(["AMap.ToolBar"], function() {
        //     map.addControl(new AMap.ToolBar());
        // });
                        // 输入提示
      var autoOptions = {
        input: 'tipinput'
      }
      var auto = new AMap.Autocomplete(autoOptions)
        console.log('ddddda',auto)
        map.on('rightclick', function (e) {
            contextMenu.open(map, e.lnglat);
            _this.contextMenuPositon = e.lnglat; //右键菜单位置
        });
        contextMenu.addItem('添加中心点', function(e) {
        _this.clearMarker()
        findInfo(_this.contextMenuPositon)
        }, 3)
        function findInfo(pos) {
        var geocoder = new AMap.Geocoder({
        radius: 500 ,// 范围，默认：500
        extensions: "all"
        })
        geocoder.getAddress(pos, function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    _this.geocoder_CallBack(result, pos)
                } else {
                    _this.clearMarker()
                    alert('获取不到当前位置的地址信息~')
                }
                })
            }
        },

        geocoder_CallBack(data, pos){
        this.circleDraw(pos)
        this.circleDraw2(pos)
        this.marker = new AMap.Marker({
            map: map,
            position: pos // 基点位置
          })
        },

        // 中心点原型范围
        circleDraw(pos){
         map.clearMap(circle);
         var circle = new AMap.Circle({
                center: pos,
                radius: 5000, //半径
                borderWeight: 3,
                strokeColor: "#FF33FF", 
                strokeOpacity: 1,
                strokeWeight: 2,
                strokeOpacity: 0.2,
                fillOpacity: 0.4,
                strokeStyle: 'dashed',
                strokeDasharray: [3, 3], 
                fillColor: '#1791fc',
                zIndex: 50,
            })
        circle.setMap(map)
        },
        circleDraw2(pos){
         var circle = new AMap.Circle({
                center: pos,
                radius: 4000, //半径
                borderWeight: 3,
                strokeColor: "#FF33FF", 
                strokeOpacity: 1,
                strokeWeight: 2,
                strokeOpacity: 0.2,
                fillOpacity: 0.4,
                strokeStyle: 'dashed',
                strokeDasharray: [3, 3], 
                fillColor: '#1791fc',
                zIndex: 50,
            })
        circle.setMap(map)
        },

        // 清除中心点
        clearMarker(){
        if (this.marker) {
          this.marker.setMap(null)
          this.marker = null
        }
        },

        // 定位城市
        setCity:function(){
            var _this = this
            let getLocationMap = [];
            var geocoder
             geocoder = new AMap.Geocoder({
            });
             geocoder.getLocation(_this.formAll.city+_this.formAll.area, function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
             map.setCenter([result.geocodes[0].location.lng,result.geocodes[0].location.lat]); 
            }
        })
        }

    },
    mounted(){
        this.loadMap();
    }
}
</script>


<style lang="scss">
.AreaDividemapBox{
    position: relative;
#AreaDividemap{
    width: 100%;
    height: 500px;
}
#clear{
   position: absolute;
   right:10px;
   top:10px;
   z-index: 2;
   border: 2px solid red;
   color: red;
   font-weight: bold;
   padding: 0px 5px;
   cursor: pointer;
   line-height:30px;
}
#tipinput{
   position: relative;
   z-index:1
}

}
</style>
