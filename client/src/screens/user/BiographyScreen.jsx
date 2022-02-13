import React, { useState } from "react";
import { Header, PageHeader, SectionHeader, Footer } from "../../components";
import Icon from "react-icons-kit";
import { ic_star_outline_outline } from "react-icons-kit/md/ic_star_outline_outline";

const BiographyScreen = () => {
  const portrait =
    "https://karolbak.com/wp-content/uploads/2020/05/biografia-400x400.jpg";

  const [readMore, setReadMore] = useState(false);

  const onReadMoreClick = (e) => {
    setReadMore(true);
  };
  const onSeeLessClick = (e) => {
    setReadMore(false);
  };

  return (
    <div>
      <Header />
      <PageHeader title="biography" />
      <div style={{ marginTop: "70px", marginBottom: "100px" }}>
        <SectionHeader title="About Karol Bak" />
      </div>
      <div className="pageBody_80">
        <p className="about_1 about_text">
          Karol Bak was born on 30 May 1961 in Koło in the Wielkopolska Region.
          He graduated from the Fine Arts High School of Poznań with a degree in
          Interior Exhibition Arrangement. In 1984, he was admitted to the
          Graphics Department of the State College of Art (currently the
          University of Arts in Poznań). He already knew what direction he
          wanted to take in his studies – painting, graphics and sculpture were
          perceived as a prestigious pursuit of “searching for pure art.” He was
          confident he had made the best choice. He graduated in 1989 with
          distinction, with two degrees in Graphics, under Prof. Tadeusz
          Jackowski, and Drawing in the studio of Prof. Jarosław Kozłowski. He
          said this about his final examination:
        </p>
        <div className="about_quote_container">
          <div className="quote_left">
            <Icon icon={ic_star_outline_outline} size={30} />
          </div>
          <p className="about_text about_2">
            I displayed my drawings and graphics for two thesis supervisors in
            two large rooms of the Poznań Artistic Exhibition Office. In my
            graphics, mainly using the technique of copperplate engraving, I
            attempted to express my perceptions of timeless content and values.
            By contrast, my large drawings reflected my reality at the time, as
            I searched for answers to a number of daunting and pressing
            questions. One of the drawings, measuring 2 x 8 meters, showed
            life-size members of the communist riot police in combat formation
            en face. They stood, contrasted with a horseshoe-shaped barricade of
            randomly arranged chairs, an “installation” of sorts. There was also
            a 3 x 3 meter self-portrait, based on the golden ratio – the canon
            of proportions first proposed by Leonardo da Vinci.
          </p>
          <div className="quote_right">
            <Icon icon={ic_star_outline_outline} size={30} />
          </div>
        </div>
        <div className="about_section2">
          <p className="about_3 about_text">
            Both professors who supervised the artist in his two theses were
            strong influences on his art. Tadeusz Jackowski (born 1936) looked
            for illusion in his art, attempting to deceive the eye of the
            viewer. He combined various techniques, some of the more unusual of
            which were engraving and hand-painting. Jarosław Kozłowski (born
            1945) has been exhibiting his works since the late 1960s, mostly in
            installations relying on drawings, sound, light, photography and
            performance. He is associated with conceptual art and views art
            idealistically, as a domain of freedom, unrestrained by convention.
            <br />
            <br /> Karol Bak may well have adopted Tadeusz Jackowski’s love for
            graphics and drawing, as well as his penchant for illusion. Jarosław
            Kozłowski instilled in him the drive to create free art, which is
            then interpreted individually, in line with particular contexts.{" "}
            <br />
            <br />
            He perfected his painting technique under Andrzej Maciej Łubowski of
            the Fine Arts High School and, once at the Academy, under Prof.
            Andrzej Kurzawski.{" "}
          </p>
          <img src={portrait} alt="karol bak" />
        </div>
        {readMore === false && (
          <button className="about_more_btn" onClick={onReadMoreClick}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Read more
          </button>
        )}
        {readMore && (
          <p className="about_text about_1">
            In 1989, Karol Bak graduated with distinctions and two degrees. He
            received the “Best Graduation Work 1989” Award in Toruń. In the
            following year, he took part in the 21st exhibition of the graphics
            and drawings of the year, receiving the Jan Wroniecki medal. He
            garnered the top award for his graphics. As commented by Danuta
            Kudta in a historic text in Poznań’s Arsenał City Gallery:
            <br />
            <br />
            <div className="about_quote_container">
              <div className="quote_left">
                <Icon icon={ic_star_outline_outline} size={30} />
              </div>
              <p className="about_text about_2">
                Without a doubt, the majority of the contenders in the J.
                Wroniecki competition, whether in graphics or drawing, have
                remained faithful to classical techniques. And admittedly, their
                technique is flawless. Many artists, particularly young ones,
                delight in expressing themselves through challenging
                metalworking techniques, and equally meticulous drawings which
                require careful attention to detail. However, young artists use
                these traditional techniques to express new polysemantic
                content. The camouflage of technical perfectionism conceals
                essential symbols and metaphors, implied meanings and
                understatements… The works of the contest winners clearly stand
                out from among the drawings and graphics submitted for the
                contest exhibition. A particularly remarkable piece is the one
                awarded first prize and the J. Wroniecki medal: Karol Bąk’s
                precisely engraved copperplate, depicting a metaphysical
                pyramid. (…) The graphics and drawings presented in this
                exhibition tend to be more than just a soulless display of
                technical aptitude. They carry a significant load of emotion and
                multiple meanings. They reflect the reality around us, form a
                record of the existence of today’s man, often highly dramatic.
              </p>
              <div className="quote_right">
                <Icon icon={ic_star_outline_outline} size={30} />
              </div>
            </div>{" "}
            <br />
            <br />
            The work submitted by Karol Bak was entitled{" "}
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              "The Mystery of the Triangle"
            </span>
            . The purpose of this graphic was to answer the question of whether
            there is sense in perceiving, describing and studying the world by
            scholarly and mathematical methods. The pyramid reflected the golden
            triangle ratio; a graph which followed a mathematical formula
            extended into infinity. <br />
            <br />
            In the years immediately following his graduation, the artist
            focused on drawings and copperplates which portended the
            characteristics of his future style. The two were not the only
            techniques dear to his heart. As the artist himself explained in an
            interview for Food & Life magazine: <br />
            <br />
            <div className="about_quote_container">
              <div className="quote_left">
                <Icon icon={ic_star_outline_outline} size={30} />
              </div>
              <p className="about_text about_2">
                I have long searched for my path and I think I still am
                searching. After all, it is not the end that counts but the
                meticulous journey (…). As early as my university years, I began
                with drawings and graphics, explored the world of sketches and
                frescos. For some time, I dwelled on modern art: abstracts,
                performances and installations, ultimately to arrive at oil
                paintings, years later.{" "}
              </p>
              <div className="quote_right">
                <Icon icon={ic_star_outline_outline} size={30} />
              </div>
            </div>
            <br />
            <br />
            In the following years, the artist focused on the commercial design
            of, for example, magazine covers, exhibition stands for the Poznań
            International Fair, the first billboards and tram advertisements,
            perfume packaging, company logos, tattoos and public and private
            interiors. The world was not receptive to more artistic creations.{" "}
            <br />
            <br />
            In the early 1990s, Karol Bak set out on a number of travels to
            explore and experience the uniqueness of sites which are key for
            Western European art. In addition to the museums in Germany,
            Belgium, France, the Netherlands and Spain included in his scheduled
            itinerary, there were others which he visited spontaneously, without
            prior planning. The artist earned money during these travels by
            drawing portraits. He recollects one unusual encounter: <br />
            <br />
            …when in Leer, I resided in the castle of a certain incidental
            acquaintance, an aristocrat, where I painted copies of his private
            original Dutch masters. <br />
            <br />
            His artistic journeys, the longest of which lasted two months,
            allowed him to revise his views on certain famous artists, whose
            works did not impress him much, as well as some lesser-known names,
            whose unpublished paintings he discovered in provincial museums. The
            painter, nevertheless, has no intention of taking credit away from
            famous artists, or undermining the value of their works. <br />
            <br />I was struck by the magnificence of the original works of,
            among others, Rembrandt, El Greco, Vermeer, Grünewald, Bellini,
            Greek and Roman sculptures, Medieval, Gothic architecture,
            outstanding cathedrals, ancient amphitheatres, (…) Dürer, the
            Cathedrals of Chartres, Lyon, the fabulous Avila, Porta Nigra in
            Trier, Brussels with its amazing drawings museum located seven
            floors underground (…). <br />
            <br />
            His first-hand experience of numerous culturally significant works
            of art allowed Karol Bąk to develop his own way of seeing the world
            of art and, by the same token, his own unique style. <br />
            <br />I draw my inspiration from all available sources, I am always
            on the lookout for inspiration as I explore the world; I have seen
            many masterpieces and used them to develop my own standards of
            beauty and aesthetics. <br />
            <br />
            In the late 1990s, the artist shifted his focus towards oil
            painting, which he has pursued professionally since 2000. In
            December 2010, he said this about what oil painting meant to him in
            an interview for Food & Life. <br />
            <br />
            <div className="about_quote_container">
              <div className="quote_left">
                <Icon icon={ic_star_outline_outline} size={30} />
              </div>
              <p className="about_text about_2">
                Oil painting is the closest to me due to the technique itself,
                the freedom afforded by the colours and the way in which images
                are presented. This style and technique allows me to focus and
                be greatly inspired. It enables me to create illusory images
                saturated with colour and emotions, while adhering to a specific
                form.
              </p>
              <div className="quote_right">
                <Icon icon={ic_star_outline_outline} size={30} />
              </div>
            </div>
            <br /><br />
            Over the last dozen plus years, Karol Bak has painted hundreds of
            oil paintings. These make up the lion’s share, if not the totality
            of his artistic achievement. The artist has also produced graphics,
            ink drawings, pastel portraits, pencil sketches and frescos. His
            works vary not only in technique, but also in the way they are
            viewed. Oil painting may well be considered the brightest and most
            cheerful side of his artistic soul, whereas his drawings and
            sketches constitute a shadier and more sinister aspect of his art.
            Both have been coming together for years, in the thematic series
            Sailing Ships and Dialogues. His other oil painting themes include
            Cocoons, Aureoles, The Four Elements, Judith and Salome, Prima
            Mobilia as well as the Nocturnes series inspired by the music of
            Frederic Chopin, made to mark Chopin Year, 2010. <br />
            <br />
            Since 1988, the artist has held over a dozen individual exhibitions
            and taken part in tens of collective displays. The latter included
            Polish Surrealists (Warsaw 2008), ART.-EXPO (New York, Las Vegas
            2008), Primavera (Rotterdam, the Netherlands 2008 and 2009), The
            Charm of Women. The Allure of Flowers (Sopot 2009), Magical Dreams
            (Włocławek 2011), Art Revolution Taipei (Taipei, Taiwan 2012 and
            2013), ARTEUOMO (Rome, Italy 2012), and Magical Dreams II (Szczyrk
            2013). His works have inspired students of the Warsaw School of
            Arts, who used costumes from the paintings to design their own
            creations. He has taken part in international plein-air workshops at
            home and abroad, including Segovia, Spain. <br />
            <br />
            Today, Karol Bak collaborates with several Polish and foreign
            exhibition halls.
          </p>
        )}
        {readMore === true && (
          <button
            className="about_more_btn"
            onClick={onSeeLessClick}
            style={{ marginTop: "30px" }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            See less
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BiographyScreen;
