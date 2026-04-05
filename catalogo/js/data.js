// Catálogo padrão
const defaultCategories = [
    {
        title: "Mais Assistidos",
        items: [
            {
                img: "https://img.odcdn.com.br/wp-content/uploads/2021/09/one-piece-logo-min.jpg", top10: true, badge: "Clássico", badgeColor: "red", progress: 0,
                youtube: "https://www.youtube.com/watch?v=Ades3pQbeh8"
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/8d/Logotipo_de_Cheias_de_Charme.jpg/330px-Logotipo_de_Cheias_de_Charme.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=o7UkKoLxe6E"
            },
            {
                img: "https://m.media-amazon.com/images/S/pv-target-images/f7714983e1a0ddc063d88cd4972bb2f7774abd74e01029fc8d278ebea9dc8144.png", progress: 0,
                youtube: "https://www.youtube.com/watch?v=sgpqZq8KG8U"
            },
            {
                img: "https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000009921/44bea8c565db26c0c470a6325a47c9ea031633945cb91e4b5e1b1a39b01a2cdb", progress: 0,
                youtube: "https://www.youtube.com/watch?v=1Hojv0m3TqA&list=RD1Hojv0m3TqA&start_radio=1"
            },
        ]
    },
    {
        title: "Séries",
        items: [
            { img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop", top10: true, badge: "Nova temporada", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop", badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop", badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
        ]
    },
    {
        title: "Para maratonar",
        items: [
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
        ]
    }
];

// Catálogos personalizados por perfil
const perfilCatalogos = {
    "Lou": [
        {
            title: "Recomendado para Lou",
            items: [
                { img: "https://images.unsplash.com/photo-1489599849228-de6a45aa6582?q=80&w=600&auto=format&fit=crop", badge: "Favorito", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=600&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1494306166989-ab1dccfb7945?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1524712245610-0e6992b95b09?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            ]
        },
        {
            title: "Continue assistindo",
            items: [
                { img: "https://images.unsplash.com/photo-1489599849228-de6a45aa6582?q=80&w=600&auto=format&fit=crop", progress: 35, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=600&auto=format&fit=crop", progress: 60, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1494306166989-ab1dccfb7945?q=80&w=600&auto=format&fit=crop", progress: 20, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1524712245610-0e6992b95b09?q=80&w=600&auto=format&fit=crop", progress: 80, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            ]
        }
    ],
    "Cres": [
        {
            title: "Populares para Cres",
            items: [
                { img: "https://images.unsplash.com/photo-1586899028174-e7098604235b?q=80&w=600&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1611339555312-e607c25352fa?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            ]
        },
        {
            title: "Assistindo em Cres",
            items: [
                { img: "https://images.unsplash.com/photo-1586899028174-e7098604235b?q=80&w=600&auto=format&fit=crop", progress: 45, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?q=80&w=600&auto=format&fit=crop", progress: 25, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1611339555312-e607c25352fa?q=80&w=600&auto=format&fit=crop", progress: 70, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=600&auto=format&fit=crop", progress: 15, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            ]
        }
    ],
    "Colom": [
        {
            title: "Para Colom",
            items: [
                { img: "https://images.unsplash.com/photo-1478720568477-152d9e3287e3?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1495819041761-0c5b2e1ccb4c?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            ]
        },
        {
            title: "Top 10 em Colom",
            items: [
                { img: "https://images.unsplash.com/photo-1478720568477-152d9e3287e3?q=80&w=600&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1495819041761-0c5b2e1ccb4c?q=80&w=600&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=600&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            ]
        }
    ],
    "Morango": [
        {
            title: "Selecionado para Morango",
            items: [
                { img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1568876694728-451bbf694f7f?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1574689476328-76b23e11fcb9?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            ]
        },
        {
            title: "Destaque para Morango",
            items: [
                { img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600&auto=format&fit=crop", badge: "Novo", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1568876694728-451bbf694f7f?q=80&w=600&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1574689476328-76b23e11fcb9?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            ]
        }
    ],
    "Gelos": [
        {
            title: "Congelado para Gelos",
            items: [
                { img: "https://images.unsplash.com/photo-1535332066327-f4804c925f4b?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1530268729831-4be0ea652fed?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1542838132-92c51f509138?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            ]
        },
        {
            title: "Sem parar - Gelos",
            items: [
                { img: "https://images.unsplash.com/photo-1535332066327-f4804c925f4b?q=80&w=600&auto=format&fit=crop", progress: 55, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format&fit=crop", progress: 30, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1530268729831-4be0ea652fed?q=80&w=600&auto=format&fit=crop", progress: 40, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1542838132-92c51f509138?q=80&w=600&auto=format&fit=crop", progress: 65, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            ]
        }
    ],
    "Lan": [
        {
            title: "Entretenimento para Lan",
            items: [
                { img: "https://images.unsplash.com/photo-1611339555312-e607c25352fa?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            ]
        },
        {
            title: "Essencial para Lan",
            items: [
                { img: "https://images.unsplash.com/photo-1611339555312-e607c25352fa?q=80&w=600&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=600&auto=format&fit=crop", badge: "Clássico", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
                { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            ]
        }
    ]
};

// Função para obter as categorias do perfil
export function getCategoriasPerfil(nomePerfil) {
    const categoriasPerfil = perfilCatalogos[nomePerfil] || [];
    // Concatena os catálogos padrão com os catálogos personalizados do perfil
    return [...defaultCategories, ...categoriasPerfil];
}

// Função para compatibilidade com imports antigos
export const categories = defaultCategories;
