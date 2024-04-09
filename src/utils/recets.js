const recets = [
    {
      id: 1,
      name: "Tortilla de patatas",
      image: "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2022/07/11/fotografia-de-una-tortilla-de-patata.jpeg",
      ingredients: ["patatas", "huevos", "cebolla", "aceite de oliva", "sal"],
      preparation: "1. Pelar y cortar las patatas y la cebolla.\n2. Freír las patatas y la cebolla en aceite caliente.\n3. Batir los huevos y añadir sal al gusto.\n4. Mezclar las patatas y la cebolla fritas con los huevos batidos.\n5. Cocinar en una sartén hasta que la tortilla esté dorada por ambos lados.",
      duration: "30 minutos"
    },
    {
      id: 2,
      name: "Pasta Carbonara",
      image: "https://www.comedera.com/wp-content/uploads/2015/06/pinar-kucuk-QuFm328PV88-unsplash-1536x1024.jpg",
      ingredients: ["pasta", "bacon", "huevos", "queso parmesano", "nata", "sal", "pimienta"],
      preparation: "1. Cocinar la pasta en agua con sal según las instrucciones del paquete.\n2. Freír el bacon en una sartén hasta que esté crujiente.\n3. Batir los huevos, añadir la nata, el queso parmesano rallado, sal y pimienta al gusto.\n4. Escurrir la pasta y mezclarla con la salsa de huevo y bacon caliente.\n5. Servir inmediatamente.",
      duration: "25 minutos"
    },
    {
      id: 3,
      name: "Sushi",
      image: "https://www.elespectador.com/resizer/rFSBhd7uyH2MhjQzO3jnJNoatXk=/arc-anglerfish-arc2-prod-elespectador/public/SDB552A6BBHANGBCLVEIYRL3KY.jpg",
      ingredients: ["arroz para sushi", "alga nori", "pescado fresco", "aguacate", "vinagre de arroz", "azúcar", "sal", "salsa de soja", "wasabi", "jengibre encurtido"],
      preparation: "1. Cocinar el arroz para sushi y aliñarlo con una mezcla de vinagre de arroz, azúcar y sal.\n2. Extender una capa de arroz sobre el alga nori.\n3. Añadir el pescado y el aguacate en tiras sobre el arroz.\n4. Enrollar el sushi con ayuda de una esterilla de bambú.\n5. Cortar el rollo en rodajas y servir con salsa de soja, wasabi y jengibre encurtido.",
      duration: "40 minutos"
    },
    {
      id: 4,
      name: "Pizza Margarita",
      image: "https://www.annarecetasfaciles.com/files/pizza-margarita-1-scaled.jpg",
      ingredients: ["masa de pizza", "salsa de tomate", "mozzarella", "tomate", "albahaca fresca", "aceite de oliva", "sal"],
      preparation: "1. Extender la masa de pizza sobre una bandeja.\n2. Cubrir la masa con salsa de tomate.\n3. Distribuir rodajas de mozzarella y tomate sobre la salsa.\n4. Hornear la pizza a alta temperatura hasta que esté dorada y crujiente.\n5. Retirar del horno y esparcir hojas de albahaca fresca.\n6. Rociar con un chorrito de aceite de oliva y sal al gusto antes de servir.",
      duration: "35 minutos"
    },
    {
      id: 5,
      name: "Ensalada César",
      image: "https://lacocinadefrabisa.lavozdegalicia.es/wp-content/uploads/2016/04/ensalada-cesar.jpg",
      ingredients: ["lechuga romana", "pan tostado", "pollo a la parrilla", "queso parmesano", "salsa César", "aceite de oliva", "sal", "pimienta"],
      preparation: "1. Lavar y cortar la lechuga romana en trozos.\n2. Cortar el pan en cubos y tostarlo en una sartén con un poco de aceite de oliva.\n3. Cortar el pollo a la parrilla en tiras.\n4. Mezclar la lechuga con el pollo, el pan tostado y salsa César.\n5. Espolvorear con queso parmesano rallado, sal y pimienta al gusto antes de servir.",
      duration: "20 minutos"
    },
    {
      id: 6,
      name: "Risotto de Champiñones",
      image: "https://i.blogs.es/b64bf1/risotto-de-setas/840_560.jpg",
      ingredients: ["arroz Arborio", "champiñones", "cebolla", "caldo de verduras", "vino blanco", "queso parmesano", "mantequilla", "aceite de oliva", "sal", "pimienta"],
      preparation: "1. Picar la cebolla y los champiñones.\n2. Sofreír la cebolla en mantequilla y aceite de oliva hasta que esté transparente.\n3. Añadir los champiñones y cocinar hasta que estén dorados.\n4. Agregar el arroz Arborio y cocinar un par de minutos.\n5. Verter el vino blanco y dejar reducir.\n6. Añadir el caldo de verduras poco a poco mientras se va removiendo el risotto.\n7. Cocinar hasta que el arroz esté al dente y cremoso.\n8. Incorporar el queso parmesano rallado, sal y pimienta al gusto antes de servir.",
      duration: "45 minutos"
    },
    {
      id: 7,
      name: "Lasaña",
      image: "https://www.huleymantel.com/uploads/s1/30/73/78/lasan-a-de-carne-canva.jpeg",
      ingredients: ["pasta para lasaña", "carne picada", "salsa de tomate", "queso mozzarella", "queso parmesano", "cebolla", "ajo", "aceite de oliva", "sal", "pimienta"],
      preparation: "1. Cocinar la pasta para lasaña según las instrucciones del paquete.\n2. Sofreír la cebolla y el ajo en aceite de oliva.\n3. Agregar la carne picada y cocinar hasta que esté dorada.\n4. Incorporar la salsa de tomate y cocinar a fuego lento durante unos minutos.\n5. En una bandeja para horno, alternar capas de pasta, carne y queso mozzarella rallado.\n6. Repetir las capas hasta llenar la bandeja y terminar con queso parmesano rallado.\n7. Hornear la lasaña hasta que el queso esté dorado y burbujeante.\n8. Dejar reposar unos minutos antes de servir.",
      duration: "1 hora y 30 minutos"
    },
    {
      id: 8,
      name: "Gazpacho Andaluz",
      image: "https://images.hola.com/imagenes/cocina/recetas/2017062296209/receta-gazpacho-andaluz/0-962-900/gazpa-and-adobe-t.jpg",
      ingredients: ["tomates maduros", "pepino", "pimiento verde", "cebolla", "diente de ajo", "pan duro", "aceite de oliva", "vinagre de Jerez", "sal", "pimienta"],
      preparation: "1. Cortar los tomates, el pepino, el pimiento, la cebolla y el ajo en trozos grandes.\n2. Remojar el pan duro en agua.\n3. En una licuadora, mezclar todos los ingredients junto con el pan escurrido, el aceite de oliva, el vinagre de Jerez, sal y pimienta al gusto.\n4. Triturar hasta obtener una mezcla homogénea.\n5. Enfriar en el refrigerador durante al menos una hora antes de servir.",
      duration: "15 minutos"
    },
    {
      id: 9,
      name: "Espaguetis a la Boloñesa",
      image: "https://www.unileverfoodsolutions.com.co/dam/global-ufs/mcos/NOLA/calcmenu/recipes/col-recipies/fruco-tomate-cocineros/BOLO%C3%91ESA%201200x709.png",
      ingredients: ["espaguetis", "carne picada de res", "salsa de tomate", "cebolla", "zanahoria", "apio", "ajo", "vino tinto", "aceite de oliva", "sal", "pimienta"],
      preparation: "1. En una sartén grande, calienta un poco de aceite de oliva y añade la cebolla, la zanahoria, el apio y el ajo picados finamente. Cocina hasta que estén tiernos.\n2. Agrega la carne picada y cocina hasta que esté dorada.\n3. Vierte un poco de vino tinto y deja que se evapore el alcohol.\n4. Añade la salsa de tomate, sal y pimienta al gusto. Cocina a fuego lento durante unos 20-30 minutos.\n5. Mientras tanto, cocina los espaguetis en agua hirviendo con sal según las instrucciones del paquete.\n6. Escurre los espaguetis y sírvelos con la salsa boloñesa por encima. Espolvorea con queso parmesano rallado si lo deseas.",
      duration: "1 hora"
    },
    {
      id: 10,
      name: "Pollo al Curry",
      image: "https://cocinaabuenashoras.com/files/pollo-al-curry.jpg",
      ingredients: ["pechugas de pollo", "cebolla", "pimiento rojo", "pimiento verde", "curry en polvo", "leche de coco", "caldo de pollo", "aceite de oliva", "sal", "pimienta"],
      preparation: "1. Corta las pechugas de pollo en trozos y sazónalas con sal y pimienta al gusto.\n2. En una sartén grande, calienta un poco de aceite de oliva y cocina el pollo hasta que esté dorado por todos lados. Retira y reserva.\n3. En la misma sartén, añade un poco más de aceite y cocina la cebolla y los pimientos cortados en tiras hasta que estén tiernos.\n4. Agrega el curry en polvo y cocina por un par de minutos.\n5. Vierte la leche de coco y el caldo de pollo. Lleva a ebullición y luego reduce el fuego y deja cocinar a fuego lento durante unos 15 minutos.\n6. Devuelve el pollo a la sartén y cocina por unos minutos más hasta que esté completamente cocido y la salsa haya espesado ligeramente.\n7. Sirve el pollo al curry caliente acompañado de arroz blanco o naan.",
      duration: "50 minutos"
    }
  ];
  
  module.exports = { recets };