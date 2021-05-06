class Polygon{
    constructor(x,y,r){
        var options={
            restitution: 0.8,
             friction:1,  
             density: 1

        }
        this.body=Bodies.circle(x,y,r,options);
        
        World.add(world,this.body);
        
    }
    display(){
        var pos=this.body.position;
        push ();
        
        imageMode (CENTER);
        image (polygon_img,pos.x,pos.y,40,40);
        pop ();
    }
}