export interface Destination {
    id: string;
    name: string;
    location: string;
    continent: string;
    image: string;
    rating: number;
    reviews: number;
    price: number;
    currency: string;
    weather: {
        temp: number;
        condition: 'Sunny' | 'Cloudy' | 'Rainy' | 'Snowy';
    };
    tags: string[];
    popular: boolean;
    coordinates?: [number, number]; // [lat, lng]
    description?: string;
    highlights?: string[];
}

export const destinations: Destination[] = [
    {
        id: '1',
        name: 'Santorini',
        location: 'Greece',
        continent: 'Europe',
        image: 'https://images.unsplash.com/photo-1613395877344-13d4c2ce5d4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 1240,
        price: 450,
        currency: '$',
        weather: { temp: 24, condition: 'Sunny' },
        tags: ['Romance', 'Beach', 'Luxury'],
        popular: true,
        coordinates: [36.3932, 25.4615]
    },
    {
        id: '2',
        name: 'Kyoto',
        location: 'Japan',
        continent: 'Asia',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 850,
        price: 220,
        currency: '$',
        weather: { temp: 18, condition: 'Cloudy' },
        tags: ['Culture', 'History', 'Nature'],
        popular: true,
        coordinates: [35.0116, 135.7681]
    },
    {
        id: '3',
        name: 'Machu Picchu',
        location: 'Peru',
        continent: 'South America',
        image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 2100,
        price: 180,
        currency: '$',
        weather: { temp: 15, condition: 'Sunny' },
        tags: ['Adventure', 'History', 'Hiking'],
        popular: true,
        coordinates: [-13.1631, -72.5450]
    },
    {
        id: '4',
        name: 'Bora Bora',
        location: 'French Polynesia',
        continent: 'Oceania',
        image: 'https://images.unsplash.com/photo-1502085671122-2d218cd434e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 5.0,
        reviews: 500,
        price: 850,
        currency: '$',
        weather: { temp: 29, condition: 'Sunny' },
        tags: ['Luxury', 'Beach', 'Relaxation'],
        popular: false,
        coordinates: [-16.5004, -151.7415]
    },
    {
        id: '5',
        name: 'Reykjavik',
        location: 'Iceland',
        continent: 'Europe',
        image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 920,
        price: 320,
        currency: '$',
        weather: { temp: 5, condition: 'Snowy' },
        tags: ['Nature', 'Adventure', 'Cold'],
        popular: false,
        coordinates: [64.1265, -21.8174]
    },
    {
        id: '6',
        name: 'Marrakech',
        location: 'Morocco',
        continent: 'Africa',
        image: 'https://images.unsplash.com/photo-1597211684694-8f255721a8a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 780,
        price: 150,
        currency: '$',
        weather: { temp: 32, condition: 'Sunny' },
        tags: ['Culture', 'History', 'Desert'],
        popular: true,
        coordinates: [31.6295, -7.9811]
    },
    {
        id: '8',
        name: 'Kyoto',
        location: 'Japan',
        continent: 'Asia',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 850,
        price: 220,
        description: "The cultural heart of Japan, famous for its classical Buddhist temples, gardens, imperial palaces, Shinto shrines, and traditional wooden houses.",
        highlights: ["Kinkaku-ji", "Fushimi Inari-taisha", "Arashiyama Bamboo Grove"],
        popular: true,
        currency: 'JPY',
        weather: { temp: 18, condition: 'Cloudy' },
        tags: ['Culture', 'History', 'Nature'],
        coordinates: [35.0116, 135.7681]
    },
    {
        id: '9',
        name: 'Maui',
        location: 'Hawaii, USA',
        continent: 'North America',
        image: 'https://images.unsplash.com/photo-1542259679450-13f56ce26584?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 2100,
        price: 600,
        description: "Known as the Valley Isle, Maui is beloved for its world-famous beaches, sacred Iao Valley, and migrating humpback whales.",
        highlights: ["Hana Highway", "Haleakala National Park", "Kaanapali Beach"],
        popular: true,
        currency: 'USD',
        weather: { temp: 28, condition: 'Sunny' },
        tags: ['Beach', 'Nature', 'Relaxation'],
        coordinates: [20.7984, -156.3319]
    },
    {
        id: '10',
        name: 'Cape Town',
        location: 'South Africa',
        continent: 'Africa',
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 1560,
        price: 280,
        description: "A port city on South Africa’s southwest coast, on a peninsula beneath the imposing Table Mountain.",
        highlights: ["Table Mountain", "Robben Island", "V&A Waterfront"],
        popular: false,
        currency: 'ZAR',
        weather: { temp: 22, condition: 'Sunny' },
        tags: ['City', 'Nature', 'History'],
        coordinates: [-33.9249, 18.4241]
    },
    {
        id: '11',
        name: 'Queenstown',
        location: 'New Zealand',
        continent: 'Oceania',
        image: 'https://images.unsplash.com/photo-1507699622177-388898d99032?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 890,
        price: 350,
        description: "New Zealand's adventure capital, sitting on the shores of the South Island's Lake Wakatipu, set against the dramatic Southern Alps.",
        highlights: ["Milford Sound", "Bungee Jumping", "Lake Wakatipu"],
        popular: false,
        currency: 'NZD',
        weather: { temp: 15, condition: 'Cloudy' },
        tags: ['Adventure', 'Nature', 'Mountains'],
        coordinates: [-45.0312, 168.6626]
    },
    {
        id: '12',
        name: 'Barcelona',
        location: 'Spain',
        continent: 'Europe',
        image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 3200,
        price: 200,
        description: "The cosmopolitan capital of Spain’s Catalonia region, known for its art and architecture, particularly the fantastical Sagrada Família works.",
        highlights: ["Sagrada Família", "Park Güell", "Gothic Quarter"],
        popular: true,
        currency: 'EUR',
        weather: { temp: 24, condition: 'Sunny' },
        tags: ['City', 'Culture', 'Architecture'],
        coordinates: [41.3851, 2.1734]
    }
];
