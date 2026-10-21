import monsteraDeliciosa from '../assets/plants/monstera-deliciosa.svg';
import fiddleLeafFig from '../assets/plants/fiddle-leaf-fig.svg';
import rubberPlant from '../assets/plants/rubber-plant.svg';
import birdOfParadise from '../assets/plants/bird-of-paradise.svg';
import philodendronBrasil from '../assets/plants/philodendron-brasil.svg';
import zzPlant from '../assets/plants/zz-plant.svg';
import snakePlant from '../assets/plants/snake-plant.svg';
import aloeVera from '../assets/plants/aloe-vera.svg';
import jadePlant from '../assets/plants/jade-plant.svg';
import echeveria from '../assets/plants/echeveria.svg';
import pothos from '../assets/plants/pothos.svg';
import spiderPlant from '../assets/plants/spider-plant.svg';
import peaceLily from '../assets/plants/peace-lily.svg';
import anthurium from '../assets/plants/anthurium.svg';
import calathea from '../assets/plants/calathea.svg';
import bostonFern from '../assets/plants/boston-fern.svg';
import chineseEvergreen from '../assets/plants/chinese-evergreen.svg';
import parlorPalm from '../assets/plants/parlor-palm.svg';

export const plantCategories = [
  {
    id: 'tropical-favorites',
    name: 'Tropical Favorites',
    description: 'Big, expressive leaves that turn an ordinary corner into a green escape.',
    plants: [
      {
        id: 'monstera-deliciosa',
        name: 'Monstera Deliciosa',
        description: 'Iconic split leaves with a relaxed, tropical rhythm.',
        price: 48,
        light: 'Bright, indirect light',
        care: 'Easy',
        image: monsteraDeliciosa,
      },
      {
        id: 'fiddle-leaf-fig',
        name: 'Fiddle Leaf Fig',
        description: 'Sculptural violin-shaped leaves with a bold silhouette.',
        price: 65,
        light: 'Bright, indirect light',
        care: 'Moderate',
        image: fiddleLeafFig,
      },
      {
        id: 'rubber-plant',
        name: 'Rubber Plant',
        description: 'Glossy, deep green leaves that bring instant polish.',
        price: 38,
        light: 'Medium to bright light',
        care: 'Easy',
        image: rubberPlant,
      },
      {
        id: 'bird-of-paradise',
        name: 'Bird of Paradise',
        description: 'Dramatic paddle leaves inspired by island sunsets.',
        price: 72,
        light: 'Bright, indirect light',
        care: 'Moderate',
        image: birdOfParadise,
      },
      {
        id: 'philodendron-brasil',
        name: 'Philodendron Brasil',
        description: 'Trailing heart leaves splashed with lime and gold.',
        price: 32,
        light: 'Medium, indirect light',
        care: 'Easy',
        image: philodendronBrasil,
      },
      {
        id: 'zz-plant',
        name: 'ZZ Plant',
        description: 'Glossy, resilient stems that thrive on a little neglect.',
        price: 36,
        light: 'Low to bright light',
        care: 'Easy',
        image: zzPlant,
      },
    ],
  },
  {
    id: 'easy-care',
    name: 'Succulents & Easy Care',
    description: 'Low-fuss beauties for busy weeks, bright desks, and first-time plant parents.',
    plants: [
      {
        id: 'snake-plant',
        name: 'Snake Plant',
        description: 'Architectural sword leaves that clean the air quietly.',
        price: 34,
        light: 'Low to bright light',
        care: 'Easy',
        image: snakePlant,
      },
      {
        id: 'aloe-vera',
        name: 'Aloe Vera',
        description: 'Plump, soothing leaves in a sculptural rosette shape.',
        price: 22,
        light: 'Bright, direct light',
        care: 'Easy',
        image: aloeVera,
      },
      {
        id: 'jade-plant',
        name: 'Jade Plant',
        description: 'Coin-shaped leaves on a charming bonsai-like frame.',
        price: 26,
        light: 'Bright, direct light',
        care: 'Easy',
        image: jadePlant,
      },
      {
        id: 'echeveria',
        name: 'Echeveria',
        description: 'A warm copper-rose succulent rosette, small but striking.',
        price: 18,
        light: 'Bright, direct light',
        care: 'Moderate',
        image: echeveria,
      },
      {
        id: 'golden-pothos',
        name: 'Golden Pothos',
        description: 'Cascading golden vines for shelves and hanging baskets.',
        price: 24,
        light: 'Low to bright light',
        care: 'Easy',
        image: pothos,
      },
      {
        id: 'spider-plant',
        name: 'Spider Plant',
        description: 'Playful striped ribbons that spill from the pot.',
        price: 28,
        light: 'Bright, indirect light',
        care: 'Easy',
        image: spiderPlant,
      },
    ],
  },
  {
    id: 'blooms-and-calm',
    name: 'Blooms & Calm',
    description: 'Soft textures and quiet blooms for slow mornings and restful rooms.',
    plants: [
      {
        id: 'peace-lily',
        name: 'Peace Lily',
        description: 'Deep green leaves with elegant white blooms.',
        price: 39,
        light: 'Medium, indirect light',
        care: 'Easy',
        image: peaceLily,
      },
      {
        id: 'anthurium',
        name: 'Anthurium',
        description: 'Heart-shaped red blooms with a glossy finish.',
        price: 44,
        light: 'Bright, indirect light',
        care: 'Moderate',
        image: anthurium,
      },
      {
        id: 'calathea-orbifolia',
        name: 'Calathea Orbifolia',
        description: 'Patterned leaves that fold up like living art.',
        price: 46,
        light: 'Medium, indirect light',
        care: 'Moderate',
        image: calathea,
      },
      {
        id: 'boston-fern',
        name: 'Boston Fern',
        description: 'Feathery fronds for a soft, woodland feel.',
        price: 30,
        light: 'Bright, indirect light',
        care: 'Moderate',
        image: bostonFern,
      },
      {
        id: 'chinese-evergreen',
        name: 'Chinese Evergreen',
        description: 'Painted foliage that glows in low light.',
        price: 33,
        light: 'Low to medium light',
        care: 'Easy',
        image: chineseEvergreen,
      },
      {
        id: 'parlor-palm',
        name: 'Parlor Palm',
        description: 'Airy, feathery fronds with a graceful arch.',
        price: 35,
        light: 'Low to bright light',
        care: 'Easy',
        image: parlorPalm,
      },
    ],
  },
];

export const allPlants = plantCategories.flatMap((category) => category.plants);

export const featuredPlant = allPlants.find((plant) => plant.id === 'monstera-deliciosa');
