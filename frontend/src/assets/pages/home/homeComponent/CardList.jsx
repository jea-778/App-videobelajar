import Card from "./Card";

const cardData = Array(9)
  .fill(null)
  .map((_, index) => ({
    title: "Big 4 Auditor Financial Analyst",
    text: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    imageName: `card${index + 1}.png`,
    avatarName: `Avatar${index + 1}.png`,
    name: "Jenna Ortega",
    job: "Senior Accountant",
    at: "di",
    company: "Gojek",
    starNames: [
      "./images/icons/Star.png",
      "./images/icons/Star.png",
      "./images/icons/Star2.png",
      "./images/icons/Star3.png",
      "./images/icons/Star3.png",
    ],
    rate: "3.5 (86)",
    price: "Rp 300K",
  }));

export default function CardList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8 pt-[24px] xl:pt-[32px] pb-[24px] xl:pb-[64px]">
      {cardData.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}
