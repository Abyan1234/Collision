
AFRAME.registerComponent("coins", {
    init:function(){
        for(var i=1;i<=20;i++){
            var id=`hurdle${i}`;

            
            var posX=Math.floor(Math.random()*3000 + -1000)
            var posY=Math.floor(Math.random()*2 + -1)
            var posZ=Math.floor(Math.random()*3000 + -1000)

            var position={x:posX,y:posY,z:posZ}

            //Call the Function
            this.coins(id,position)
        }
    },

    coins:(id,position)=>{
        //Get terrain elements
        var terrainE1=document.querySelector("#terrain")
        
        //Create bird model entity
        var coinE1=document.createElement("a-entity")
        
        //Setting multiple attributes
        coinE1.setAttribute("id",id)

        coinE1.setAttribute("position",position)
        coinE1.setAttribute("scale",{x:500,y:500,z:500})

        coinE1.setAttribute("gltf-model","./assets/models/low-poly_gold_coin/scene.gltf")

        //Animated Models
        coinE1.setAttribute("animation-mixer",{})

        //Append bird entity as the child
        terrainE1.appendChild(coinE1)
    }
})