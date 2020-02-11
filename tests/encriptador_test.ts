import { Encriptador } from "../Encriptador";

describe("ESC1", ()=>{
    it("Comprobación password", () => {
        //let resEsperado = 'c60580980424b7112df8d5b652b977f3';
        let resEsperado = 'c60580980424b7112df8d5b652b977f3qqqqqq';
        let cad = "";
        let encrip = new Encriptador();
        let encontrado : boolean = false;
        for(let a = 48; a < 123; a++){
            for(let b = 48; b < 123; b++){
                for(let c = 48; c < 123; c++){
                    for(let d = 48; d < 123; d++){
                        cad += String.fromCharCode(a);
                        cad += String.fromCharCode(b);
                        cad += String.fromCharCode(c);
                        cad += String.fromCharCode(d);

                        let resObtenido = encrip.encrypt(cad);
                        if(resObtenido == resEsperado){
                            encontrado = true;
                            //console.log(cad);
                            break;
                        }else{
                            cad = "";
                        }
                    }
                    if(encontrado) break;
                }
                if(encontrado) break;
            }
            if(encontrado) break;
        }

        expect(encontrado).toEqual(true);
    });
});