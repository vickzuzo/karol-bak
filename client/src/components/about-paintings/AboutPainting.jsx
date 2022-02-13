import React from "react";
import Icon from "react-icons-kit";
import {ic_star_outline_outline} from 'react-icons-kit/md/ic_star_outline_outline'

const Aboutpainting = () => {
  const data = [
    {
      icon: ic_star_outline_outline,
      title: "Black & White Classic",
      subtitle:
        "Nothing can compare to the black and white photography. This ongoing classic keeps on surprising us with new forms and styles",
    },
    {
      icon: ic_star_outline_outline,
      title: "Every Painting - a seperate story",
      subtitle:
        "Painting is more than just adrawing and coloring on a paper. It is a special form of art with its own history and philosophy.",
    },
    {
      icon: ic_star_outline_outline,
      title: "Growing up & Growing Older",
      subtitle:
        "I can say that my life experience has a great effect on my works. With age, the shots get deeper, gain a more philosophical meaning. ",
    },
  ];

  // const image =
  //   "https://karolbak.com/wp-content/uploads/2020/05/karol-bak-cognac-collection-939x800.jpg";
  return (
    <div className="painting_container">
      {data.map((data, index) => (<div className="painting_item_holder">
        <Icon icon={data?.icon} className="painting_icon" />
        <p className="painting_item_title">{data?.title}</p>
        <p className="painting_item_desc">
          {data?.subtitle}
        </p>
      </div>))}
    </div>
  );
};

export default Aboutpainting;
