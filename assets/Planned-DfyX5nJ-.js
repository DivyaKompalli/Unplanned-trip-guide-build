import{_ as b,c as a,a as t,e as c,f as v,j as f,t as n,F as h,m as x,T as R,w as D,b as d,v as m,n as u,o as l}from"./index-DOS9Ll_5.js";const y={data(){return{tripDetails:{destination:"",duration:7,travelers:1,budgetLevel:"medium"},estimateGenerated:!1,budgetRanges:{total:{min:0,max:0},flights:{min:0,max:0},accommodation:{min:0,max:0},foodActivities:{min:0,max:0}},recommendedHotels:[]}},methods:{generateEstimate(){const e={low:{base:.7,range:.2},medium:{base:1,range:.3},high:{base:1.5,range:.4}}[this.tripDetails.budgetLevel],r=this.tripDetails.duration,g=this.tripDetails.travelers,s=400;this.budgetRanges.flights={min:Math.round(s*e.base),max:Math.round(s*(e.base+e.range))};const o=100*r;this.budgetRanges.accommodation={min:Math.round(o*e.base),max:Math.round(o*(e.base+e.range))};const i=50*r*g;this.budgetRanges.foodActivities={min:Math.round(i*e.base),max:Math.round(i*(e.base+e.range))},this.budgetRanges.total={min:this.budgetRanges.flights.min+this.budgetRanges.accommodation.min+this.budgetRanges.foodActivities.min,max:this.budgetRanges.flights.max+this.budgetRanges.accommodation.max+this.budgetRanges.foodActivities.max},this.setRecommendedHotels(),this.estimateGenerated=!0},setRecommendedHotels(){this.tripDetails.budgetLevel==="low"?this.recommendedHotels=[{name:"Urban Loft Apartments",price:120},{name:"Budget Inn",price:80},{name:"Traveler's Hostel",price:60}]:this.tripDetails.budgetLevel==="medium"?this.recommendedHotels=[{name:"Grand Plaza Hotel",price:180},{name:"Riverside Suites",price:220},{name:"City Center Hotel",price:160}]:this.recommendedHotels=[{name:"Seaside Resort",price:350},{name:"Luxury Grand Hotel",price:450},{name:"Executive Suites",price:380}]}}},L={class:"planned-trip"},w={class:"trip-container"},H={key:0,class:"trip-details-section"},B={class:"budget-summary"},k={class:"budget-breakdown"},A={class:"budget-item"},C={class:"price-range"},M={class:"budget-item"},T={class:"price-range"},_={class:"budget-item"},E={class:"price-range"},F={class:"recommended-hotels"},G={class:"hotel-list"},V={class:"hotel-info"},S={class:"hotel-details"},N={class:"price"},P={class:"trip-form-section"},U={class:"trip-form-container"},q={class:"form-group floating"},j={class:"form-row"},z={class:"form-group floating"},I={class:"form-group floating"},Y={class:"form-group"},J={class:"budget-options"};function K(p,e,r,g,s,o){return l(),a("div",L,[t("div",w,[c(R,{name:"fade-slide"},{default:v(()=>[s.estimateGenerated?(l(),a("div",H,[e[12]||(e[12]=t("h1",null,"Your Planned Trip Details",-1)),t("div",B,[t("h2",null," Estimated Total Budget: $"+n(s.budgetRanges.total.min)+" - $"+n(s.budgetRanges.total.max),1),t("div",k,[t("div",A,[e[7]||(e[7]=t("span",{class:"category"},"Flights:",-1)),t("span",C,"$"+n(s.budgetRanges.flights.min)+"-$"+n(s.budgetRanges.flights.max),1)]),t("div",M,[e[8]||(e[8]=t("span",{class:"category"},"Accommodation:",-1)),t("span",T,"$"+n(s.budgetRanges.accommodation.min)+"-$"+n(s.budgetRanges.accommodation.max),1)]),t("div",_,[e[9]||(e[9]=t("span",{class:"category"},"Food & Activities:",-1)),t("span",E,"$"+n(s.budgetRanges.foodActivities.min)+"-$"+n(s.budgetRanges.foodActivities.max),1)])])]),t("div",F,[e[11]||(e[11]=t("h2",null,"Recommended Hotels",-1)),t("div",G,[(l(!0),a(h,null,x(s.recommendedHotels,i=>(l(),a("div",{class:"hotel-card",key:i.name},[t("div",V,[t("h3",null,n(i.name),1),t("div",S,[t("span",N,"$"+n(i.price)+"/night",1),e[10]||(e[10]=t("button",{class:"book-now"},"Book Now",-1))])])]))),128))])])])):f("",!0)]),_:1}),t("div",P,[e[24]||(e[24]=t("h1",null,"✈️ Plan Your Trip",-1)),e[25]||(e[25]=t("p",{class:"subtitle"}," Craft your perfect journey with our budget estimator ",-1)),t("div",U,[t("form",{onSubmit:e[6]||(e[6]=D((...i)=>o.generateEstimate&&o.generateEstimate(...i),["prevent"])),class:"trip-form"},[t("div",q,[d(t("input",{id:"destination","onUpdate:modelValue":e[0]||(e[0]=i=>s.tripDetails.destination=i),type:"text",placeholder:" ",required:"",class:"form-input"},null,512),[[m,s.tripDetails.destination]]),e[13]||(e[13]=t("label",{for:"destination"},"Destination",-1)),e[14]||(e[14]=t("span",{class:"icon"},"📍",-1))]),t("div",j,[t("div",z,[d(t("input",{id:"duration","onUpdate:modelValue":e[1]||(e[1]=i=>s.tripDetails.duration=i),type:"number",min:"1",placeholder:" ",required:"",class:"form-input"},null,512),[[m,s.tripDetails.duration]]),e[15]||(e[15]=t("label",{for:"duration"},"Duration (days)",-1)),e[16]||(e[16]=t("span",{class:"icon"},"📅",-1))]),t("div",I,[d(t("input",{id:"travelers","onUpdate:modelValue":e[2]||(e[2]=i=>s.tripDetails.travelers=i),type:"number",min:"1",placeholder:" ",required:"",class:"form-input"},null,512),[[m,s.tripDetails.travelers]]),e[17]||(e[17]=t("label",{for:"travelers"},"Travelers",-1)),e[18]||(e[18]=t("span",{class:"icon"},"👥",-1))])]),t("div",Y,[e[22]||(e[22]=t("label",{class:"budget-label"},"Budget Level",-1)),t("div",J,[t("button",{type:"button",class:u({active:s.tripDetails.budgetLevel==="low"}),onClick:e[3]||(e[3]=i=>s.tripDetails.budgetLevel="low")},e[19]||(e[19]=[t("span",{class:"price-indicator"},"$",-1),t("span",null,"Budget",-1)]),2),t("button",{type:"button",class:u({active:s.tripDetails.budgetLevel==="medium"}),onClick:e[4]||(e[4]=i=>s.tripDetails.budgetLevel="medium")},e[20]||(e[20]=[t("span",{class:"price-indicator"},"$$",-1),t("span",null,"Mid-range",-1)]),2),t("button",{type:"button",class:u({active:s.tripDetails.budgetLevel==="high"}),onClick:e[5]||(e[5]=i=>s.tripDetails.budgetLevel="high")},e[21]||(e[21]=[t("span",{class:"price-indicator"},"$$$",-1),t("span",null,"Luxury",-1)]),2)])]),e[23]||(e[23]=t("button",{type:"submit",class:"generate-button"},[t("span",null,"Generate Estimate"),t("span",{class:"icon"},"🧮")],-1))],32)])])])])}const Q=b(y,[["render",K],["__scopeId","data-v-47851e3d"]]);export{Q as default};
