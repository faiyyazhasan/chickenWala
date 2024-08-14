import React from "react";

const data = [
    {
        id: 1,
        Name: "Chicken",
        image:
          "https://img.freepik.com/premium-photo/painting-rooster-chickens-barn-with-baby-chicken-generative-ia_209190-141537.jpg?ga=GA1.1.1784806605.1718554634&semt=ais_hybrid",
        discription:
          "Chicken is the most common type of poultry in the world.[3] Owing to the relative ease and low cost of raising chickens—in comparison to mammals such as cattle or hogs—chicken meat (commonly called just chicken) and chicken eggs have become prevalent in numerous cuisines.Chicken can be prepared in a vast range of ways, including baking, grilling, barbecuing, frying, and boiling. Since the latter half of the 20th century, prepared chicken has become a staple of fast food. Chicken is sometimes cited as being more healthful than red meat, with lower concentrations of cholesterol and saturated fat.[4]The poultry farming industry that accounts for chicken production takes on a range of forms across different parts of the world. In developed countries, chickens are typically subject to intensive farming methods while less-developed areas raise chickens using more traditional farming techniques",
      },
  {
    id: 2,
    Name: "Duck",
    image:
      "https://img.freepik.com/free-photo/duck-nature-generate-image_23-2150632016.jpg?ga=GA1.1.1784806605.1718554634&semt=ais_hybrid",
    discription:
      "Duck is the common name for numerous species of waterfowl in the family Anatidae. Ducks are generally smaller and shorter-necked than swans and geese, which are members of the same family. Divided among several subfamilies, they are a form taxon; they do not represent a monophyletic group (the group of all descendants of a single common ancestral species), since swans and geese are not considered ducks. Ducks are mostly aquatic birds, and may be found in both fresh water and sea water.Ducks are sometimes confused with several types of unrelated water birds with similar forms, such as loons or divers, grebes, gallinules and coots.Etymology The word duck comes from Old English dūce 'diver', a derivative of the verb *dūcan 'to duck, bend down low as if to get under something, or dive', because of the way many species in the dabbling duck group feed by upending; compare with Dutch duiken and German tauchen 'to dive'.Pacific black duck displaying the characteristic upending duck . ",
  },
  {
    id: 3,
    Name: "Fishes",
    image:
      "https://img.freepik.com/free-photo/photorealistic-wild-tuna-day-celebration_23-2151307942.jpg?ga=GA1.1.1784806605.1718554634&semt=ais_hybrid",
    discription:
      "A fish market is a marketplace for selling fish and fish products. It can be dedicated to wholesale trade between fishermen and fish merchants, or to the sale of seafood to individual consumers, or to both. Retail fish markets, a type of wet market, often sell street food as well.Fish markets range in size from small fish stalls to large ones such as the great Tsukiji fish market in Tokyo, which turns over about 660,000 tonnes a year.[1]The term fish market can also refer to the process of fish marketing in general, but this article is concerned with physical marketplaces.",
  }, 
];

export default function Description() {
  return (
    <div className="container p-5 ">
      {data.map((d, i) => {
        return (
            <>
          <div className=" " style={{width:"100%",height:"400px",display:"flex", alignItems:"center"}}>
            <img src={d.image} style={{borderRadius:"50px",height:"400px", width:"400px"}} className="p-4"/>
           <div className=" p-5 h-100">

            <h3>{d.Name}</h3>
             <p className="text-wrap">{d.discription}</p>
           

             <button className="btn btn-light text-dark w-25">Know more</button>
             
             
           </div>
          </div>
          
           </>
        );
      })}
    </div>
  );
}
