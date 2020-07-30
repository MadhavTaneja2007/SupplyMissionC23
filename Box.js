class Box 
{
    constructor(x,y,width,height,angle)
    {}
    body = Bodies.rectangle(x, y, width, height);
    width = width;
    height = height;
    
}

display()
{
    push();
    body.shapeColor = 'red';
    pop();

}