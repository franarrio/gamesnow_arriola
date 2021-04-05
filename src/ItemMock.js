const ItemsMock = [
    // Anime & Videos
    {
        id: 8568,
        title: 'Grand Theft Auto V: Premium Online Edition',
        price: 22.5,
        pictureUrl:
            'https://s3.gaming-cdn.com/images/products/4211/271x377/grand-theft-auto-v-premium-online-edition-cover.jpg',
        category: 1,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 6252,
        title: 'Red Dead Redemption 2 Standard Edition',
        price: 32.5,
        pictureUrl:
            'https://s1.gaming-cdn.com/images/products/5679/271x377/red-dead-redemption-2-standard-edition-cover.jpg',
        category: 1,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 7026,
        title: 'Resident Evil Village',
        price: 50,
        pictureUrl: 'https://s3.gaming-cdn.com/images/products/6329/271x377/resident-evil-village-cover.jpg',
        category: 1,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    // Manga & Books
    {
        id: 5086,
        title: 'FIFA 21',
        price: 23.89,
        pictureUrl: 'https://s3.gaming-cdn.com/images/products/6890/271x377/fifa-21-cover.jpg',
        category: 2,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 9132,
        title: 'Dead by Daylight',
        price: 10,
        pictureUrl: 'https://s3.gaming-cdn.com/images/products/1904/271x377/dead-by-daylight-cover.jpg',
        category: 2,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 9916,
        title: 'Cyberpunk 2077',
        price: 8.99,
        pictureUrl: 'https://s1.gaming-cdn.com/images/products/840/271x377/cyberpunk-2077-cover.jpg',
        category: 2,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    // Figures
    {
        id: 5882,
        title: 'Biomutant',
        price: 9.99,
        pictureUrl: 'https://s2.gaming-cdn.com/images/products/2245/271x377/biomutant-cover.jpg',
        category: 3,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 8015,
        title: 'Outriders',
        price: 20.09,
        pictureUrl: 'https://s3.gaming-cdn.com/images/products/4835/271x377/outriders-cover.jpg',
        category: 3,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 3089,
        title: 'Minecraft',
        price: 19.99,
        pictureUrl: 'https://s2.gaming-cdn.com/images/products/442/271x377/minecraft-cover.jpg',
        category: 3,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    // Games
    {
        id: 5663,
        title: 'Forza Horizon 4',
        price: 59.01,
        pictureUrl:
            'https://s1.gaming-cdn.com/images/products/2682/271x377/forza-horizon-4-pc-xbox-one-cover.jpg',
        category: 4,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 6698,
        title: 'Sea of Thieves',
        price: 36.13,
        pictureUrl:
            'https://s2.gaming-cdn.com/images/products/967/271x377/sea-of-thieves-pc-xbox-one-cover.jpg',
        category: 4,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 4131,
        title: "Playerunknown's Battlegrounds",
        price: 59.88,
        pictureUrl:
            'https://s1.gaming-cdn.com/images/products/1995/271x377/playerunknowns-battlegrounds-cover.jpg',
        category: 4,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
];

export { ItemsMock };
