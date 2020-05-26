import { Injectable } from '@angular/core';

@Injectable()
export class VillanoService {

    //private villano:any[]=
    private villano:Villano[]=
        [
            {
              nombre: "Magneto",
              bio: "Poderoso mutante con la habilidad de generar y controlar campos magnéticos mentales, Magneto ha sido el más eminente enemigo que hayan tenido los X-Men desde su creación. En sus primeras apariciones su motivación se debía a la megalomanía, pero posteriormente los guionistas han dado cuerpo al personaje y su origen, revelando que es un superviviente del holocausto judío (Shoah), cuyas acciones se encaminan a la protección de la raza mutante y evitar que sufra un destino similar.",
              img: "assets/img/magneto.jpg",
              aparicion: "1963-16-01",
              casa:"Marvel"
            },
            {
              nombre: "Galactus",
              bio: "En el universo Marvel, Galactus es un ser cósmico que necesita consumir planetas para calmar su hambre, por lo que recurre a la ayuda de heraldos que él mismo nombra. Asimismo, ha sido descrito como una fuerza que el universo necesita para su propio equilibrio",
              img: "assets/img/galactus.jpg",
              aparicion: "1966-03-01",
              casa:"Marvel"
            },
            {
              nombre: "Thanos",
              bio: "Thanos nació en el planeta Titán como el hijo de los Eternos Mentor y su hermano es Eros de Titán, también conocido como Starfox. Thanos lleva el gen Deviants, y como tal, comparte la apariencia física de la raza de los primos Eternos. Al nacer, su madre se sorprendió por su apariencia e intentó matarlo, debido a que creía que su hijo aniquilaría toda la vida en el universo, pero fue detenido por A'lars, el padre de Thanos. Durante sus años escolares, Thanos era un pacifista3​y solo jugaba con su hermano Eros y sus mascotas. En la adolescencia, Thanos se había fascinado con el nihilismo y la muerte, adorando y finalmente enamorándose de la encarnación física de la muerte, la señora Muerte.4​Como adulto, Thanos aumentó su fuerza física y sus poderes a través de su conocimiento científico superior.",
              img: "assets/img/thanos.jpg",
              aparicion: "1973-02-01",
              casa: "Marvel"
            },
            {
              nombre: "El duende verde",
              bio: " El Duende Verde es un supervillano con temática de Halloween cuyas armas se asemejan a murciélagos, fantasmas y linternas. El periodista e historiador del cómic, Mike Conroy escribe del personaje: De todos los villanos disfrazados que han plagado a Spider-Man a lo largo de los años, el más desaliñado y aterrador de todos es el Duende Verde. ​El Duende Verde ha aparecido en varias películas, incluyendo Spider-Man de 2002 como Norman Osborn, y Spider-Man 3 de 2007 y The Amazing Spider-Man 2 de 2014 como Harry Osborn.",
              img: "assets/img/duende.jpg",
              aparicion: "1964-07-01",
              casa:"Marvel"
            },
            {
              nombre: "Kingpin",
              bio: "El personaje es retratado como uno de los señores del crimen más temidos y poderosos en el Universo Marvel, que normalmente ocupa el puesto de líder supremo de la ciudad de Nueva York. Desde su primera aparición en The Amazing Spider-Man, a lo largo de su historia sus mayores rivales fueron Spider-Man, The Punisher y Daredevil. La lista de IGN de los 100 mejores villanos del cómic de la lista de todos los tiempos clasificó The Kingpin como el número 10",
              img: "assets/img/kingpin.jpg",
              aparicion: "1967-06-01",
              casa: "Marvel"
            },
            {
              nombre: "Ultron",
              bio: "La apariencia visual y los poderes de Ultron han variado, pero sus poderes comunes incluyen niveles sobrehumanos de fuerza, velocidad, resistencia, durabilidad y reflejos; vuelo a velocidades subsónicas; varias armas ofensivas como rayos concusivos de energía (encéfalo-rayo), disparados de sus manos y sus sensores ópticos, además de un rayo encefalopático, el cual sitúa a sus víctimas en un estado de coma semejante a la muerte. Este último rayo también permite a Ultron hipnotizar y controlar mentalmente a sus víctimas, o implantar órdenes hipnóticas subliminales dentro de sus mentes para ser realizados en un momento posterior.",
              img: "assets/img/ultron.jpg",
              aparicion: "1963-07-01",
              casa: "Marvel"
            },
            {
              nombre: "Doctor octopus",
              bio: "Es un científico loco muy inteligente, el Doctor Octopus es típicamente retratado como un hombre robusto y miope que utiliza cuatro poderosos tentáculos mecánicos semejantes a los de un pulpo, y está obsesionado con probar su propio genio y destruir al superhéroe El Hombre Araña.",
              img: "assets/img/octopus.jpg",
              aparicion: "1963-07-01",
              casa: "Marvel"
            }
    ];

    constructor(){
        console.log("Servicio listo para usar!!");
    }

    //getVillanos(){
    getVillanos():Villano[]{
        return this.villano;
    }

    getVillano(id:number){
        return this.villano[id];   
    }

    buscarVillano(palabra:string):Villano[]{
      let villanoArr:Villano[] = [];
      palabra = palabra.toLowerCase();
      for( let villano of this.villano){
        let nombre = villano.nombre.toLowerCase();
        if(nombre.indexOf(palabra)>=0){
           villanoArr.push(villano);
        }
      }
      return villanoArr;
    }

}

export interface Villano{
    nombre:string,
    bio:string,
    img:string,
    aparicion:string,
    casa:string
}