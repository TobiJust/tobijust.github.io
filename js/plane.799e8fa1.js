(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plane"],{"0160":function(e,t,a){},"1f09":function(e,t,a){},aa49:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"plane"},[a("v-dialog",{attrs:{"max-width":"900","overlay-opacity":"0.99"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("div",[a("v-carousel",{attrs:{"hide-delimiters":""},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},e._l(e.plane.gallery,(function(e,t){return a("v-carousel-item",{key:t,attrs:{src:e}})})),1),a("div",{staticClass:"plane__dialog__close",on:{click:function(t){e.dialog=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1)]),a("div",{staticClass:"plane__container"},[a("v-skeleton-loader",{attrs:{loading:!e.plane.coverImage,transition:"scale-transition",type:"image"}},[a("div",{staticStyle:{position:"relative"}},[a("img",{staticClass:"plane__image",attrs:{src:e.plane.coverImage,alt:""}}),e.prevPlane.notAvailable?e._e():a("v-btn",{staticClass:"plane__prev",attrs:{"x-small":"",text:"",color:"white"},on:{click:function(t){return e.$router.push({name:"plane",params:{id:e.prevPlane.name}})}}},[a("v-icon",{attrs:{left:""}},[e._v("mdi-chevron-left")]),e._v(" "+e._s(e.prevPlane.name)+" ")],1),a("h1",{staticClass:"plane__headline"},[e._v(e._s(e.plane.name))]),e.nextPlane.notAvailable?e._e():a("v-btn",{staticClass:"plane__next",attrs:{"x-small":"",text:"",color:"white"},on:{click:function(t){return e.$router.push({name:"plane",params:{id:e.nextPlane.name}})}}},[e._v(" "+e._s(e.nextPlane.name)+" "),a("v-icon",{attrs:{right:""}},[e._v("mdi-chevron-right")])],1),a("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#element",expression:"'#element'"}],staticClass:"element__scroll"},[a("div",[a("v-icon",{attrs:{"x-large":"",color:"white"}},[e._v("mdi-chevron-down")])],1)])],1)]),a("h2",{staticClass:"headline",attrs:{id:"element"}},[e._v(e._s(e.plane.tagline))]),a("hr",{staticClass:"plane__divider"}),a("p",{staticClass:"plane__content"},[e._v(e._s(e.plane.content))]),e.plane.tourUrl?a("a",{staticClass:"plane__link",attrs:{href:e.plane.tourUrl,target:"_blank",rel:"noopener noreferrer"}},[e._v(" Virtual "),a("v-icon",{attrs:{medium:""}},[e._v("mdi-rotate-3d")]),e._v(" Tour ")],1):e._e(),e.plane.floorplan?a("div",{staticClass:"plane__floorplan"},[a("img",{staticClass:"plane__floorplan__image",attrs:{src:e.dayNight?e.plane.floorplan_night:e.plane.floorplan,alt:""}}),e.plane.floorplan_night?a("div",{staticClass:"plane__floorplan__switch"},[a("v-icon",{attrs:{color:e.dayNight?"#ddd":""}},[e._v("mdi-white-balance-sunny")]),a("label",{staticClass:"switch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dayNight,expression:"dayNight"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.dayNight)?e._i(e.dayNight,null)>-1:e.dayNight},on:{change:function(t){var a=e.dayNight,i=t.target,n=!!i.checked;if(Array.isArray(a)){var s=null,l=e._i(a,s);i.checked?l<0&&(e.dayNight=a.concat([s])):l>-1&&(e.dayNight=a.slice(0,l).concat(a.slice(l+1)))}else e.dayNight=n}}}),a("span",{staticClass:"slider round"})]),a("v-icon",{attrs:{color:e.dayNight?"":"#ddd"}},[e._v("mdi-power-sleep")])],1):e._e()]):e._e(),a("h2",{staticClass:"headline"},[e._v("Technical information")]),a("hr",{staticClass:"plane__divider"}),a("v-container",[a("v-row",{staticStyle:{position:"relative"},attrs:{dense:""}},[a("v-col",{attrs:{cols:e.$vuetify.breakpoint.smAndDown?12:6}},[a("div",{staticClass:"plane__wrapper"},[a("v-timeline",{attrs:{dense:""}},e._l(e.facts,(function(t,i){return a("v-timeline-item",{key:i,attrs:{icon:t.icon,color:t.color,"fill-dot":""}},[a("v-card",{attrs:{color:t.color,dark:""}},[a("v-card-title",{staticClass:"plane__wrapper__title"},[e._v(" "+e._s(e.plane.facts[t.label]||"")+" ")])],1)],1)})),1)],1)]),a("v-col",{attrs:{cols:e.$vuetify.breakpoint.smAndDown?12:6}},[a("div",{staticClass:"plane__wrapper plane__wrapper--reverse"},[a("v-timeline",{attrs:{dense:"",reverse:""}},e._l(e.specs,(function(t,i){return a("v-timeline-item",{key:i,attrs:{icon:t.icon,color:t.color,"fill-dot":""}},[a("v-card",{attrs:{color:t.color,dark:""}},[a("v-card-title",{staticClass:"plane__wrapper__title"},[e._v(" "+e._s(e.plane.specs[t.label])+" ")])],1)],1)})),1)],1)])],1)],1),e.plane.rangeMap?a("div",{staticClass:"plane__range"},[a("h2",{staticClass:"headline"},[e._v("Range map")]),a("img",{staticClass:"plane__range__image",attrs:{src:e.plane.rangeMap,alt:""}})]):e._e(),e.plane.factSheet?a("div",{staticClass:"plane__download__wrapper"},[a("h2",{staticClass:"headline"},[e._v("Technical Specification Download")]),a("span",{staticClass:"plane__download"},[a("a",{attrs:{href:e.plane.factSheet,target:"_blank",rel:"noopener noreferrer"}},[e._v(" Fact Sheet "),a("v-icon",[e._v("mdi-download")])],1)])]):e._e(),e.plane.gallery&&e.plane.gallery.length?a("div",{staticClass:"plane__gallery"},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-carousel",{attrs:{height:"400",cycle:"","hide-delimiters":"","show-arrows-on-hover":""}},e._l(e.plane.gallery,(function(t,i){return a("v-carousel-item",{key:i,staticStyle:{cursor:"pointer"},attrs:{src:t},on:{click:function(t){return e.openDialog(i)}}})})),1)],1)],1)],1)],1):e._e()],1)],1)},n=[],s=(a("c740"),a("b0c0"),a("b64b"),a("07ac"),a("5530")),l=a("2f62"),r=a("f8a3"),o={name:"Plane",props:{id:String},data:function(){return{coverImage:"",plane:r["a"][this.id],dayNight:!1,dialog:!1,model:-1,facts:[{color:"grey darken-1",icon:"mdi-car-seat",label:"passengers"},{color:"grey darken-2",icon:"mdi-bag-checked",label:"luggage"},{color:"grey darken-3",icon:"mdi-wrench",label:"manufactured"},{color:"grey darken-2",icon:"mdi-speedometer",label:"speed"}],specs:[{color:"grey darken-1",icon:"mdi-arrow-expand-vertical",label:"height"},{color:"grey darken-2",icon:"mdi-arrow-expand-horizontal",label:"width"},{color:"grey darken-3",icon:"mdi-arrow-left-right",label:"length"},{color:"grey darken-2",icon:"mdi-arrow-decision",label:"range"}]}},mounted:function(){},computed:Object(s["a"])(Object(s["a"])({},Object(l["b"])({user:"user"})),{},{nextPlane:function(){var e=this,t=Object.values(r["a"]).findIndex((function(t){return t.name===e.id})),a=t+1>=Object.keys(r["a"]).length?0:t+1;return Object.values(r["a"])[a]},prevPlane:function(){var e=this,t=Object.values(r["a"]).findIndex((function(t){return t.name===e.id})),a=t-1<0?Object.keys(r["a"]).length-1:t-1;return Object.values(r["a"])[a]}}),methods:{openDialog:function(e){this.dialog=!0,this.model=e}}},c=o,d=(a("d911"),a("2877")),h=a("6544"),p=a.n(h),v=a("8336"),m=a("b0af"),u=a("99d9"),g=a("5e66"),_=a("3e35"),f=a("62ad"),b=a("a523"),y=a("169a"),k=a("132d"),C=a("0fd9b"),w=(a("a630"),a("c975"),a("d81d"),a("ac1f"),a("3ca3"),a("5319"),a("1276"),a("3835")),x=(a("1f09"),a("c995")),S=a("24b2"),O=a("7560"),B=a("58df"),j=a("80d2"),$=Object(B["a"])(x["a"],S["a"],O["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(s["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(s["a"])(Object(s["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(s["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(e,t){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(e," v-skeleton-loader__bone")},t)},genBones:function(e){var t=this,a=e.split("@"),i=Object(w["a"])(a,2),n=i[0],s=i[1],l=function(){return t.genStructure(n)};return Array.from({length:s}).map(l)},genStructure:function(e){var t=[];e=e||this.type||"";var a=this.rootTypes[e]||"";if(e===a);else{if(e.indexOf(",")>-1)return this.mapBones(e);if(e.indexOf("@")>-1)return this.genBones(e);a.indexOf(",")>-1?t=this.mapBones(a):a.indexOf("@")>-1?t=this.genBones(a):a&&t.push(this.genStructure(a))}return[this.genBone(e,t)]},genSkeleton:function(){var e=[];return this.isLoading?e.push(this.genStructure()):e.push(Object(j["l"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},e):e},mapBones:function(e){return e.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(e){this.resetStyles(e),this.isLoading&&(e._initialStyle={display:e.style.display,transition:e.style.transition},e.style.setProperty("transition","none","important"))},onBeforeLeave:function(e){e.style.setProperty("display","none","important")},resetStyles:function(e){e._initialStyle&&(e.style.display=e._initialStyle.display||"",e.style.transition=e._initialStyle.transition,delete e._initialStyle)}},render:function(e){return e("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}}),D=(a("0160"),Object(B["a"])(O["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object(s["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(e){return e("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}})),N=(a("c96a"),a("9d26")),V=a("a9ad"),I=Object(B["a"])(V["a"],O["a"]),E=I.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(N["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var e=this.setBackgroundColor(this.color);return this.$createElement("div",Object(s["a"])({staticClass:"v-timeline-item__inner-dot"},e),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var e=[];return this.hideDot||e.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},e)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(e){var t=[this.genBody(),this.genDivider()];return this.$slots.opposite&&t.push(this.genOpposite()),e("div",{staticClass:"v-timeline-item",class:Object(s["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},t)}}),P=Object(d["a"])(c,i,n,!1,null,"97f142a6",null);t["default"]=P.exports;p()(P,{VBtn:v["a"],VCard:m["a"],VCardTitle:u["c"],VCarousel:g["a"],VCarouselItem:_["a"],VCol:f["a"],VContainer:b["a"],VDialog:y["a"],VIcon:k["a"],VRow:C["a"],VSkeletonLoader:$,VTimeline:D,VTimelineItem:E})},b682:function(e,t,a){},d911:function(e,t,a){"use strict";var i=a("b682"),n=a.n(i);n.a}}]);
//# sourceMappingURL=plane.799e8fa1.js.map