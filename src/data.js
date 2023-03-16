import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const footerLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
  { id: 5, href: "#featured", text: "featured" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-instagram" },
  { id: 4, href: "https://www.twitter.com", icon: "fab fa-linkedin" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet. Aut tempora cumque et dolorem laudantium aut tempora quia aut doloremque saepe? Ad omnis officia et adipisci veritatis.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Et modi quia est eaque autem ut placeat animi non consectetur voluptatem et doloribus explicabo et repellat laborum qui nihil voluptas. Ex possimus aspernatur non.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "Amazing Comfort",
    text: "Ex consequatur atque nam nemo assumenda ea rerum minus qui inventore doloribus et nobis maxime. Ut eius illum sed unde Quis eum nobis illum sed vitae quibusdam.",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: "august 26th, 2023",
    title: "Tibet",
    info: "On the lofty Tibetan Plateau on the northern side of the Himalayas, is an autonomous region of China. It's nicknamed the “Roof of the World” for its towering peaks. It shares Mt. Everest with Nepal.",
    location: "China",
    duration: 6,
    costs: 2100,
  },
  {
    id: 2,
    img: tour2,
    date: "october 1th, 2023",
    title: "Paris",
    info: "Paris is the capital and most populous city of France, with an estimated population of 2,165,423 residents in 2019 in an area of more than 105 km², making it the 30th most densely populated city in the world in 2020.",
    location: "Indonesia",
    duration: 11,
    costs: 1400,
  },
  {
    id: 3,
    img: tour3,
    date: "September 15th, 2023",
    title: "Seoul",
    info: "Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets.",
    location: "South Korea",
    duration: 8,
    costs: 5000,
  },
  {
    id: 4,
    img: tour4,
    date: "December 5th, 2019",
    title: "Bangkok",
    info: "Bangkok, officially known in Thai as Krung Thep Maha Nakhon and colloquially as Krung Thep, is the capital and most populous city of Thailand.",
    location: "Thailand",
    duration: 20,
    costs: 3300,
  },
  {
    id: 5,
    img: tour5,
    date: "august 26th, 2023",
    title: "Giraffe Manor",
    info: "Set in a 1930s manor house with gardens and a resident herd of endangered giraffes, this luxe all-inclusive hotel is 6 km from the Karen Blixen Museum and 7 km from Bomas of Kenya, a tourist village with cultural shows. It’s 26 km from Jomo Kenyatta International Airport.",
    location: "Kenya",
    duration: 2,
    costs: 2100,
  },
  {
    id: 6,
    img: tour6,
    date: "august 26th, 2023",
    title: "Taj Mahal",
    info: "The Taj Mahal is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.",
    location: "India",
    duration: 6,
    costs: 2100,
  },
];
