
const Resize = (func)=> {
    window.addEventListener('load',(event)=>{
        func();
    });
    
    window.addEventListener('resize',(event) =>{
        func();
    });
    
    func();
}
export default Resize;