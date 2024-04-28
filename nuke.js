nukeNamePlaceholder=new Effect(900,4000,(e)=>{
    if(e.time<10){size=e.time*32;}
    else{size=320-((320*e.time-3200)/890)}
    Draw.color(Color.white);
    Lines.stroke(e.fout()*40);
    Lines.circle(e.x,e.y,e.fin()*4000);
    Draw.color(e.color);
    Lines.stroke(size);
    Lines.circle(e.x,e.y,size/2);
});

