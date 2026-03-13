// Product database
const Products = {
    // All products (6 por categoria, 2 com desconto)
    all: [
        // Bebidas (Beverages) - 6 products
        {
            id: 1,
            name: "Água Mineral 1.5L",
            description: "Água mineral natural, pura e refrescante.",
            price: 0.65,
            originalPrice: 0.75,
            discount: 13,
            image: "../assets/images/agua.jpg",
            category: "bebidas",
            categoryName: "Bebidas",
            onOffer: true,
            inStock: true,
            rating: 4.5
        },
        {
            id: 2,
            name: "Refrigerante Cola 2L",
            description: "Refrigerante de cola, bem gelado.",
            price: 1.99,
            originalPrice: 2.29,
            discount: 13,
            image: "../assets/images/refrigerante.jpg",
            category: "bebidas",
            categoryName: "Bebidas",
            onOffer: true,
            inStock: true,
            rating: 4.7
        },
        {
            id: 3,
            name: "Suco de Laranja 1L",
            description: "Suco de laranja natural, sem conservantes.",
            price: 2.49,
            originalPrice: 2.49,
            discount: 0,
            image: "../assets/images/suco.jpg",
            category: "bebidas",
            categoryName: "Bebidas",
            onOffer: false,
            inStock: true,
            rating: 4.6
        },
        {
            id: 4,
            name: "Cerveja Pilsen 350ml",
            description: "Cerveja pilsen, leve e refrescante.",
            price: 2.99,
            originalPrice: 2.99,
            discount: 0,
            image: "../assets/images/cerveja.jpg",
            category: "bebidas",
            categoryName: "Bebidas",
            onOffer: false,
            inStock: true,
            rating: 4.4
        },
        {
            id: 5,
            name: "Vinho Tinto 750ml",
            description: "Vinho tinto seco, ideal para refeições.",
            price: 12.99,
            originalPrice: 14.99,
            discount: 13,
            image: "../assets/images/vinho.jpg",
            category: "bebidas",
            categoryName: "Bebidas",
            onOffer: true,
            inStock: true,
            rating: 4.8
        },
        {
            id: 6,
            name: "Água de Coco 1L",
            description: "Água de coco natural, hidratante.",
            price: 3.49,
            originalPrice: 3.49,
            discount: 0,
            image: "../assets/images/agua_coco.jpg",
            category: "bebidas",
            categoryName: "Bebidas",
            onOffer: false,
            inStock: true,
            rating: 4.3
        },

        // Utilidades (Household Items) - 6 products
        {
            id: 7,
            name: "Papel Alumínio 30cmx10m",
            description: "Papel alumínio para conservação de alimentos.",
            price: 1.89,
            originalPrice: 2.19,
            discount: 14,
            image: "../assets/images/papel_aluminio.jpg",
            category: "utilidades",
            categoryName: "Utilidades",
            onOffer: true,
            inStock: true,
            rating: 4.3
        },
        {
            id: 8,
            name: "Saco de Lixo 30L",
            description: "Sacos de lixo resistentes, pacote com 10.",
            price: 2.49,
            originalPrice: 2.99,
            discount: 17,
            image: "../assets/images/saco_lixo.jpg",
            category: "utilidades",
            categoryName: "Utilidades",
            onOffer: true,
            inStock: true,
            rating: 4.4
        },
        {
            id: 9,
            name: "Pano de Prato",
            description: "Pano de prato de algodão, pacote com 3.",
            price: 4.99,
            originalPrice: 4.99,
            discount: 0,
            image: "../assets/images/pano_prato.jpg",
            category: "utilidades",
            categoryName: "Utilidades",
            onOffer: false,
            inStock: true,
            rating: 4.5
        },
        {
            id: 10,
            name: "Esponja Multiuso",
            description: "Esponja para limpeza, pacote com 5.",
            price: 2.29,
            originalPrice: 2.29,
            discount: 0,
            image: "../assets/images/esponja.jpg",
            category: "utilidades",
            categoryName: "Utilidades",
            onOffer: false,
            inStock: true,
            rating: 4.2
        },
        {
            id: 11,
            name: "Fósforos",
            description: "Caixa de fósforos com 40 palitos.",
            price: 0.89,
            originalPrice: 0.99,
            discount: 10,
            image: "../assets/images/fosforos.jpg",
            category: "utilidades",
            categoryName: "Utilidades",
            onOffer: true,
            inStock: true,
            rating: 4.1
        },
        {
            id: 12,
            name: "Vela Branca",
            description: "Vela branca, pacote com 4.",
            price: 1.79,
            originalPrice: 1.79,
            discount: 0,
            image: "../assets/images/vela.jpg",
            category: "utilidades",
            categoryName: "Utilidades",
            onOffer: false,
            inStock: true,
            rating: 4.0
        },

        // Limpeza (Cleaning Products) - 6 products
        {
            id: 13,
            name: "Detergente Líquido 500ml",
            description: "Detergente para louças, limpeza eficiente.",
            price: 1.29,
            originalPrice: 1.49,
            discount: 13,
            image: "../assets/images/detergente.jpg",
            category: "limpeza",
            categoryName: "Limpeza",
            onOffer: true,
            inStock: true,
            rating: 4.6
        },
        {
            id: 14,
            name: "Desinfetante 1L",
            description: "Desinfetante com aroma de lavanda.",
            price: 2.99,
            originalPrice: 3.49,
            discount: 14,
            image: "../assets/images/desinfetante.jpg",
            category: "limpeza",
            categoryName: "Limpeza",
            onOffer: true,
            inStock: true,
            rating: 4.5
        },
        {
            id: 15,
            name: "Água Sanitária 1L",
            description: "Água sanitária para limpeza pesada.",
            price: 1.99,
            originalPrice: 1.99,
            discount: 0,
            image: "../assets/images/agua_sanitaria.jpg",
            category: "limpeza",
            categoryName: "Limpeza",
            onOffer: false,
            inStock: true,
            rating: 4.4
        },
        {
            id: 16,
            name: "Limpador Multiuso 500ml",
            description: "Limpador multiuso com aroma de limão.",
            price: 2.49,
            originalPrice: 2.49,
            discount: 0,
            image: "../assets/images/multiuso.jpg",
            category: "limpeza",
            categoryName: "Limpeza",
            onOffer: false,
            inStock: true,
            rating: 4.5
        },
        {
            id: 17,
            name: "Sabão em Pó 1kg",
            description: "Sabão em pó para roupas, poder de limpeza.",
            price: 5.99,
            originalPrice: 6.99,
            discount: 14,
            image: "../assets/images/sabao_po.jpg",
            category: "limpeza",
            categoryName: "Limpeza",
            onOffer: true,
            inStock: true,
            rating: 4.7
        },
        {
            id: 18,
            name: "Amaciante 1L",
            description: "Amaciante de roupas, perfume duradouro.",
            price: 3.49,
            originalPrice: 3.49,
            discount: 0,
            image: "../assets/images/amaciante.jpg",
            category: "limpeza",
            categoryName: "Limpeza",
            onOffer: false,
            inStock: true,
            rating: 4.3
        },

        // Padaria (Bakery) - 6 products
        {
            id: 19,
            name: "Pão Francês (unidade)",
            description: "Pão francês fresco, crocante por fora e macio por dentro.",
            price: 0.25,
            originalPrice: 0.30,
            discount: 17,
            image: "../assets/images/pao_frances.jpg",
            category: "padaria",
            categoryName: "Padaria",
            onOffer: true,
            inStock: true,
            rating: 4.9
        },
        {
            id: 20,
            name: "Baguete Tradicional",
            description: "Baguete francesa, assada na hora.",
            price: 0.89,
            originalPrice: 0.99,
            discount: 10,
            image: "../assets/images/baguete.jpg",
            category: "padaria",
            categoryName: "Padaria",
            onOffer: true,
            inStock: true,
            rating: 4.8
        },
        {
            id: 21,
            name: "Pão de Forma",
            description: "Pão de forma integral, fatias macias.",
            price: 2.49,
            originalPrice: 2.49,
            discount: 0,
            image: "../assets/images/pao_forma.jpg",
            category: "padaria",
            categoryName: "Padaria",
            onOffer: false,
            inStock: true,
            rating: 4.6
        },
        {
            id: 22,
            name: "Croissant",
            description: "Croissant folhado, recheado com chocolate.",
            price: 1.49,
            originalPrice: 1.49,
            discount: 0,
            image: "../assets/images/croissant.jpg",
            category: "padaria",
            categoryName: "Padaria",
            onOffer: false,
            inStock: true,
            rating: 4.7
        },
        {
            id: 23,
            name: "Bolo de Cenoura",
            description: "Bolo de cenoura com cobertura de chocolate.",
            price: 4.99,
            originalPrice: 5.99,
            discount: 17,
            image: "../assets/images/bolo.jpg",
            category: "padaria",
            categoryName: "Padaria",
            onOffer: true,
            inStock: true,
            rating: 4.9
        },
        {
            id: 24,
            name: "Sonho",
            description: "Sonho recheado com creme.",
            price: 1.29,
            originalPrice: 1.29,
            discount: 0,
            image: "../assets/images/sonho.jpg",
            category: "padaria",
            categoryName: "Padaria",
            onOffer: false,
            inStock: true,
            rating: 4.8
        },

        // Açougue (Butcher Shop) - 6 products
        {
            id: 25,
            name: "Peito de Frango kg",
            description: "Peito de frango fresco, sem pele e sem ossos.",
            price: 5.99,
            originalPrice: 6.99,
            discount: 14,
            image: "../assets/images/peito_frango.jpg",
            category: "acougue",
            categoryName: "Açougue",
            onOffer: true,
            inStock: true,
            rating: 4.7
        },
        {
            id: 26,
            name: "Bife de Vaca kg",
            description: "Bifes de vaca tenros e saborosos.",
            price: 12.99,
            originalPrice: 14.99,
            discount: 13,
            image: "../assets/images/bife.jpg",
            category: "acougue",
            categoryName: "Açougue",
            onOffer: true,
            inStock: true,
            rating: 4.9
        },
        {
            id: 27,
            name: "Carne Moída kg",
            description: "Carne moída de primeira, fresca.",
            price: 8.99,
            originalPrice: 8.99,
            discount: 0,
            image: "../assets/images/carne_moida.jpg",
            category: "acougue",
            categoryName: "Açougue",
            onOffer: false,
            inStock: true,
            rating: 4.6
        },
        {
            id: 28,
            name: "Linguiça Toscana kg",
            description: "Linguiça toscana temperada.",
            price: 7.49,
            originalPrice: 7.49,
            discount: 0,
            image: "../assets/images/linguica.jpg",
            category: "acougue",
            categoryName: "Açougue",
            onOffer: false,
            inStock: true,
            rating: 4.5
        },
        {
            id: 29,
            name: "Coxa de Frango kg",
            description: "Coxa de frango com sobrecoxa.",
            price: 4.99,
            originalPrice: 5.99,
            discount: 17,
            image: "../assets/images/coxa.jpg",
            category: "acougue",
            categoryName: "Açougue",
            onOffer: true,
            inStock: true,
            rating: 4.4
        },
        {
            id: 30,
            name: "Costela Bovina kg",
            description: "Costela bovina para assar.",
            price: 9.99,
            originalPrice: 9.99,
            discount: 0,
            image: "../assets/images/costela.jpg",
            category: "acougue",
            categoryName: "Açougue",
            onOffer: false,
            inStock: true,
            rating: 4.8
        },

        // Hortifruti (Fruits & Vegetables) - 6 products
        {
            id: 31,
            name: "Maçã Gala kg",
            description: "Maçãs gala frescas e suculentas.",
            price: 1.49,
            originalPrice: 1.79,
            discount: 17,
            image: "../assets/images/maca.jpg",
            category: "hortifruti",
            categoryName: "Hortifruti",
            onOffer: true,
            inStock: true,
            rating: 4.6
        },
        {
            id: 32,
            name: "Banana Prata kg",
            description: "Bananas prata maduras e saborosas.",
            price: 1.19,
            originalPrice: 1.39,
            discount: 14,
            image: "../assets/images/banana.jpg",
            category: "hortifruti",
            categoryName: "Hortifruti",
            onOffer: true,
            inStock: true,
            rating: 4.5
        },
        {
            id: 33,
            name: "Alface Crespa",
            description: "Alface crespa fresca, unidade.",
            price: 0.79,
            originalPrice: 0.79,
            discount: 0,
            image: "../assets/images/alface.jpg",
            category: "hortifruti",
            categoryName: "Hortifruti",
            onOffer: false,
            inStock: true,
            rating: 4.4
        },
        {
            id: 34,
            name: "Tomate kg",
            description: "Tomate vermelho e fresco.",
            price: 1.29,
            originalPrice: 1.29,
            discount: 0,
            image: "../assets/images/tomate.jpg",
            category: "hortifruti",
            categoryName: "Hortifruti",
            onOffer: false,
            inStock: true,
            rating: 4.3
        },
        {
            id: 35,
            name: "Cebola kg",
            description: "Cebola branca, ideal para temperos.",
            price: 0.99,
            originalPrice: 1.19,
            discount: 17,
            image: "../assets/images/cebola.jpg",
            category: "hortifruti",
            categoryName: "Hortifruti",
            onOffer: true,
            inStock: true,
            rating: 4.5
        },
        {
            id: 36,
            name: "Batata kg",
            description: "Batata inglesa, própria para cozinhar.",
            price: 0.89,
            originalPrice: 0.89,
            discount: 0,
            image: "../assets/images/batata.jpg",
            category: "hortifruti",
            categoryName: "Hortifruti",
            onOffer: false,
            inStock: true,
            rating: 4.2
        },

        // Congelados (Frozen Foods) - 6 products
        {
            id: 37,
            name: "Pizza Congelada",
            description: "Pizza de mussarela, pronta para assar.",
            price: 4.99,
            originalPrice: 5.99,
            discount: 17,
            image: "../assets/images/pizza.jpg",
            category: "congelados",
            categoryName: "Congelados",
            onOffer: true,
            inStock: true,
            rating: 4.3
        },
        {
            id: 38,
            name: "Ervilhas Congeladas 500g",
            description: "Ervilhas congeladas, prontas para cozinhar.",
            price: 2.29,
            originalPrice: 2.59,
            discount: 12,
            image: "../assets/images/ervilhas.jpg",
            category: "congelados",
            categoryName: "Congelados",
            onOffer: true,
            inStock: true,
            rating: 4.5
        },
        {
            id: 39,
            name: "Hambúrguer Congelado",
            description: "Hambúrguer bovino, pacote com 4.",
            price: 5.49,
            originalPrice: 5.49,
            discount: 0,
            image: "../assets/images/hamburguer.jpg",
            category: "congelados",
            categoryName: "Congelados",
            onOffer: false,
            inStock: true,
            rating: 4.4
        },
        {
            id: 40,
            name: "Batata Frita Congelada",
            description: "Batata palito pré-frita, pacote 1kg.",
            price: 3.99,
            originalPrice: 3.99,
            discount: 0,
            image: "../assets/images/batata_frita.jpg",
            category: "congelados",
            categoryName: "Congelados",
            onOffer: false,
            inStock: true,
            rating: 4.6
        },
        {
            id: 41,
            name: "Sorvete 2L",
            description: "Sorvete de chocolate e baunilha.",
            price: 6.99,
            originalPrice: 7.99,
            discount: 13,
            image: "../assets/images/sorvete.jpg",
            category: "congelados",
            categoryName: "Congelados",
            onOffer: true,
            inStock: true,
            rating: 4.8
        },
        {
            id: 42,
            name: "Legumes Mistos",
            description: "Mistura de legumes congelados, pacote 500g.",
            price: 1.99,
            originalPrice: 1.99,
            discount: 0,
            image: "../assets/images/legumes.jpg",
            category: "congelados",
            categoryName: "Congelados",
            onOffer: false,
            inStock: true,
            rating: 4.2
        },

        // Enlatados (Canned Goods) - 6 products
        {
            id: 43,
            name: "Atum em Óleo 170g",
            description: "Atum sólido em óleo vegetal.",
            price: 1.79,
            originalPrice: 1.99,
            discount: 10,
            image: "../assets/images/atum.jpg",
            category: "enlatados",
            categoryName: "Enlatados",
            onOffer: true,
            inStock: true,
            rating: 4.6
        },
        {
            id: 44,
            name: "Milho Verde 200g",
            description: "Milho verde em conserva.",
            price: 1.29,
            originalPrice: 1.49,
            discount: 13,
            image: "../assets/images/milho_lata.jpg",
            category: "enlatados",
            categoryName: "Enlatados",
            onOffer: true,
            inStock: true,
            rating: 4.4
        },
        {
            id: 45,
            name: "Sardinha em Óleo",
            description: "Sardinha em óleo comestível.",
            price: 1.49,
            originalPrice: 1.49,
            discount: 0,
            image: "../assets/images/sardinha_lata.jpg",
            category: "enlatados",
            categoryName: "Enlatados",
            onOffer: false,
            inStock: true,
            rating: 4.3
        },
        {
            id: 46,
            name: "Ervilha em Lata",
            description: "Ervilha em conserva, lata 200g.",
            price: 1.19,
            originalPrice: 1.19,
            discount: 0,
            image: "../assets/images/ervilha_lata.jpg",
            category: "enlatados",
            categoryName: "Enlatados",
            onOffer: false,
            inStock: true,
            rating: 4.2
        },
        {
            id: 47,
            name: "Molho de Tomate",
            description: "Molho de tomate tradicional, lata 340g.",
            price: 0.99,
            originalPrice: 1.19,
            discount: 17,
            image: "../assets/images/molho_tomate.jpg",
            category: "enlatados",
            categoryName: "Enlatados",
            onOffer: true,
            inStock: true,
            rating: 4.5
        },
        {
            id: 48,
            name: "Creme de Leite",
            description: "Creme de leite, lata 300g.",
            price: 1.59,
            originalPrice: 1.59,
            discount: 0,
            image: "../assets/images/creme_leite.jpg",
            category: "enlatados",
            categoryName: "Enlatados",
            onOffer: false,
            inStock: true,
            rating: 4.4
        },

        // Mercearia (Grocery) - 6 products
        {
            id: 49,
            name: "Arroz Agulha 1kg",
            description: "Arroz agulha de alta qualidade.",
            price: 1.99,
            originalPrice: 2.49,
            discount: 20,
            image: "../assets/images/arroz.jpg",
            category: "mercearia",
            categoryName: "Mercearia",
            onOffer: true,
            inStock: true,
            rating: 4.5
        },
        {
            id: 50,
            name: "Espaguete 500g",
            description: "Massa espaguete de sêmola de trigo.",
            price: 0.79,
            originalPrice: 0.89,
            discount: 11,
            image: "../assets/images/massas.jpg",
            category: "mercearia",
            categoryName: "Mercearia",
            onOffer: true,
            inStock: true,
            rating: 4.3
        },
        {
            id: 51,
            name: "Azeite Extra Virgem 500ml",
            description: "Azeite de oliva extra virgem, primeira prensagem.",
            price: 4.49,
            originalPrice: 4.49,
            discount: 0,
            image: "../assets/images/azeite.jpg",
            category: "mercearia",
            categoryName: "Mercearia",
            onOffer: false,
            inStock: true,
            rating: 4.8
        },
        {
            id: 52,
            name: "Feijão Preto 1kg",
            description: "Feijão preto tipo 1, selecionado.",
            price: 2.49,
            originalPrice: 2.49,
            discount: 0,
            image: "../assets/images/feijao.jpg",
            category: "mercearia",
            categoryName: "Mercearia",
            onOffer: false,
            inStock: true,
            rating: 4.6
        },
        {
            id: 53,
            name: "Sal Refinado 1kg",
            description: "Sal refinado, pacote 1kg.",
            price: 0.89,
            originalPrice: 0.99,
            discount: 10,
            image: "../assets/images/sal.jpg",
            category: "mercearia",
            categoryName: "Mercearia",
            onOffer: true,
            inStock: true,
            rating: 4.2
        },
        {
            id: 54,
            name: "Açúcar Refinado 1kg",
            description: "Açúcar refinado, pacote 1kg.",
            price: 1.29,
            originalPrice: 1.29,
            discount: 0,
            image: "../assets/images/acucar.jpg",
            category: "mercearia",
            categoryName: "Mercearia",
            onOffer: false,
            inStock: true,
            rating: 4.1
        },

        // Papelaria (Stationery) - 6 products
        {
            id: 55,
            name: "Caderno Universitário",
            description: "Caderno universitário 10 matérias, capa dura.",
            price: 8.99,
            originalPrice: 10.99,
            discount: 18,
            image: "../assets/images/caderno.jpg",
            category: "papelaria",
            categoryName: "Papelaria",
            onOffer: true,
            inStock: true,
            rating: 4.7
        },
        {
            id: 56,
            name: "Caneta Esferográfica (pacote 10)",
            description: "Canetas esferográficas, ponta média, várias cores.",
            price: 2.99,
            originalPrice: 3.49,
            discount: 14,
            image: "../assets/images/caneta.jpg",
            category: "papelaria",
            categoryName: "Papelaria",
            onOffer: true,
            inStock: true,
            rating: 4.5
        },
        {
            id: 57,
            name: "Lápis Preto",
            description: "Lápis preto nº2, pacote com 12.",
            price: 1.99,
            originalPrice: 1.99,
            discount: 0,
            image: "../assets/images/lapis.jpg",
            category: "papelaria",
            categoryName: "Papelaria",
            onOffer: false,
            inStock: true,
            rating: 4.3
        },
        {
            id: 58,
            name: "Borracha Branca",
            description: "Borracha branca, pacote com 4.",
            price: 0.99,
            originalPrice: 0.99,
            discount: 0,
            image: "../assets/images/borracha.jpg",
            category: "papelaria",
            categoryName: "Papelaria",
            onOffer: false,
            inStock: true,
            rating: 4.2
        },
        {
            id: 59,
            name: "Régua 30cm",
            description: "Régua de plástico transparente 30cm.",
            price: 0.79,
            originalPrice: 0.99,
            discount: 20,
            image: "../assets/images/regua.jpg",
            category: "papelaria",
            categoryName: "Papelaria",
            onOffer: true,
            inStock: true,
            rating: 4.1
        },
        {
            id: 60,
            name: "Cola Bastão",
            description: "Cola bastão 40g, pacote com 2.",
            price: 1.49,
            originalPrice: 1.49,
            discount: 0,
            image: "../assets/images/cola.jpg",
            category: "papelaria",
            categoryName: "Papelaria",
            onOffer: false,
            inStock: true,
            rating: 4.0
        }
    ],

    // Categories in alphabetical order
    categories: [
        {
            id: 1,
            name: "Açougue",
            slug: "acougue",
            icon: "fa-drumstick-bite",
            description: "Carnes frescas de qualidade",
            productCount: 6
        },
        {
            id: 2,
            name: "Bebidas",
            slug: "bebidas",
            icon: "fa-wine-bottle",
            description: "Refrigerantes, águas, sucos e bebidas em geral",
            productCount: 6
        },
        {
            id: 3,
            name: "Congelados",
            slug: "congelados",
            icon: "fa-snowflake",
            description: "Pizzas, vegetais e alimentos congelados",
            productCount: 6
        },
        {
            id: 4,
            name: "Enlatados",
            slug: "enlatados",
            icon: "fa-jar",
            description: "Conservas, atum, milho e outros enlatados",
            productCount: 6
        },
        {
            id: 5,
            name: "Hortifruti",
            slug: "hortifruti",
            icon: "fa-apple-whole",
            description: "Frutas, verduras e legumes frescos",
            productCount: 6
        },
        {
            id: 6,
            name: "Limpeza",
            slug: "limpeza",
            icon: "fa-soap",
            description: "Produtos de limpeza e higiene doméstica",
            productCount: 6
        },
        {
            id: 7,
            name: "Mercearia",
            slug: "mercearia",
            icon: "fa-basket-shopping",
            description: "Arroz, feijão, massas e mantimentos",
            productCount: 6
        },
        {
            id: 8,
            name: "Padaria",
            slug: "padaria",
            icon: "fa-bread-slice",
            description: "Pães frescos, baguetes e produtos de padaria",
            productCount: 6
        },
        {
            id: 9,
            name: "Papelaria",
            slug: "papelaria",
            icon: "fa-pen",
            description: "Material escolar e de escritório",
            productCount: 6
        },
        {
            id: 10,
            name: "Utilidades",
            slug: "utilidades",
            icon: "fa-kitchen-set",
            description: "Utensílios domésticos e descartáveis",
            productCount: 6
        }
    ],

    // Featured products for home page (12 products, at least one from each category)
    featured: [5, 37, 19, 33, 26, 41, 47, 43, 49, 55, 17, 12],

    // Then add this method to get featured products
    getFeatured() {
        return this.featured.map(id => this.all.find(p => p.id === id));
    },

    // Sort categories alphabetically by name
    getSortedCategories() {
        return [...this.categories].sort((a, b) => a.name.localeCompare(b.name));
    },

    // Get products by category
    getByCategory(categorySlug) {
        return this.all.filter(p => p.category === categorySlug);
    },

    // Get products on offer
    getOffers() {
        return this.all.filter(p => p.onOffer);
    },

    // Get product by ID
    getById(id) {
        return this.all.find(p => p.id === id);
    },

    // Search products
    search(query) {
        const searchTerm = query.toLowerCase();
        return this.all.filter(p => 
            p.name.toLowerCase().includes(searchTerm) || 
            p.description.toLowerCase().includes(searchTerm) ||
            p.categoryName.toLowerCase().includes(searchTerm)
        );
    },

    // Get category by slug
    getCategoryBySlug(slug) {
        return this.categories.find(c => c.slug === slug);
    },

    // Get total products count
    getTotalCount() {
        return this.all.length;
    }
};

// Make Products available globally
window.Products = Products;