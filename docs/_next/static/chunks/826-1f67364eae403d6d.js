"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[826],{8826:function(e,t,n){n.r(t),n.d(t,{default:function(){return Fe}});var a=n(5893),r=n(7294);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?s(e):t}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h(e);if(t){var r=h(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u(this,n)}}var g=function e(t,n){o(this,e),l(this,"name",""),l(this,"description",""),l(this,"setEffects",new Set),l(this,"imageUrl",""),l(this,"owned",!0),l(this,"mustInclude",!1),this.name=t,this.description=n,this.imageUrl="https://oldschool.runescape.wiki/images/"+t.replaceAll(" ","_")+".png"},b=function e(t,n,a,r,i){var s=this;o(this,e),l(this,"name",""),l(this,"description",""),l(this,"counts",[]),l(this,"fragments",void 0),l(this,"imageUrl",""),l(this,"chosen",!1),l(this,"chosenCount",0),this.name=t,this.counts=n,this.description=a,this.fragments=r,this.fragments.forEach((function(e){e.setEffects.add(s)})),this.imageUrl="https://oldschool.runescape.wiki/images/"+t.replaceAll(" ","_")+"_detail.png"},y=new g("Alchemaniac","Players will receive 15/30/50% extra coins when casting High Level Alchemy on items."),w=new g("Arcane Conduit","Runes and magic weapon charges have a 40/60/90% chance to be saved."),v=new g("Armadylean Decree","When wielding four Armadylean items, enchanted bolt effects have a 25/50/100% increased chance to activate."),x=new g("Bandosian Might","When wielding four Bandosian items, the player's max melee hit is increased by 1/2/4 for every attack speed a weapon has."),k=new g("Barbarian Pest Wars","Reward currency earned for playing the following minigames are increased by x2/x3/x4:"),j=new g("Bottomless Quiver","Ranged ammunition and ranged weapon charges have a 40/60/90% chance to be saved, excluding Chinchompa (weapon)|chinchompas."),S=new g("Catch Of The Day","All types of Fishing activities have a 1 in 300/200/80 chance, per catch, to roll the rare drop table once."),C=new g("Certified Farmer","Farming yields have a 25/50/100% chance to be doubled, and are converted to bank notes upon harvest."),P=new g("Chef's Catch","Players have a 20/35/50% chance of cooking a raw fish upon catching them. Cooking experience is granted, even if players do not have the level required to cook them normally."),E=new g("Chinchonkers","Catching Chinchompa (disambiguation)|chinchompas grant 50/100/100% more Hunter experience. At level 3, players will receive two chinchompas per successful capture."),T=new g("Clued In","The drop rate of scroll boxes from NPCs are increased to 1 in 30/25/15."),O=new g("Deeper Pockets","Players have a 20/50/100% chance to receive double loot when pickpocketing NPCs. This stacks multiplicatively with rogue equipment."),A=new g("Dine & Dash","Players have a 10/20/50% chance to receive an extra piece of cooked food while cooking."),N=new g("Divine Restoration","Players will have their prayer points restored by one every 15/9/3.6 seconds."),F=new g("Dragon On A Bit","Players have a 10/20/40% chance to save the materials used whilst crafting dragonhide armour."),R=new g("Enchanted Jeweler","Each enchantment spell cast will enchant up to 5/10/25 pieces of jewellery, granting the full Magic experience."),M=new g("Golden Brick Road","When a mark of grace appears when training on a Rooftop Agility Course, 4,000/7,000/15,000 coins will appear alongside it."),I=new g("Grave Robber","The amount of hallowed marks received when looting Coffin (Hallowed Sepulchre)|coffins within the Hallowed Sepulchre is increased by 50/150/300%."),B=new g("Homewrecker","Players have a x2/x3/x4 chance of receiving bird nests when chopping trees, and are sent to the bank rather than falling to the ground."),_=new g("Hot On The Trail","Players have a 2/5/10% chance to obtain a scroll box whilst lighting logs via Firemaking."),D=new g("Imcando's Apprentice","Players have a 20/50/75% chance to craft an extra piece of gemmed jewellery, granting Crafting experience for the extra jewellery."),U=new g("Just Druid!","Players will receive 10/20/40% extra Herblore experience for each grimy herb cleaned."),W=new g("Larger Recharger","Players will have their special attack energy restored by 10% every 25/20/10 seconds."),H=new g("Livin' On A Prayer","The drain rate of activated prayers are reduced by 15/30/60%."),z=new g("Message In A Bottle","The chance of receiving clue geodes, clue nest|nests, and Clue bottle|bottles from skilling are increased by x3/x5/x10."),L=new g("Mixologist","Players will have a 25/50/100% chance to mix a 4-dose potion rather than a 3-dose potion, with a 20/50/100% chance to save the secondary ingredient."),q=new g("Molten Miner","If applicable, ores mined have a 20/50/100% chance to be smelted into bars. Smithing experience is granted, even if players do not have the level required to smelt them normally."),G=new g("Mother's Magic Fossils","The chance of receiving golden nuggets from the Motherlode Mine is increased by x2/x3/x4. The amount of pizazz points received from activities in the Mage Training Arena is increased by x2/x3/x4. The chance of receiving fossils from activities on Fossil Island is increased by x2/x3/x4."),J=new g("Plank Stretcher","Players will have a 10/20/50% chance to save their planks whilst training Construction."),K=new g("Praying Respects","Remains are automatically buried/scattered, granting 50/100/200% of the usual Prayer experience. League experience multipliers are applied."),Z=new g("Pro Tips","Players will receive 30/50/100% more bolt tips per gem whilst making them."),Q=new g("Profletchional","Fletching logs and stringing bows grant 30/50/100% more Fletching experience."),V=new g("Rock Solid","Iron rock|Iron, Sandstone rock|sandstone, and granite rocks have a 25/50/75% chance to not be depleted upon being mined."),Y=new g("Rogues' Chompy Farm","The chance of successfully cracking the wall safe at the end of the Rogues' Den maze is increased by 10/20/40%. Each chompy bird killed will count as 2/3/4 kills when checking chompy kill-count via the ogre bow. The amount of points earned from the Tithe Farm is increased by x2/x3/x4."),$=new g("Rooty Tooty 2x Runeys","Players have a 20/40/80% chance to receive an extra rune for each rune crafted."),X=new g("Rumple-Bow-String","The Spin Flax spell gives 10/15/27 bow strings instead of the usual 5."),ee=new g("Rune Escape","Players will no longer receive mind (lv-1), body (lv-2), elemental runes (lv-3) when crafting runes at the Ourania Altar."),te=new g("Saradominist Defence","When wielding four Saradominist items, the player's max hit is increased by 2/5/10 if they have taken damage in the last 3.6 seconds."),ne=new g("Seedy Business","Players have a 10/25/50% chance to save their seed upon planting it in a farming patch."),ae=new g("Slash & Burn","Players have a 20/35/50% chance of burning logs upon chopping them. Firemaking experience is granted, even if players do not have the level required to burn them normally."),re=new g("Slay 'n' Pay","Players will earn 10/20/50% more slayer reward points upon completing a slayer task."),ie=new g("Slay All Day","Players will heal 1/2/3 hitpoints for every monster killed as part of a slayer task."),se=new g("Smithing Double","Players have a 5/15/30% chance to smith an extra item when smithing items at an anvil, granting Smithing experience for the extra item. Extra items will drop to the floor if players have no inventory space."),oe=new g("Smooth Criminal","The chance to successfully pickpocket NPCs is increased by 15/25/50%. At level 2, players will no longer take damage when Stun (status)|stunned by a failed pickpocket attempt."),ce=new g("Special Discount","Special attacks whose energy cost is greater than 50/40/25% will cost 50/40/25% energy instead."),le=new g("Superior Tracking","Superior slayer monsters have a 1 in 150/100/30 chance of spawning during a slayer task for eligible slayer monsters."),he=new g("Tactical Duelist","Melee weapon charges have a 20/40/80% chance to be saved."),ue=new g("Thrall Damage","The max hit of thralls are increased by x2/x3/x4. Damage is rounded up."),de=new g("Unholy Ranger","The player's accuracy for ranged weapons is increased by 30/60/100% when they have no prayer points remaining. Excludes the dwarf multicannon."),fe=new g("Unholy Warrior","The player's accuracy for melee weapons is increased by 12/20/30% when they have no prayer points remaining."),me=new g("Unholy Wizard","The player's accuracy for magic attacks is increased by 40/70/125% when they have no prayer points remaining."),pe=new g("Venomaster","The player's attacks have a chance to inflict poison that starts at 3/5/7 damage. Players will gain poison immunity at level 2, and venom immunity at level 3."),ge=new g("Zamorakian Sight","When wielding four Zamorakian items, the player's accuracy for magic attacks is increased by 50/125/250%."),be=new b("Absolute Unit",[2,3],"<b>[2]</b> Players take 30% less damage from monsters, with 50% of post-reduction damage reflected back to the attacker. <br/><br/> <b>[3]</b> Players take 50% less damage from monsters, with 100% of post-reduction damage reflected back to the attacker.",new Set([F,ee,le,v,N,he,te,pe])),ye=new b("The Alchemist",[3],"<b>[3]</b> When cooking food, making jugs of wine, cleaning grimy herbs, or mixing potions, all items in the player's inventory will be processed at once and reward the full amount of experience.",new Set([M,A,ie,C,B,L,U])),we=new b("Chain Magic",[2,3],"<b>[2]</b> Players have a 30% chance to perform another magic attack after a successful hit with magic. <br/><br/><b>[3]</b> Players have a 60% chance to perform another magic attack after a successful hit with magic.",new Set([ue,me,ge,G,O,$,_,D])),ve=new b("The Craftsman",[3],"<b>[3]</b> When smelting ores, smithing bars and cannonballs, crafting with leather, glass, uncut gems, pottery, battlestaves, spinning flax and wool, fletching logs and cutting bolt tips, all items in the player's inventory will be processed at once and reward the full amount of experience.",new Set([X,F,D,I,Q,Z])),xe=new b("Double Tap",[2,3],"<b>[2]</b> Players have a 30% chance to perform another ranged attack after a successful hit with ranged. <br/><br/> <b>[3]</b> Players have a 60% chance to perform another ranged attack after a successful hit with ranged.",new Set([se,X,Y,de,v,E,Z])),ke=new b("Drakan's Touch",[2,3],"<b>[2]</b> Successful hits have a 50% chance of restoring the player's hitpoints by 5% of the damage dealt. <br/><br/> <b>[3]</b> Successful hits have a 50% chance of restoring the player's hitpoints by 10% of the damage dealt.",new Set([me,ge,T,de,K,W,ce])),je=new b("Endless Knowledge",[3],"<b>[3]</b> Players receive an arcane grimoire from The Sage, which allows the ability to freely switch spellbooks anywhere.",new Set([w,ue,R,y,J,G])),Se=new b("Fast Metabolism",[2],"<b>[2]</b> Hitpoint regeneration is increased by x4.",new Set([I,V,x,W,_,pe])),Ce=new b("Greedy Gatherer",[2,3],"<b>[2]</b> Players will receive double the resources (with full experience) from Fishing, Woodcutting, Mining, and Farming. <br/><br/> <b>[3]</b> Players will receive triple the resources (with full experience) from Fishing, Woodcutting, Mining, and Farming.",new Set([z,q,V,C,P,ae,U])),Pe=new b("Knife's Edge",[2,3],"<b>[2]</b> Players will deal 0.3% additional damage for every hitpoint missing.<br/><br/> <b>[3]</b> Players will deal 0.6% additional damage for every hitpoint missing.",new Set([k,z,ie,j,H,K,fe,te])),Ee=new b("Last Recall",[4],"<b>[4]</b> Players receive a crystal of memories from The Sage, which allows them to teleport themselves back to the location where their most recent teleport occurred, with some caveats regarding its usage.",new Set([R,ee,T,re,le,E,B,Q,$,oe])),Te=new b("Personal Banker",[2,3],"<b>[2]</b> Resources obtained from Fishing, Woodcutting, Mining, and Farming have a 50% chance to be deposited directly to the player's bank. <br/><br/> <b>[3]</b> Resources obtained from Fishing, Woodcutting, Mining, and Farming are deposited directly to the player's bank.",new Set([se,y,q,ne,S,O])),Oe=new b("Trailblazer",[3],"<b>[3]</b> Players receive a portable waystone from The Sage, which can teleport to other waystones.",new Set([w,M,j,ne,P,oe,fe])),Ae=new b("Twin Strikes",[2,3],"<b>[2]</b> Players have a 30% chance to perform another melee attack after a successful hit with melee. <br/><br/> <b>[3]</b> Players have a 60% chance to perform another melee attack after a successful hit with melee.",new Set([k,re,N,H,he,x,ce])),Ne=new b("Unchained Talent",[3],"<b>[3]</b> All non-combat skills are permanently boosted by +8. This boost is not limited to unlocked skills.",new Set([J,Y,A,S,ae,L]));Ee.imageUrl="https://oldschool.runescape.wiki/images/Last_Recall_%28Shattered_Relics%29_detail.png";var Fe=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(h,e);var t,n,r,i=p(h);function h(){var e;return o(this,h),l(s(e=i.apply(this,arguments)),"state",{numSlots:7,fragments:[y,w,v,x,k,j,S,C,P,E,T,O,A,N,F,R,M,I,B,_,D,U,W,H,z,L,q,G,J,K,Z,Q,V,Y,$,X,ee,te,ne,ae,re,ie,se,oe,ce,le,he,ue,de,fe,me,pe,ge],setEffects:[be,ye,we,ve,xe,ke,je,Se,Ce,Pe,Ee,Te,Oe,Ae,Ne],possibleBuild:null,buildPrompt:"Please select some set effects."}),l(s(e),"fragmentMustIncludeChanged",(function(t){e.setState({fragments:f(e.state.fragments.slice(0,t)).concat([Object.assign(e.state.fragments[t],{mustInclude:!e.state.fragments[t].mustInclude})],f(e.state.fragments.slice(t+1)))},e.computeCombination)})),l(s(e),"onFragmentInBuildClicked",(function(t){var n=e.state.fragments.findIndex((function(e){return e.name==t.name}));e.fragmentOwnedChanged(n)})),l(s(e),"fragmentOwnedChanged",(function(t){e.setState({fragments:f(e.state.fragments.slice(0,t)).concat([Object.assign(e.state.fragments[t],{owned:!e.state.fragments[t].owned})],f(e.state.fragments.slice(t+1)))},e.computeCombination)})),l(s(e),"clickedSetCount",(function(t,n){var a=e.state.setEffects[t],r=a.chosenCount!=n||!a.chosen,i=f(e.state.setEffects.slice(0,t)).concat([Object.assign(e.state.setEffects[t],{chosen:r,chosenCount:n})],f(e.state.setEffects.slice(t+1)));e.setState({setEffects:i},e.computeCombination)})),l(s(e),"clearAllSetsClicked",(function(){e.state.setEffects.forEach((function(e){return e.chosen=!1})),e.setState({setEffects:e.state.setEffects,buildPrompt:"Please select some set effects.",possibleBuild:null})})),l(s(e),"clearAllFragmentsClicked",(function(){e.state.fragments.forEach((function(e){e.owned=!0,e.mustInclude=!1})),e.setState({fragments:e.state.fragments},e.computeCombination)})),l(s(e),"setClicked",(function(t){var n=e.state.setEffects[t];if(n.counts.length>1){var a,r;n.chosen?n.chosenCount==n.counts[0]?(a=n.counts[1],r=!0):r=!1:(a=n.counts[0],r=!0);var i=f(e.state.setEffects.slice(0,t)).concat([Object.assign(e.state.setEffects[t],{chosen:r,chosenCount:a})],f(e.state.setEffects.slice(t+1)));e.setState({setEffects:i},e.computeCombination)}else{var s=f(e.state.setEffects.slice(0,t)).concat([Object.assign(e.state.setEffects[t],{chosen:!n.chosen,chosenCount:n.counts[0]})],f(e.state.setEffects.slice(t+1)));e.setState({setEffects:s},e.computeCombination)}})),l(s(e),"onTierChanged",(function(t){e.setState({numSlots:t.target.value},e.computeCombination)})),e}return t=h,(n=[{key:"computeCombination",value:function(){var e=new Set,t=this.state.setEffects.filter((function(e){return e.chosen}));if(t.length>5)this.setState({buildPrompt:"Cannot have more than 5 sets.",possibleBuild:null});else{t.forEach((function(t){f(t.fragments).filter((function(e){return e.owned})).forEach((function(t){e.add(t)}))}));for(var n=new Set(this.state.fragments.filter((function(e){return e.mustInclude}))),a=new Set(f(e.values()).concat(f(n))),r=[],i=2;i<=this.state.numSlots;i++){var s=this;if((r=this.k_combinations(Array.from(a),i).filter((function(e){if(!s.worksForDesiredSetEffects(t,e))return!1;if(n.size>0){var a=!0,r=!1,i=void 0;try{for(var o,c=n[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var l=o.value;if(!new Set(e).has(l))return!1}}catch(h){r=!0,i=h}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}}return!0}))).length>0)break}r.length>0?this.setState({possibleBuild:r[0]}):this.setState({buildPrompt:"There are no possible combinations",possibleBuild:null})}}},{key:"worksForDesiredSetEffects",value:function(e,t){var n=!0,a=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var o=i.value,c=0,l=!0,h=!1,u=void 0;try{for(var d,f=t[Symbol.iterator]();!(l=(d=f.next()).done);l=!0){var m=d.value;m.owned&&m.setEffects.has(o)&&c++}}catch(p){h=!0,u=p}finally{try{l||null==f.return||f.return()}finally{if(h)throw u}}if(c<o.chosenCount)return!1}}catch(p){a=!0,r=p}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}return!0}},{key:"k_combinations",value:function(e,t){var n,a,r,i,s;if(t>e.length||t<=0)return[];if(t==e.length)return[e];if(1==t){for(r=[],n=0;n<e.length;n++)r.push([e[n]]);return r}for(r=[],n=0;n<e.length-t+1;n++)for(i=e.slice(n,n+1),s=this.k_combinations(e.slice(n+1),t-1),a=0;a<s.length;a++)r.push(i.concat(s[a]));return r}},{key:"render",value:function(){var e=this;return(0,a.jsxs)("div",{className:"component-app",children:[(0,a.jsx)("p",{children:"Choosing multiple sets may freeze for a few seconds. You cannot select more than 5 sets at a time."}),(0,a.jsxs)("div",{className:"pure-u-1 min-height-145",children:[(0,a.jsx)("h1",{children:"Possible Build"}),(0,a.jsx)("p",{children:"Click to exclude fragments. Re-enable them at the bottom of the page."}),(0,a.jsxs)("h3",{children:[(0,a.jsx)("label",{htmlFor:"multi-state",children:"Tier\xa0"}),(0,a.jsxs)("select",{id:"multi-state",className:"pure-input-1",value:this.state.numSlots,onChange:this.onTierChanged,children:[(0,a.jsx)("option",{children:"1"}),(0,a.jsx)("option",{children:"2"}),(0,a.jsx)("option",{children:"3"}),(0,a.jsx)("option",{children:"4"}),(0,a.jsx)("option",{children:"5"}),(0,a.jsx)("option",{children:"6"}),(0,a.jsx)("option",{children:"7"})]})]}),(0,a.jsx)("div",{className:"center-horizontal",id:"build",children:this.state.possibleBuild?this.state.possibleBuild.map((function(t,n){return(0,a.jsxs)("div",{className:"float-left mr-2 mb-10",onClick:function(){return e.onFragmentInBuildClicked(t)},children:[(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("img",{src:t.imageUrl,height:"50px"}),(0,a.jsx)("div",{className:"text",children:t.name})]}),(0,a.jsx)("div",{className:"text-center",children:Array.from(t.setEffects.values()).map((function(e){return(0,a.jsx)("img",{src:e.imageUrl,height:"30px",className:"set-mini"},e.name)}))})]},t.name)})):(0,a.jsx)("h3",{children:this.state.buildPrompt})})]}),(0,a.jsxs)("div",{className:"pure-u-1",children:[(0,a.jsx)("h1",{children:"Set Effects"}),(0,a.jsxs)("p",{children:["Click to enable/disable ",(0,a.jsx)("button",{onClick:this.clearAllSetsClicked,className:"button-xsmall pure-button mt--20",children:"Clear All"})]}),this.state.setEffects.map((function(t,n){return(0,a.jsxs)("div",{className:"set-effect pointer","data-tip":!0,"data-for":"set-info",onMouseOver:function(){return e.props.onHoveredSetChanged(t)},children:[(0,a.jsx)("img",{onClick:function(){return e.setClicked(n)},className:t.chosen?"":"grayscale",src:t.imageUrl,height:"60px"}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{onClick:function(){return e.setClicked(n)},children:t.name}),t.counts.map((function(r){return(0,a.jsx)("button",{onClick:function(){return e.clickedSetCount(n,r)},className:"pure-u-1-2 text-center pointer pure-button ".concat(t.chosen&&t.chosenCount==r?"chosen":""),children:r},r)}))]},t.name)}))]}),(0,a.jsxs)("div",{className:"pure-u-1 center-horizontal",children:[(0,a.jsx)("h1",{className:"float-left",children:"Fragments"}),(0,a.jsx)("p",{className:"float-left clear-button",children:(0,a.jsx)("button",{onClick:this.clearAllFragmentsClicked,className:"button-xsmall pure-button",children:"Reset All"})}),(0,a.jsx)("div",{className:"clear"}),(0,a.jsx)("div",{className:"float-left mr-5",children:(0,a.jsxs)("table",{className:"pure-table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"min-width-240",children:"Fragment"}),(0,a.jsx)("th",{children:"Owned"}),(0,a.jsx)("th",{children:"Must Include"})]})}),(0,a.jsx)("tbody",{children:this.state.fragments.slice(0,26).map((function(t,n){return(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{className:"center-vertical cursor-default","data-tip":!0,"data-for":"fragment-info",onMouseOver:function(){return e.props.onHoveredFragmentChanged(t)},children:[(0,a.jsx)("img",{src:t.imageUrl,height:"30px"}),(0,a.jsx)("span",{children:t.name})]}),(0,a.jsx)("td",{onClick:function(){return e.fragmentOwnedChanged(n)},className:"text-center",children:(0,a.jsx)("input",{type:"checkbox",checked:t.owned,readOnly:!0})}),(0,a.jsx)("td",{onClick:function(){return e.fragmentMustIncludeChanged(n)},className:"text-center",children:(0,a.jsx)("input",{type:"checkbox",checked:t.mustInclude,readOnly:!0})})]},t.name)}))})]})}),(0,a.jsx)("div",{className:"float-left",children:(0,a.jsxs)("table",{className:"pure-table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"min-width-240",children:"Fragment"}),(0,a.jsx)("th",{children:"Owned"}),(0,a.jsx)("th",{children:"Must Include"})]})}),(0,a.jsx)("tbody",{children:this.state.fragments.slice(26).map((function(t,n){return(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{className:"center-vertical cursor-default","data-tip":!0,"data-for":"fragment-info",onMouseOver:function(){return e.props.onHoveredFragmentChanged(t)},children:[(0,a.jsx)("img",{src:t.imageUrl,height:"30px"}),(0,a.jsx)("span",{children:t.name})]}),(0,a.jsx)("td",{onClick:function(){return e.fragmentOwnedChanged(26+n)},className:"text-center",children:(0,a.jsx)("input",{type:"checkbox",checked:t.owned,readOnly:!0})}),(0,a.jsx)("td",{onClick:function(){return e.fragmentMustIncludeChanged(26+n)},className:"text-center",children:(0,a.jsx)("input",{type:"checkbox",checked:t.mustInclude,readOnly:!0})})]},t.name)}))})]})})]})]})}}])&&c(t.prototype,n),r&&c(t,r),h}(r.Component)}}]);