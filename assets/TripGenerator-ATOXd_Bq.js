import{_ as f,c as d,a as e,t as o,F as p,m as v,w as b,o as u,j as y,p as T,b as c,q as m,u as _,r as C}from"./index-DOS9Ll_5.js";const P={props:{trip:{type:Object,required:!0}},methods:{closeModal(){this.$emit("close")},saveTrip(){this.$emit("save",this.trip),this.closeModal()},formatType(i){return{beach:"🏖️ Beach",mountain:"⛰️ Mountain",city:"🏙️ City",countryside:"🌄 Countryside",historical:"🏛️ Historical"}[i]||i},formatClimate(i){return{warm:"☀️ Warm Climate",temperate:"🌤️ Temperate Climate",cold:"❄️ Cold Climate"}[i]||i},formatBudget(i){return{low:"💰 Budget Friendly",medium:"💵 Mid-range",high:"💎 Luxury"}[i]||i}}},B={class:"modal-content"},M={class:"modal-header"},k={class:"trip-meta"},w={class:"trip-type"},F={class:"trip-climate"},S={class:"trip-budget"},V={class:"estimated-budget"},x=["src","alt"],A={class:"modal-body"},D={class:"details-section"},L={class:"details-section"},R={class:"details-section"},H={class:"details-section"},I={class:"tips-list"},E={class:"details-section"},U={class:"tips-list"},W={class:"details-section"},G={class:"tips-list"},N={class:"action-buttons"};function j(i,t,l,g,n,r){return u(),d("div",{class:"modal-overlay",onClick:t[3]||(t[3]=b((...a)=>r.closeModal&&r.closeModal(...a),["self"]))},[e("div",B,[e("button",{class:"close-button",onClick:t[0]||(t[0]=(...a)=>r.closeModal&&r.closeModal(...a))},"×"),e("div",M,[e("h2",null,o(l.trip.name)+", "+o(l.trip.country),1),e("div",k,[e("span",w,o(r.formatType(l.trip.type)),1),e("span",F,o(r.formatClimate(l.trip.climate)),1),e("span",S,o(r.formatBudget(l.trip.budget)),1)]),e("div",V," Estimated Total Budget: "+o(l.trip.estimatedBudget),1)]),e("img",{src:l.trip.image,alt:l.trip.name,class:"modal-image"},null,8,x),e("div",A,[t[10]||(t[10]=e("h3",null,"About This Destination",-1)),e("p",null,o(l.trip.specialty),1),e("div",D,[t[4]||(t[4]=e("h3",null,"Historical Significance",-1)),e("p",null,o(l.trip.historicalSignificance),1)]),e("div",L,[t[5]||(t[5]=e("h3",null,"Famous For",-1)),e("p",null,o(l.trip.famousFor),1)]),e("div",R,[t[6]||(t[6]=e("h3",null,"Must Try",-1)),e("p",null,o(l.trip.mustTry),1)]),e("div",H,[t[7]||(t[7]=e("h3",null,"Nearby Places to Visit",-1)),e("ul",I,[(u(!0),d(p,null,v(l.trip.nearbyPlaces,(a,s)=>(u(),d("li",{key:s},o(a),1))),128))])]),e("div",E,[t[8]||(t[8]=e("h3",null,"Recommended Hostels",-1)),e("ul",U,[(u(!0),d(p,null,v(l.trip.hostels,(a,s)=>(u(),d("li",{key:"hostel"+s},o(a),1))),128))])]),e("div",W,[t[9]||(t[9]=e("h3",null,"Top Restaurants",-1)),e("ul",G,[(u(!0),d(p,null,v(l.trip.restaurants,(a,s)=>(u(),d("li",{key:"restaurant"+s},o(a),1))),128))])]),e("div",N,[e("button",{class:"save-button",onClick:t[1]||(t[1]=(...a)=>r.saveTrip&&r.saveTrip(...a))},"Save This Trip"),e("button",{class:"close-modal-button",onClick:t[2]||(t[2]=(...a)=>r.closeModal&&r.closeModal(...a))},"Close")])])])])}const q=f(P,[["render",j],["__scopeId","data-v-b75ae1fa"]]),Y={components:{TripModal:q},data(){return{userPreferences:{country:"",budget:"",type:"",climate:"",duration:""},countries:[{name:"Italy",value:"italy"},{name:"Japan",value:"japan"},{name:"Thailand",value:"thailand"},{name:"France",value:"france"},{name:"USA",value:"usa"},{name:"India",value:"india"},{name:"Spain",value:"spain"},{name:"Greece",value:"greece"}],trips:[],selectedTrip:null,destinations:[{name:"Rome, Italy",specialty:"Eternal city with ancient ruins and vibrant culture",type:"historical",climate:"temperate",budget:"medium",duration:"medium",country:"Italy",image:"https://source.unsplash.com/random/800x600/?rome",estimatedBudget:"$800-$1200",historicalSignificance:"Founded in 753 BC, center of the Roman Empire",famousFor:"Colosseum, Vatican City, Roman Forum, Trevi Fountain",mustTry:"Authentic pasta carbonara, gelato, espresso",nearbyPlaces:["Florence","Pompeii","Amalfi Coast"],hostels:["The Yellow Hostel","Alessandro Downtown Hostel","Generator Rome"],restaurants:["Roscioli","Tonnarello","La Pergola (Michelin-starred)"]}],savedTrips:[]}},methods:{generateTrip(){this.trips=this.destinations.filter(i=>(!this.userPreferences.country||i.country.toLowerCase()===this.userPreferences.country.toLowerCase())&&(!this.userPreferences.budget||i.budget===this.userPreferences.budget)&&(!this.userPreferences.type||i.type===this.userPreferences.type)&&(!this.userPreferences.climate||i.climate===this.userPreferences.climate)&&(!this.userPreferences.duration||i.duration===this.userPreferences.duration)),this.trips.length===0&&(this.trips=[...this.destinations])},formatBudget(i){return{low:"$ Budget",medium:"$$ Mid-range",high:"$$$ Luxury"}[i]||i},formatClimate(i){return{warm:"☀️ Warm",temperate:"🌤 Temperate",cold:"❄️ Cold"}[i]||i},formatType(i){return{beach:"🏖️ Beach",mountain:"⛰️ Mountain",city:"🏙️ City",countryside:"🌄 Countryside",historical:"🏛️ Historical"}[i]||i},viewDetails(i){this.selectedTrip=i},saveTrip(i){this.savedTrips.push(i),alert(`${i.name} has been saved to your trips!`)}}},J={class:"trip-generator"},O={class:"preference-form"},z={class:"filter-grid"},K={class:"filter-group"},Q=["value"],X={class:"filter-group"},Z={class:"filter-group"},$={class:"filter-group"},ee={class:"filter-group"},te={key:0,class:"trip-results"},se={class:"trip-grid"},ie={class:"trip-image-container"},oe=["src","alt"],re={class:"trip-badge"},ne={class:"country-badge"},le={class:"trip-content"},ae={class:"trip-description"},ue={class:"trip-meta"},de={class:"trip-type"},ce={class:"trip-climate"},me={class:"estimated-budget"},pe=["onClick"];function ve(i,t,l,g,n,r){const a=C("TripModal");return u(),d("div",J,[t[19]||(t[19]=e("div",{class:"hero-section"},[e("h1",null,"Where to next?"),e("p",null,"Let us help you plan your perfect getaway")],-1)),e("div",O,[t[17]||(t[17]=e("h2",null,"Your Travel Preferences",-1)),e("div",z,[e("div",K,[t[8]||(t[8]=e("label",{for:"country"},"Preferred Country",-1)),c(e("select",{id:"country","onUpdate:modelValue":t[0]||(t[0]=s=>n.userPreferences.country=s)},[t[7]||(t[7]=e("option",{value:""},"Any Country",-1)),(u(!0),d(p,null,v(n.countries,s=>(u(),d("option",{value:s.value,key:s.value},o(s.name),9,Q))),128))],512),[[m,n.userPreferences.country]])]),e("div",X,[t[10]||(t[10]=e("label",{for:"budget"},"Budget",-1)),c(e("select",{id:"budget","onUpdate:modelValue":t[1]||(t[1]=s=>n.userPreferences.budget=s)},t[9]||(t[9]=[e("option",{value:""},"Any Budget",-1),e("option",{value:"low"},"Budget ($)",-1),e("option",{value:"medium"},"Mid-range ($$)",-1),e("option",{value:"high"},"Luxury ($$$)",-1)]),512),[[m,n.userPreferences.budget]])]),e("div",Z,[t[12]||(t[12]=e("label",{for:"type"},"Destination Type",-1)),c(e("select",{id:"type","onUpdate:modelValue":t[2]||(t[2]=s=>n.userPreferences.type=s)},t[11]||(t[11]=[_('<option value="" data-v-a5e9d127>Any Type</option><option value="beach" data-v-a5e9d127>Beach</option><option value="mountain" data-v-a5e9d127>Mountain</option><option value="city" data-v-a5e9d127>City</option><option value="countryside" data-v-a5e9d127>Countryside</option><option value="historical" data-v-a5e9d127>Historical</option>',6)]),512),[[m,n.userPreferences.type]])]),e("div",$,[t[14]||(t[14]=e("label",{for:"climate"},"Preferred Climate",-1)),c(e("select",{id:"climate","onUpdate:modelValue":t[3]||(t[3]=s=>n.userPreferences.climate=s)},t[13]||(t[13]=[e("option",{value:""},"Any Climate",-1),e("option",{value:"warm"},"Warm",-1),e("option",{value:"temperate"},"Temperate",-1),e("option",{value:"cold"},"Cold",-1)]),512),[[m,n.userPreferences.climate]])]),e("div",ee,[t[16]||(t[16]=e("label",{for:"duration"},"Trip Duration",-1)),c(e("select",{id:"duration","onUpdate:modelValue":t[4]||(t[4]=s=>n.userPreferences.duration=s)},t[15]||(t[15]=[e("option",{value:""},"Any Duration",-1),e("option",{value:"short"},"Weekend (2-3 days)",-1),e("option",{value:"medium"},"Week (5-7 days)",-1),e("option",{value:"long"},"Extended (10+ days)",-1)]),512),[[m,n.userPreferences.duration]])])]),e("button",{onClick:t[5]||(t[5]=(...s)=>r.generateTrip&&r.generateTrip(...s)),class:"generate-button"}," Generate Trip Ideas ")]),n.trips.length>0?(u(),d("div",te,[t[18]||(t[18]=e("h2",null,"Recommended Trips",-1)),e("div",se,[(u(!0),d(p,null,v(n.trips,(s,h)=>(u(),d("div",{key:h,class:"trip-card"},[e("div",ie,[e("img",{src:s.image,alt:s.name,class:"trip-image"},null,8,oe),e("div",re,o(r.formatBudget(s.budget)),1),e("div",ne,o(s.country),1)]),e("div",le,[e("h3",null,o(s.name),1),e("p",ae,o(s.specialty),1),e("div",ue,[e("span",de,o(r.formatType(s.type)),1),e("span",ce,o(r.formatClimate(s.climate)),1)]),e("div",me," Estimated Budget: "+o(s.estimatedBudget),1),e("button",{onClick:ye=>r.viewDetails(s),class:"details-button"}," View Details ",8,pe)])]))),128))])])):y("",!0),n.selectedTrip?(u(),T(a,{key:1,trip:n.selectedTrip,onClose:t[6]||(t[6]=s=>n.selectedTrip=null),onSave:r.saveTrip},null,8,["trip","onSave"])):y("",!0)])}const ge=f(Y,[["render",ve],["__scopeId","data-v-a5e9d127"]]);export{ge as default};
