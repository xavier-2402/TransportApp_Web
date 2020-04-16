export class usuario{
    private id: number;
    private nombre:string;
    private apellido: string;
    private telefono: string;
    private edad: string;

    getId(){
        return this.id;
    }

    setId(id:number){
        this.id=id;
    }
    getNombre (){
        return this.nombre;
    }
    setNombre(nombre:string){
        this.nombre = nombre;

    }
    getApellido (){
        return this.apellido;
    }
    setApellido(apellido:string){
        this.apellido = apellido;

    }
    getTelefono (){
        return this.telefono;
    }
    setTelefono(telefono:string){
        this.telefono = telefono;

    }
    getEdad (){
        return this.edad;
    }
    setEdad(edad:string){
        this.edad = edad;

    }
}
